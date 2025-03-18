import { CrossIcon } from "@/components/Icons";
import { useIngredient } from "@/app/week-8/context/ingredientContext";
import { useEffect, useState } from "react";

export default function MealsMenu({ onClose }) {
  const { ingredient, setIngredient } = useIngredient();
  const [meals, setMeals] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!ingredient) {
      return;
    }
    const fetchMeals = async () => {
      setLoading(true);
      setError(null);

      try {
        const res = await fetch(`/api/meals/${encodeURIComponent(ingredient)}`);

        if (!res.ok) {
          throw new Error(`Failed to fetch meals: ${res.statusText}`);
        }
        const data = await res.json();
        setMeals(data.meals || []);
      } catch (err) {
        setError(err.message || "An error occurred while fetching meals.");
      } finally {
        setLoading(false);
      }
    };
    fetchMeals();
  }, [ingredient]);

  return (
    <div className="h-full w-full px-8 py-10">
      <div className="flex flex-col gap-4 font-poppins">
        {/* title */}
        <div className="flex justify-between">
          <h2 className="text-xl font-semibold">Meals</h2>
          <CrossIcon
            className="cursor-pointer"
            onClick={() => {
              setIngredient(null);
              onClose();
            }}
          />
        </div>

        {/* contents */}
        {loading && <p>Loading meals...</p>}
        {error && <p className="text-red-500">{error}</p>}
        {!loading && !error && meals.length === 0 && (
          <p>No meals found for {ingredient}.</p>
        )}
        {!loading && !error && meals.length > 0 && (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
            {meals.map((meal) => (
              <div
                key={meal.idMeal}
                className="flex flex-col items-center rounded-lg border bg-white p-4 shadow-sm"
              >
                <img
                  src={meal.strMealThumb}
                  alt={meal.strMeal}
                  className="h-32 w-32 rounded-md object-cover"
                  onError={(e) => {
                    e.currentTarget.src = "/placeholder-image.jpg"; // Fallback image
                  }}
                />
                <p className="mt-2 text-center text-sm font-medium">
                  {meal.strMeal}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

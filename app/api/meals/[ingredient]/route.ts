export async function GET(
  request: Request,
  { params }: { params: Promise<{ ingredient: string }> },
) {
  const resolvedParams = await params;
  const { ingredient } = resolvedParams;

  if (!ingredient) {
    return new Response(JSON.stringify({ error: "Ingredient is required" }), {
      status: 400,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  const apiUrl = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`;

  try {
    const res = await fetch(apiUrl, {
      cache: "force-cache",
      next: { revalidate: 120 },
    });

    if (!res.ok) {
      throw new Error(`MealDB API responded with status: ${res.status}`);
    }

    const data = await res.json();

    return new Response(JSON.stringify(data), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error(`Error fetching meals for ${ingredient}:`, error);

    return new Response(
      JSON.stringify({ error: "Failed to fetch meals from MealDB" }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
  }
}

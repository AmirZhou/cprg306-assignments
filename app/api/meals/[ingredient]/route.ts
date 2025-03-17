
export async function GET(request: Request, {params}) {
  const ingredient = params.ingredient;
  const apiUrl = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`;
  const res = await fetch(apiUrl);
  const data = await res.json();

  return Response.json(data)
}
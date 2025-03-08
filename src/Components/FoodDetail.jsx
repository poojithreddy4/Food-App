import { useEffect, useState } from "react";
export default function FoodDetails({ foodId }) {
  const [food, setFood] = useState({});
  const URL = `https://api.spoonacular.com/recipes/${foodId}/information`;
  const API_Key = "84495968fcef43a7bbed9e9b74437c0c";
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function fetchFood() {
      const res = await fetch(`${URL}?apiKey=${API_Key}`);
      const data = await res.json();
      console.log(data);
      setFood(data);
      setLoading(false);
    }
    fetchFood();
  }, [foodId]);

  return (
    <div>
      <div>
        <h1>{food.title}</h1>
        <img src={food.image} alt=""></img>
      </div>
      <span>
        <strong>{food.readyInMinutes} Minutes</strong>
      </span>
      <br></br>
      <span>Serves {food.servings}</span>
      <br></br>
      <span>{food.vegetarian ? "Vegetarian" : "Non-Vegeterian"}</span>
      <br></br>
      <span>{food.vegan ? "Vegan" : "Non-Vegan"}</span>
      <br></br>
      <div>
        <span>${food.pricePerServing / 100} Per Serving</span>
      </div>
      <h1>Instructions</h1>
      <div>
        <ol>
          {loading ? (
            <p>is Loading ...</p>
          ) : (
            food.analyzedInstructions[0].steps.map((step) => (
              <li>{step.step}</li>
            ))
          )}
        </ol>
      </div>
    </div>
  );
}

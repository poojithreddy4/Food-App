import { useEffect, useState } from "react";
import styles from "./fooddetails.module.css";
import ItemList from "./itemList";
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
      <div className={styles.recipeCard}>
        <h1 className={styles.recipeName}>{food.title}</h1>
        <img className={styles.Image} src={food.image} alt=""></img>

        <div className={styles.recipeDetails}>
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
        </div>
        <div>
          <span>${food.pricePerServing / 100} Per Serving</span>
        </div>
        <ItemList food={food} loading={loading} />
        <h2>Instructions</h2>

        <div className={styles.recipeInstructions}>
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
    </div>
  );
}

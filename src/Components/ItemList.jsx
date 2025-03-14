import Item from "./Item";

export default function ItemList({ food, loading }) {
  return (
    <div>
      {loading ? (
        <p>is...Loading</p>
      ) : (
        food.extendedIngredients.map((item) => <Item item={item} />)
      )}
      {}
    </div>
  );
}

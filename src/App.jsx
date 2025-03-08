import { useState } from "react";
import "./App.css";
import Container from "./Components/Container";
import FoodDetails from "./Components/FoodDetail";
import FoodList from "./Components/FoodList";
import InnerContainer from "./Components/InnerContainer";
import Nav from "./Components/Nav";
import Search from "./Components/Search";
export default function App() {
  const [foodData, setFoodData] = useState([]);
  const [foodId, setFoodId] = useState("656329");
  return (
    <div className="App">
      <Nav />
      <Search foodData={foodData} setFoodData={setFoodData} />
      <Container>
        <InnerContainer>
          <FoodList setFoodId={setFoodId} foodData={foodData} />
        </InnerContainer>
        <InnerContainer>
          <FoodDetails foodId={foodId} />
        </InnerContainer>
      </Container>
    </div>
  );
}

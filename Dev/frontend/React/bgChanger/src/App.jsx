import React from "react";
import FoodItem from "./components/FoodItem";
import Card from "./Card";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  let arr = ["Dal", "Chapati", "Matar Paneer", "Mix Veg", "Salad", "Milk"];
  return (
    <div>
      <Card name="VAIBHAV" />
      <FoodItem items={arr} />
    </div>
  );
}

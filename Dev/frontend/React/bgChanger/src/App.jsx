import React from "react";
import FoodItem from "./components/FoodItem";
import Card from "./Card";
import "bootstrap/dist/css/bootstrap.min.css";
import ErrorMessage from "./components/ErrorMessage";
import "./App.css";

export default function App() {
  let arr = ["Dal", "Chapati", "Matar Paneer", "Mix Veg", "Salad", "Milk"];
  return (
    <div>
      <Card name="VAIBHAV" />
      <ErrorMessage items={arr} />
      <FoodItem items={arr} />
    </div>
  );
}

import React from "react";
import Card from "react-bootstrap/Card";
import "./Recipe.css";

const Recipe = ({ title, calories, image, ingredients }) => {
  return (
    <Card style={{ width: "18rem" }} className="menu">
      <Card.Title>{title}</Card.Title>
      <br></br>
      <Card.Img variant="top" src={image} className="image" />
      <Card.Body>
        <Card.Text>
          <ol>
            Ingredients:
            {ingredients.map((ingredients) => (
              <li>{ingredients.text}</li>
            ))}
          </ol>
          <p>Calories:{calories}</p>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};
export default Recipe;

import React from "react";

const Reciep = ({ title, calories, img, ingredients }) => {
  return (
    <div className="reciep-item">
      <h1>{title}</h1>
      <ul>
        {ingredients.map(item => (
          <li key={Math.random() * Math.random()}>{item.text}</li>
        ))}
      </ul>
      <p>Calories: {calories}</p>
      <img src={img} alt={"Image of " + title} />
    </div>
  );
};

export default Reciep;

import React from 'react'
import {OrderItem} from "../../types";

const FoodItem: React.FC<OrderItem> = ({image, name, price, ingredients, onAddToOrder}) => {
    return (
    <div className="food-item">
      <img src={image} alt={name} />
      <div className="content">
        <h3>{name}</h3>
          {ingredients &&
              Object.entries(ingredients).map(([name, amount]) => (
                  <p>{name}: {amount}</p>
              ))
          }
        <p>${price}</p>
        <button onClick={onAddToOrder}>Add To Order</button>
      </div>
    </div>
  );
};

export default FoodItem;

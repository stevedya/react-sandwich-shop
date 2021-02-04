import React from "react";
import FoodItem from "components/FoodItem";
import {OrderItem} from "../../types";

const OrderForm: React.FC = () => {

    let {menu}: { menu: OrderItem[] } = require("data.json");

    function addToOrder() {
        alert('item added!')
    }

    return (
        <div>
            <div className="food-grid">
                {menu.map((item) => {
                    return <FoodItem
                        key={item.name}
                        name={item.name}
                        price={item.price}
                        ingredients={item.ingredients}
                        image={item.image}
                        onAddToOrder={() => addToOrder()}/>;
                })}
            </div>
        </div>
    );
};

export default OrderForm;

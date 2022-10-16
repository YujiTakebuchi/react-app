import React, { useState } from "react";
import IngredientList from "./IngredientsList";
import Instructions from "./Instructions";
import StarRating from "./StarRating";
import ColorList from "./ColorList";
import colorData from "../../data/color-data.json";

function Recipe({ name, ingredients, steps }) {
    const [colors, setColors] = useState(colorData);
    return (
        <section id={name.toLowerCase().replace(/ /g, "-")}>
            <h1>{name}</h1>
            <IngredientList list={ingredients} />
            <Instructions title="Cooking Instructions" steps={steps} />
            <StarRating
                style={{ backgroundColor: "lightblue" }}
                onDoubleClick={e => alert("double click!")}
            />
            <ColorList
                colors={colors}
                onRemoveColor={id => {
                    const newColors = colors.filter(color => color.id !== id);
                    setColors(newColors);
                }}
                onRateColor={(id, rating) => {
                    const newColors = colors.map(color => 
                        color.id === id ? { ...color, rating } : color
                    );
                    setColors(newColors);
                }}
            />
        </section>
    );
}

export default Recipe;
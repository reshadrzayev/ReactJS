import React from 'react';

const Recipe = ({ title, calories, image, ingredients }) => {
    return (
        <div className="recipe container-fluid d-flex flex-column justify-content-center align-items-center">
             <br /><br /><br /><h1>{title}</h1>
            <div className="recipe-row row">
                <div className="recipe-left cc col-md-6 d-flex flex-column justify-content-center align-items-center">
                    <img src={image} alt={title} />
                </div>
                <div className="recipe-right cc col-md-6 d-flex flex-column align-items-center justify-content-center">
                    <h4>Ingredients</h4>
                    <ul>
                        {ingredients.map(ingredients => (
                            <li>{ingredients.text}</li>
                        ))}
                    </ul>
                    <p>Calories: {calories}</p>
                </div>
            </div>

        </div>
    )
}

export default Recipe;
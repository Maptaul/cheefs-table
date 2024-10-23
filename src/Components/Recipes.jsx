import PropTypes from "prop-types";
import { useEffect, useState } from "react";

const Recipes = ({ addRecipeToQueue }) => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("recipes.json")
      .then((res) => res.json())
      .then((data) => setRecipes(data));
  }, []);

  return (
    <div className="md:w-2/3">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {recipes.map((recipe) => (
          <div
            key={recipe.recipe_id}
            className="card card-compact bg-base-100 border shadow-xl"
          >
            <figure className="px-8 pt-6">
              <img
                className=" w-full md:h-52 rounded-xl"
                src={recipe.recipe_image}
                alt="Recipe Image"
              />
            </figure>
            <div className="card-body space-y-4">
              <h2 className="card-title text-2xl text-gray-800 font-bold ">
                {recipe.recipe_name}
              </h2>
              <p className="text-gray-600 text-xl">
                {recipe.short_description}
              </p>
              <hr />
              <h3 className="text-xl font-bold text-gray-700">
                Ingredients : {recipe.ingredients.length}
              </h3>
              <ul className="ml-5">
                {recipe.ingredients.map((item, index) => (
                  <li className="list-disc text-lg" key={index}>
                    {item}
                  </li>
                ))}
              </ul>
              <hr />
              <div className="flex gap-4 justify-between">
                <div className="flex items-center gap-2">
                  <i className="fa-regular fa-clock"></i>
                  <p>{recipe.preparing_time}</p>
                </div>
                <div className="flex items-center gap-2 ml-4">
                  <i className="fa-solid fa-fire-flame-curved"></i>
                  <p>{recipe.calories}</p>
                </div>
              </div>
              <div className="card-actions justify-start">
                <button
                  onClick={() => addRecipeToQueue(recipe)}
                  className="btn bg-green-400 text-gray-600 rounded-full border-none font-bold "
                >
                  Want to Cook
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

Recipes.propTypes = {
  addRecipeToQueue: PropTypes.array,
};
export default Recipes;

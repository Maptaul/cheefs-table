import PropTypes from "prop-types";
const Sidebar = ({
  recipeQueue,
  handleRemove,
  preparedRecipe,
  calculateTimeAndCalories,
  totalTime,
  totalCalorie,
}) => {
  return (
    <div className="md:h-1/3 card card-compact bg-base-100 px-5 py-5 border shadow-xl">
      {/* want to cook  */}
      <div className="mb-5">
        <h1 className="font-semibold text-2xl text-center mb-3">
          {" "}
          Want to cook : {recipeQueue.length}
        </h1>
        <hr />
        <div className="overflow-x-auto ">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Time</th>
                <th>Calories</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {recipeQueue.map((recipe, index) => (
                <tr key={index} className="hover">
                  <th>{index + 1}</th>
                  <td>{recipe.recipe_name}</td>
                  <td>{recipe.preparing_time}</td>
                  <td>{recipe.calories}</td>
                  <td>
                    <button
                      onClick={() => {
                        handleRemove(recipe.recipe_id);
                        calculateTimeAndCalories(
                          recipe.preparing_time,
                          recipe.calories
                        );
                      }}
                      className="btn bg-green-400 text-gray-600 rounded-full px-2 py-1 md:px-4 md:py-2 my-2 text-xl font-normal"
                    >
                      Preparing
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {/* currently Cook */}
      <div>
        <h1 className="font-semibold text-2xl text-center mb-3">
          {" "}
          Currently cooking: {preparedRecipe.length}
        </h1>
        <hr />
        <div className="overflow-x-auto ">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Time</th>
                <th>Calories</th>
              </tr>
            </thead>
            <tbody>
              {preparedRecipe.map((recipe, index) => (
                <tr key={index} className="hover">
                  <th>{index + 1}</th>
                  <td>{recipe.recipe_name}</td>
                  <td>{recipe.preparing_time}</td>
                  <td>{recipe.calories}</td>
                </tr>
              ))}
              <tr className="hover">
                <th></th>
                <td></td>
                <td> Total Time={totalTime}</td>
                <td>Total calories={totalCalorie}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

Sidebar.propTypes = {
  handleRemove: PropTypes.array,
  recipeQueue: PropTypes.array,
  preparedRecipe: PropTypes.array,
  calculateTimeAndCalories: PropTypes.func,
  totalTime: PropTypes.number,
  totalCalorie: PropTypes.number,
};

export default Sidebar;

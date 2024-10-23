import PropTypes from "prop-types";
const Sidebar = ({ recipeQueue }) => {
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
                      onClick={() => console.log("preparing")}
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
          Currently cooking: {recipeQueue.length}
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
              {recipeQueue.map((recipe, index) => (
                <tr key={index} className="hover">
                  <th>{index + 1}</th>
                  <td>{recipe.recipe_name}</td>
                  <td>{recipe.preparing_time}</td>
                  <td>{recipe.calories}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

Sidebar.propTypes = {
  recipeQueue: PropTypes.array,
};

export default Sidebar;

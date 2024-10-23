import PropTypes from "prop-types";
const Sidebar = ({ recipeQueue }) => {
  return (
    <div className="md:h-1/3 card card-compact bg-base-100 px-5 py-5 border shadow-xl">
      <h1 className="font-semibold text-2xl">
        {" "}
        Want to cook : {recipeQueue.length}
      </h1>
    </div>
  );
};

Sidebar.propTypes = {
  recipeQueue: PropTypes.array,
};

export default Sidebar;

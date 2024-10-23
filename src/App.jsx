import { useState } from "react";
import Banner from "./Components/Banner";
import Header from "./Components/Header";
import OurRecipes from "./Components/OurRecipes";
import Recipes from "./Components/Recipes";
import Sidebar from "./Components/sidebar";

const App = () => {
  const [recipeQueue, setRecipeQueue] = useState([]);

  const addRecipeToQueue = (recipe) => {
    const isExist = recipeQueue.find(
      (previousRecipe) => previousRecipe.recipe_id === recipe.recipe_id
    );

    if (!isExist) {
      setRecipeQueue([...recipeQueue, recipe]);
    } else {
      alert("Recipe Already add in the queue");
    }
  };

  return (
    <div className="container mx-auto px-4">
      {/* Header section  */}
      <Header></Header>
      {/* Banner section  */}
      <Banner></Banner>
      {/* Our Recipes section  */}
      <OurRecipes></OurRecipes>
      {/* recipe card section  */}
      <section className="flex flex-col md:flex-row gap-6">
        {/* cards sections  */}
        <Recipes addRecipeToQueue={addRecipeToQueue}></Recipes>
        {/* sidebar */}
        <Sidebar recipeQueue={recipeQueue}></Sidebar>
      </section>
    </div>
  );
};

export default App;

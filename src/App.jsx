import Banner from "./Components/Banner";
import Header from "./Components/Header";
import OurRecipes from "./Components/OurRecipes";
import Recipes from "./Components/Recipes";
import Sidebar from "./Components/sidebar";

const App = () => {
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
        <Recipes></Recipes>
        {/* sidebar */}
        <Sidebar></Sidebar>
      </section>
    </div>
  );
};

export default App;

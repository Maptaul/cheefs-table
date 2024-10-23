import Banner from "./Components/Banner";
import Header from "./Components/Header";
import OurRecipes from "./Components/OurRecipes";

const App = () => {
  return (
    <div className="container mx-auto px-4">
      {/* Header section  */}
      <Header></Header>
      {/* Banner section  */}
      <Banner></Banner>
      {/* Our Recipes section  */}
      <OurRecipes></OurRecipes>
    </div>
  );
};

export default App;

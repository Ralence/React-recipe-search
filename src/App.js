import React, { useEffect, useState } from "react";
import Recipe from "./Recipe";

const App = () => {
  const APP_ID = "20074956";
  const APP_KEY = "782e7199c59344444b82a6392e72f18a";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken");

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    setRecipes(data.hits);
  };

  useEffect(() => {
    getRecipes();
  }, [query]);

  const updateSearch = e => {
    setSearch(e.target.value);
  };

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  return (
    <div className="app">
      <form className="search-form" onSubmit={getSearch}>
        <input
          className="search-bar"
          type="text"
          value={search}
          onChange={updateSearch}
        />
        <button className="search-btn" type="submit">
          Search
        </button>
      </form>
      <div className="recipes">
        {recipes.map(data => (
          <Recipe
            title={data.recipe.label}
            calories={Math.round(data.recipe.calories)}
            img={data.recipe.image}
            key={data.recipe.label + Math.random()}
            ingredients={data.recipe.ingredients}
          />
        ))}
      </div>
    </div>
  );
};

export default App;

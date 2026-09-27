import React from "react";
import "./FilterButtons.css";

const FilterButtons = ({ setSelectedCategory }) => {
  return (
    <div className="filter-buttons">
      <button
        onClick={() => setSelectedCategory('all')}
        className="filter-btn active">All</button>

      <button
        onClick={() => setSelectedCategory('breakfast')}
        className="filter-btn">Breakfast</button>

      <button
        onClick={() => setSelectedCategory('lunch')}
        className="filter-btn">Lunch</button>

      <button
      onClick={() => setSelectedCategory('dinner')}
      className="filter-btn">Dinner</button>

      <button
       onClick={() => setSelectedCategory('dessert')} className="filter-btn">Dessert</button>

      <button
       onClick={() => setSelectedCategory('drinks')} className="filter-btn">Drinks</button>


    </div>
  );
};

export default FilterButtons;
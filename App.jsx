import { useState } from 'react';
import './App.css';
import FilterButtons from './components/FilterButtons';
import FoodList from './components/FoodList';

function App() {
 const [selectedCategory,setSelectedCategory]= useState("all")
  return (
    <div className="App">
      <FilterButtons setSelectedCategory={setSelectedCategory}/>
     <FoodList selectedCategory={selectedCategory} />
    </div>
  );
}

export default App;
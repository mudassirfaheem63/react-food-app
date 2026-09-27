import FoodCard from "./FoodCard";
import foodData from "../data.js";

function FoodList({selectedCategory}) {
  return (
    <div className="food-list">
      {selectedCategory === 'all' && foodData.map((item) => (
        <FoodCard key={item.id} item={item} />
      ))}
       {selectedCategory !== 'all' && foodData.filter(item => item.category === selectedCategory).map((item) => (
        <FoodCard key={item.id} item={item} />
      ))}
    </div>
  );
}

export default FoodList;
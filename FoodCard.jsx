import React from "react";
import "./FoodCard.css";

const FoodCard = ({ item }) => {
  return (
    <div className="food-card">
      {/* Image */}
      <div className="food-card-image">
        <img
          src={item.image}
          alt={item.title}
        />

        {/* Category */}
        <span className="food-category">
          {item.category}
        </span>

        {/* Vegetarian Badge */}
        {item.vegetarian && (
          <span className="food-badge">
            Vegetarian
          </span>
        )}
      </div>

      {/* Content */}
      <div className="food-card-content">

        {/* Title & Price */}
        <div className="food-card-header">
          <h3>{item.title}</h3>

          <span className="food-price">
            ${item.price.toFixed(2)}
          </span>
        </div>

        {/* Description */}
        <p className="food-description">
          {item.description}
        </p>

        {/* Meta */}
        <div className="food-meta">

          {/* Rating */}
          <div className="food-rating">
            <span className="star">★</span>

            <span>
              {item.rating}
            </span>
          </div>

          {/* Vegetarian */}
          <span className="vegetarian-label">
            <span className="dot">●</span>
            {item.vegetarian ? "Vegetarian" : "Non-Vegetarian"}
          </span>
        </div>

        {/* Button */}
        <button className="add-cart-btn">
          Add to Cart
        </button>

      </div>
    </div>
  );
};

export default FoodCard;
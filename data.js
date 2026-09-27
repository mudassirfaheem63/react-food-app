const foodData = [
    // ==================== BREAKFAST ====================
    {
      id: 1,
      category: "breakfast",
      title: "Classic Pancakes",
      description: "Fluffy pancakes served with maple syrup and fresh berries.",
      price: 8.99,
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1528207776546-365bb710ee93?w=500",
      vegetarian: true,
      spicy: false
    },
    {
      id: 2,
      category: "breakfast",
      title: "Avocado Toast",
      description: "Crispy sourdough toast topped with creamy avocado and herbs.",
      price: 7.5,
      rating: 4.6,
      image: "https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?w=500",
      vegetarian: true,
      spicy: false
    },
    {
      id: 3,
      category: "breakfast",
      title: "Egg & Cheese Sandwich",
      description: "Scrambled eggs, cheddar cheese and fresh vegetables in a toasted bun.",
      price: 6.99,
      rating: 4.5,
      image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?w=500",
      vegetarian: true,
      spicy: false
    },
    {
      id: 4,
      category: "breakfast",
      title: "French Toast",
      description: "Golden French toast with powdered sugar, strawberries and syrup.",
      price: 9.25,
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1484723091739-30a097e8f929?w=500",
      vegetarian: true,
      spicy: false
    },
    {
      id: 5,
      category: "breakfast",
      title: "Breakfast Burrito",
      description: "Eggs, beans, cheese and vegetables wrapped in a warm tortilla.",
      price: 10.5,
      rating: 4.6,
      image: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=500",
      vegetarian: true,
      spicy: true
    },
    {
      id: 6,
      category: "breakfast",
      title: "Eggs Benedict",
      description: "Poached eggs and turkey bacon topped with creamy hollandaise sauce.",
      price: 12.99,
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1608039829572-78524f79c4c7?w=500",
      vegetarian: false,
      spicy: false
    },
  
    // ==================== LUNCH ====================
    {
      id: 7,
      category: "lunch",
      title: "Grilled Chicken Sandwich",
      description: "Grilled chicken breast with lettuce, tomato and special sauce.",
      price: 11.99,
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=500",
      vegetarian: false,
      spicy: false
    },
    {
      id: 8,
      category: "lunch",
      title: "Chicken Caesar Salad",
      description: "Crisp lettuce, grilled chicken, parmesan and Caesar dressing.",
      price: 10.99,
      rating: 4.5,
      image: "https://images.unsplash.com/photo-1546793665-c74683f339c1?w=500",
      vegetarian: false,
      spicy: false
    },
    {
      id: 9,
      category: "lunch",
      title: "Margherita Pizza",
      description: "Classic pizza with tomato sauce, mozzarella and fresh basil.",
      price: 13.5,
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=500",
      vegetarian: true,
      spicy: false
    },
    {
      id: 10,
      category: "lunch",
      title: "Beef Burger",
      description: "Juicy beef patty with cheddar cheese, lettuce and house sauce.",
      price: 14.99,
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500",
      vegetarian: false,
      spicy: false
    },
    {
      id: 11,
      category: "lunch",
      title: "Spicy Chicken Wrap",
      description: "Crispy chicken, spicy sauce, lettuce and cheese wrapped in a tortilla.",
      price: 10.75,
      rating: 4.6,
      image: "https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=500",
      vegetarian: false,
      spicy: true
    },
    {
      id: 12,
      category: "lunch",
      title: "Vegetable Pasta",
      description: "Penne pasta tossed with seasonal vegetables and tomato sauce.",
      price: 11.5,
      rating: 4.4,
      image: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=500",
      vegetarian: true,
      spicy: false
    },
  
    // ==================== DINNER ====================
    {
      id: 13,
      category: "dinner",
      title: "Grilled Steak",
      description: "Tender grilled steak served with roasted vegetables and potatoes.",
      price: 24.99,
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1546964124-0cce460f38ef?w=500",
      vegetarian: false,
      spicy: false
    },
    {
      id: 14,
      category: "dinner",
      title: "Chicken Alfredo",
      description: "Creamy Alfredo pasta with grilled chicken and parmesan cheese.",
      price: 17.99,
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?w=500",
      vegetarian: false,
      spicy: false
    },
    {
      id: 15,
      category: "dinner",
      title: "Spicy Thai Curry",
      description: "Aromatic Thai curry with vegetables, coconut milk and herbs.",
      price: 16.5,
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=500",
      vegetarian: true,
      spicy: true
    },
    {
      id: 16,
      category: "dinner",
      title: "Grilled Salmon",
      description: "Fresh grilled salmon served with lemon, vegetables and rice.",
      price: 21.99,
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=500",
      vegetarian: false,
      spicy: false
    },
    {
      id: 17,
      category: "dinner",
      title: "Chicken Tikka",
      description: "Tender chicken pieces marinated with spices and grilled to perfection.",
      price: 18.99,
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=500",
      vegetarian: false,
      spicy: true
    },
    {
      id: 18,
      category: "dinner",
      title: "Mushroom Risotto",
      description: "Creamy Italian risotto cooked with mushrooms and parmesan.",
      price: 15.99,
      rating: 4.6,
      image: "https://images.unsplash.com/photo-1476124369491-e7addf5db371?w=500",
      vegetarian: true,
      spicy: false
    },
  
    // ==================== DESSERT ====================
    {
      id: 19,
      category: "dessert",
      title: "Chocolate Cake",
      description: "Rich chocolate cake covered with smooth chocolate ganache.",
      price: 7.99,
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=500",
      vegetarian: true,
      spicy: false
    },
    {
      id: 20,
      category: "dessert",
      title: "Strawberry Cheesecake",
      description: "Creamy cheesecake topped with fresh strawberries and sauce.",
      price: 8.5,
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=500",
      vegetarian: true,
      spicy: false
    },
    {
      id: 21,
      category: "dessert",
      title: "Ice Cream Sundae",
      description: "Vanilla ice cream with chocolate sauce, nuts and whipped cream.",
      price: 6.99,
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=500",
      vegetarian: true,
      spicy: false
    },
    {
      id: 22,
      category: "dessert",
      title: "Apple Pie",
      description: "Warm apple pie with cinnamon and a crispy golden crust.",
      price: 6.5,
      rating: 4.6,
      image: "https://images.unsplash.com/photo-1535920527002-b35e96722eb9?w=500",
      vegetarian: true,
      spicy: false
    },
    {
      id: 23,
      category: "dessert",
      title: "Chocolate Brownie",
      description: "Soft and fudgy chocolate brownie served warm.",
      price: 5.99,
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1564355808539-22fda35bed7e?w=500",
      vegetarian: true,
      spicy: false
    },
    {
      id: 24,
      category: "dessert",
      title: "Fruit Tart",
      description: "Buttery pastry filled with cream and topped with fresh fruits.",
      price: 7.25,
      rating: 4.5,
      image: "https://images.unsplash.com/photo-1519915028121-7d3463d20b13?w=500",
      vegetarian: true,
      spicy: false
    },
  
    // ==================== DRINKS ====================
    {
      id: 25,
      category: "drinks",
      title: "Fresh Orange Juice",
      description: "Freshly squeezed orange juice served chilled.",
      price: 4.5,
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1613478223719-2ab802602423?w=500",
      vegetarian: true,
      spicy: false
    },
    {
      id: 26,
      category: "drinks",
      title: "Iced Coffee",
      description: "Cold brewed coffee served over ice with creamy milk.",
      price: 5.25,
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=500",
      vegetarian: true,
      spicy: false
    },
    {
      id: 27,
      category: "drinks",
      title: "Strawberry Smoothie",
      description: "Creamy smoothie blended with fresh strawberries and yogurt.",
      price: 6.5,
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1553530666-ba11a7da3888?w=500",
      vegetarian: true,
      spicy: false
    },
    {
      id: 28,
      category: "drinks",
      title: "Mango Shake",
      description: "Rich and creamy mango shake made with fresh mangoes.",
      price: 6.99,
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?w=500",
      vegetarian: true,
      spicy: false
    },
    {
      id: 29,
      category: "drinks",
      title: "Mint Lemonade",
      description: "Refreshing lemonade infused with fresh mint leaves.",
      price: 4.99,
      rating: 4.6,
      image: "https://images.unsplash.com/photo-1621263764928-df1444c5e859?w=500",
      vegetarian: true,
      spicy: false
    },
    {
      id: 30,
      category: "drinks",
      title: "Iced Tea",
      description: "Refreshing black iced tea with lemon and a touch of sweetness.",
      price: 3.99,
      rating: 4.5,
      image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=500",
      vegetarian: true,
      spicy: false
    }
  ];
  
  export default foodData;
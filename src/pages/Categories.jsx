import React, { useState } from 'react';

function Categories() {
  const categoryItems = {
    'Fast Food': [
      { id: 1, name: 'Classic Burger', price: '$8.99', image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&auto=format', rating: 4.5 },
      { id: 2, name: 'Pepperoni Pizza', price: '$12.99', image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?w=500&auto=format', rating: 4.8 },
      { id: 3, name: 'Chicken Wings', price: '$9.99', image: 'https://images.unsplash.com/photo-1567620832903-9fc6debc209f?w=500&auto=format', rating: 4.3 },
      { id: 4, name: 'Hot Dog Supreme', price: '$6.99', image: 'https://images.unsplash.com/photo-1612392166886-ee8475b03af2?w=500&auto=format', rating: 4.2 }
    ],
    'Healthy Food': [
      { id: 1, name: 'Greek Salad', price: '$10.99', image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=500&auto=format', rating: 4.6 },
      { id: 2, name: 'Acai Bowl', price: '$11.99', image: 'https://images.unsplash.com/photo-1590301157890-4810ed352733?w=500&auto=format', rating: 4.7 },
      { id: 3, name: 'Quinoa Buddha Bowl', price: '$13.99', image: 'https://images.unsplash.com/photo-1512621776951-a57141f2e29e?w=500&auto=format', rating: 4.5 },
      { id: 4, name: 'Grilled Salmon', price: '$16.99', image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=500&auto=format', rating: 4.8 }
    ],
    'Desserts': [
      { id: 1, name: 'Chocolate Cake', price: '$7.99', image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=500&auto=format', rating: 4.9 },
      { id: 2, name: 'Strawberry Cheesecake', price: '$8.99', image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=500&auto=format', rating: 4.7 },
      { id: 3, name: 'Ice Cream Sundae', price: '$6.99', image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=500&auto=format', rating: 4.6 },
      { id: 4, name: 'Apple Pie', price: '$5.99', image: 'https://images.unsplash.com/photo-1621743478914-cc8a86d7e9e5?w=500&auto=format', rating: 4.5 }
    ],
    'Beverages': [
      { id: 1, name: 'Iced Coffee', price: '$4.99', image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=500&auto=format', rating: 4.4 },
      { id: 2, name: 'Green Smoothie', price: '$6.99', image: 'https://images.unsplash.com/photo-1638176066666-ffb2f013c7dd?w=500&auto=format', rating: 4.6 },
      { id: 3, name: 'Fresh Orange Juice', price: '$4.99', image: 'https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?w=500&auto=format', rating: 4.7 },
      { id: 4, name: 'Bubble Tea', price: '$5.99', image: 'https://images.unsplash.com/photo-1558857563-b371033873b8?w=500&auto=format', rating: 4.5 }
    ],
    'Asian Cuisine': [
      { id: 1, name: 'Sushi Roll Platter', price: '$18.99', image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=500&auto=format', rating: 4.8 },
      { id: 2, name: 'Ramen Bowl', price: '$13.99', image: 'https://images.unsplash.com/photo-1557872943-16a5ac26437e?w=500&auto=format', rating: 4.7 },
      { id: 3, name: 'Pad Thai', price: '$12.99', image: 'https://images.unsplash.com/photo-1559314809-0d155014e29e?w=500&auto=format', rating: 4.6 },
      { id: 4, name: 'Dim Sum', price: '$15.99', image: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?w=500&auto=format', rating: 4.5 }
    ],
    'Italian': [
      { id: 1, name: 'Margherita Pizza', price: '$14.99', image: 'https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?w=500&auto=format', rating: 4.7 },
      { id: 2, name: 'Fettuccine Alfredo', price: '$13.99', image: 'https://images.unsplash.com/photo-1645112411341-6c4fd023714a?w=500&auto=format', rating: 4.6 },
      { id: 3, name: 'Lasagna', price: '$15.99', image: 'https://images.unsplash.com/photo-1574894709920-11b28e7367e3?w=500&auto=format', rating: 4.8 },
      { id: 4, name: 'Risotto', price: '$16.99', image: 'https://images.unsplash.com/photo-1633964913295-ceb43826a07f?w=500&auto=format', rating: 4.5 }
    ]
  };

  const [selectedCategory, setSelectedCategory] = useState('Fast Food');
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart(prevCart => [...prevCart, { ...item, quantity: 1 }]);
  };

  return (
    <div className="page-content categories-page">
      <h1>Food Categories</h1>
      
      <div className="category-tabs">
        {Object.keys(categoryItems).map((category) => (
          <button
            key={category}
            className={`category-tab ${selectedCategory === category ? 'active' : ''}`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="category-items-grid">
        {categoryItems[selectedCategory].map((item) => (
          <div key={item.id} className="menu-item-card">
            <div className="menu-item-image">
              <img src={item.image} alt={item.name} loading="lazy" />
              <div className="menu-item-rating">
                ⭐ {item.rating}
              </div>
            </div>
            <div className="menu-item-content">
              <h3>{item.name}</h3>
              <div className="menu-item-details">
                <span className="menu-item-price">{item.price}</span>
                <button 
                  className="add-to-cart-btn"
                  onClick={() => addToCart(item)}
                  aria-label={`Add ${item.name} to cart`}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Categories;

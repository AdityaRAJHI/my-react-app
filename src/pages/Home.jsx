import React from 'react';

function Home({ addToCart }) {
  const featuredDishes = [
    {
      id: 1,
      name: 'Pizza Margherita',
      description: 'Classic Italian pizza with tomatoes and mozzarella',
      price: '$12.99',
      image: 'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=500&auto=format',
      category: 'Italian'
    },
    {
      id: 2,
      name: 'Classic Burger',
      description: 'Juicy beef patty with fresh vegetables',
      price: '$8.99',
      image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&auto=format',
      category: 'Fast Food'
    },
    {
      id: 3,
      name: 'Ramen Bowl',
      description: 'Japanese noodle soup with pork',
      price: '$11.99',
      image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=500&auto=format',
      category: 'Japanese'
    },
    {
      id: 4,
      name: 'Fresh Salad',
      description: 'Mixed greens with seasonal vegetables',
      price: '$7.99',
      image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=500&auto=format',
      category: 'Healthy'
    }
  ];

  const quickActions = [
    {
      id: 1,
      name: 'Order Now',
      icon: '🛵',
      image: 'https://images.unsplash.com/photo-1526367790999-0150786686a2?w=500&auto=format',
      description: 'Quick and easy ordering'
    },
    {
      id: 2,
      name: "Today's Special",
      icon: '⭐',
      image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=500&auto=format',
      description: 'Discover daily specials'
    },
    {
      id: 3,
      name: 'Special Offers',
      icon: '🏷️',
      image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=500&auto=format',
      description: 'Exclusive deals for you'
    },
    {
      id: 4,
      name: 'Book a Table',
      icon: '🪑',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=500&auto=format',
      description: 'Reserve your spot'
    }
  ];

  return (
    <div className="home-page">
      <div className="welcome-section">
        <h1 className="page-title">Welcome to Zep2food</h1>
        <p className="welcome-text">Discover delicious food from our wide selection of dishes</p>
      </div>

      <div className="featured-section">
        <h2>Featured Dishes</h2>
        <div className="food-grid">
          {featuredDishes.map((dish) => (
            <div key={dish.id} className="food-item">
              <div className="food-image-container">
                <img src={dish.image} alt={dish.name} className="food-image" />
                <span className="category-tag">{dish.category}</span>
              </div>
              <div className="food-content">
                <h3>{dish.name}</h3>
                <p>{dish.description}</p>
                <div className="food-item-footer">
                  <span className="price">{dish.price}</span>
                  <button 
                    className="add-to-cart-btn"
                    onClick={() => addToCart(dish)}
                    aria-label={`Add ${dish.name} to cart`}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="quick-actions-section">
        <h2>Quick Actions</h2>
        <div className="actions-grid">
          {quickActions.map((action) => (
            <div key={action.id} className="action-card">
              <div className="action-image-container">
                <img src={action.image} alt={action.name} className="action-image" />
                <span className="action-icon">{action.icon}</span>
              </div>
              <div className="action-content">
                <h3>{action.name}</h3>
                <p>{action.description}</p>
                <button className="action-btn">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;

import React from 'react';

function Orders() {
  const orders = [
    {
      id: 1234,
      status: 'In Progress',
      items: [
        {
          name: 'Margherita Pizza',
          quantity: 1,
          price: 12.99,
          image: 'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=500&auto=format'
        },
        {
          name: 'Coca Cola',
          quantity: 2,
          price: 4.00,
          image: 'https://images.unsplash.com/photo-1600891964599-f61ba0e24092?w=500&auto=format'
        }
      ],
      total: 16.99
    },
    {
      id: 1233,
      status: 'Delivered',
      items: [
        {
          name: 'Chicken Burger',
          quantity: 1,
          price: 8.99,
          image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&auto=format'
        },
        {
          name: 'French Fries',
          quantity: 1,
          price: 3.99,
          image: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=500&auto=format'
        }
      ],
      total: 12.98
    }
  ];

  return (
    <div className="orders-page">
      <h1 className="page-title">Your Orders</h1>
      <div className="orders-container">
        {orders.map(order => (
          <div key={order.id} className="order-card">
            <div className="order-header">
              <h3>Order #{order.id}</h3>
              <span className={`order-status ${order.status === 'Delivered' ? 'completed' : ''}`}>{order.status}</span>
            </div>
            <div className="order-items">
              {order.items.map(item => (
                <div key={item.name} className="order-item">
                  <img src={item.image} alt={item.name} className="order-item-image-small" />
                  <div className="order-item-details">
                    <span>{item.quantity}x {item.name}</span>
                    <span>${item.price.toFixed(2)}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="order-footer">
              <span className="order-total">Total: ${order.total.toFixed(2)}</span>
              <button className={order.status === 'Delivered' ? 'reorder-btn' : 'track-order-btn'}>
                {order.status === 'Delivered' ? 'Reorder' : 'Track Order'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Orders;

import React from 'react';
import '../styles/ItemCard.css';

const ItemCard = ({ item }) => (
  <div className="item-card">
    <h3>{item.name}</h3>
    {item.image && <img src={item.image} alt={item.name} />}
  </div>
);

export default ItemCard;

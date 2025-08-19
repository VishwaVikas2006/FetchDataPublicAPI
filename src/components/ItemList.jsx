import React from 'react';
import ItemCard from './ItemCard';
import '../styles/ItemList.css';

const ItemList = ({ items }) => (
  <div className="item-list">
    {items.map((item) => (
      <ItemCard key={item.name} item={item} />
    ))}
  </div>
);

export default ItemList;

// src/components/StockInventory.js
import React, { useState } from 'react';

const StockInventory = () => {
  const [items, setItems] = useState([]);
  const [itemName, setItemName] = useState('');
  const [quantity, setQuantity] = useState('');

  const addItem = () => {
    if (itemName && quantity) {
      const newItem = {
        id: new Date().getTime(),
        name: itemName,
        quantity: parseInt(quantity, 10),
      };

      setItems([...items, newItem]);
      setItemName('');
      setQuantity('');
    }
  };

  return (
    <div>
      <h1>Stock Inventory</h1>
      <div>
        <label>
          Item Name:
          <input
            type="text"
            value={itemName}
            onChange={(e) => setItemName(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Quantity:
          <input
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
        </label>
      </div>
      <button onClick={addItem}>Add Item</button>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.name} - Quantity: {item.quantity}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StockInventory;
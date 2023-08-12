import React, { useState } from 'react';

const Keys = () => {
  const Products = [
    { id: 1, name: 'Dell', Qty: 1 },
    { id: 2, name: 'Lenovo', Qty: 1 }
  ];

  const [items, setItems] = useState(Products);

  const changeQty = (id) => {
    const newItems = items.map((item) => {
      return item.id === id ? { ...item, Qty: item.Qty + 1 } : item;
    });
    setItems(newItems);
  };

  return (
    <div>
      {items.map((product) => (
        <div key={product.id}>
          <h1>Laptop</h1>
          <h3>Brand: {product.name}</h3>
          <h4>Qty: {product.Qty}</h4>
          <button onClick={() => changeQty(product.id)}>+</button>
        </div>
      ))}
    </div>
  );
};

export default Keys;

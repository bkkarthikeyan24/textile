"use client";

import { useState } from "react";
import { sizes } from "@/data/products";
import { addCartItem } from "@/lib/cart";

export default function CategoryProducts({ products, categoryLabel }) {
  const [selectedSizes, setSelectedSizes] = useState(() =>
    products.reduce((acc, product) => {
      acc[product.id] = "M";
      return acc;
    }, {})
  );

  const handleSizeChange = (productId, size) => {
    setSelectedSizes((current) => ({
      ...current,
      [productId]: size
    }));
  };

  const handleAddToCart = (product) => {
    addCartItem(product, categoryLabel, selectedSizes[product.id]);
    window.alert(`${product.name} added to cart`);
  };

  return (
    <div className="product-grid">
      {products.map((product) => (
        <article key={product.id} className="product-card">
          <img
            src={product.image}
            alt={product.name}
            className="product-image"
          />

          <div className="product-body">
            <span className="collection-tag">{categoryLabel} Style</span>
            <h2>{product.name}</h2>
            <p className="price">Rs. {product.price}</p>

            <div className="size-row">
              <label htmlFor={product.id}>Size</label>
              <select
                id={product.id}
                className="size-select"
                value={selectedSizes[product.id]}
                onChange={(event) => handleSizeChange(product.id, event.target.value)}
              >
                {sizes.map((size) => (
                  <option key={size} value={size}>
                    {size}
                  </option>
                ))}
              </select>
            </div>

            <button type="button" className="full-button" onClick={() => handleAddToCart(product)}>
              Add to Cart
            </button>
          </div>
        </article>
      ))}
    </div>
  );
}

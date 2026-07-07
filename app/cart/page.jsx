"use client";

import { useEffect, useMemo, useState } from "react";
import Navbar from "@/components/Navbar";
import { getCartItems, saveCartItems } from "@/lib/cart";
import { addOrderToCurrentUser, getCurrentUser } from "@/lib/user";

const paymentOptions = ["UPI", "Credit Card", "Debit Card", "Cash on Delivery"];

export default function CartPage() {
  const [cartItems, setCartItems] = useState([]);
  const [paymentMethod, setPaymentMethod] = useState("UPI");
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    setCartItems(getCartItems());
  }, []);

  const totalAmount = useMemo(
    () => cartItems.reduce((total, item) => total + item.price * (item.quantity || 1), 0),
    [cartItems]
  );

  const totalItems = useMemo(
    () => cartItems.reduce((count, item) => count + (item.quantity || 1), 0),
    [cartItems]
  );

  const updateCart = (updatedItems) => {
    setCartItems(updatedItems);
    saveCartItems(updatedItems);
  };

  const handleQuantityChange = (itemIndex, action) => {
    const updatedItems = cartItems.map((item, index) => {
      if (index !== itemIndex) {
        return item;
      }

      const nextQuantity =
        action === "increase" ? (item.quantity || 1) + 1 : Math.max(1, (item.quantity || 1) - 1);

      return {
        ...item,
        quantity: nextQuantity
      };
    });

    updateCart(updatedItems);
  };

  const handleRemove = (itemIndex) => {
    const updatedItems = cartItems.filter((_, index) => index !== itemIndex);
    updateCart(updatedItems);
  };

  const handleClearCart = () => {
    updateCart([]);
    setSuccessMessage("");
  };

  const handlePayment = () => {
    if (!cartItems.length) {
      window.alert("Your cart is empty");
      return;
    }

    if (!getCurrentUser()) {
      window.alert("Please login before payment");
      return;
    }

    addOrderToCurrentUser({
      id: `order-${Date.now()}`,
      items: cartItems,
      paymentMethod,
      paymentStatus: "Paid",
      totalAmount,
      orderedAt: new Date().toLocaleString()
    });

    const message = `Payment successful with ${paymentMethod}`;
    window.alert(message);
    setSuccessMessage(message);
    updateCart([]);
  };

  return (
    <main className="page-shell">
      <Navbar active="cart" />

      <section className="section-stack">
        <div className="collection-intro">
          <span className="eyebrow">Your Cart</span>
          <h1>Shopping Cart</h1>
        </div>

        {successMessage ? <div className="success-banner">{successMessage}</div> : null}

        <div className="cart-layout">
          <div className="cart-panel">
            {cartItems.length ? (
              cartItems.map((item, index) => (
                <article key={`${item.id}-${item.size}-${index}`} className="cart-item">
                  <img src={item.image} alt={item.name} className="cart-image" />

                  <div className="cart-item-content">
                    <div>
                      <span className="collection-tag">{item.category}</span>
                      <h2>{item.name}</h2>
                      <p className="cart-meta">
                        Size: {item.size} | Price: Rs. {item.price}
                      </p>
                    </div>

                    <div className="cart-actions-row">
                      <div className="quantity-box">
                        <button type="button" onClick={() => handleQuantityChange(index, "decrease")}>
                          -
                        </button>
                        <span>{item.quantity || 1}</span>
                        <button type="button" onClick={() => handleQuantityChange(index, "increase")}>
                          +
                        </button>
                      </div>

                      <button type="button" className="secondary-button" onClick={() => handleRemove(index)}>
                        Remove
                      </button>
                    </div>
                  </div>
                </article>
              ))
            ) : (
              <div className="empty-cart">Your cart is empty.</div>
            )}
          </div>

          <aside className="summary-card">
            <h2>Order Summary</h2>
            <p className="summary-line">
              Items: <strong>{totalItems}</strong>
            </p>
            <p className="summary-line">
              Total: <strong>Rs. {totalAmount}</strong>
            </p>

            <div className="size-row">
              <label htmlFor="paymentMethod">Payment Method</label>
              <select
                id="paymentMethod"
                className="size-select"
                value={paymentMethod}
                onChange={(event) => setPaymentMethod(event.target.value)}
              >
                {paymentOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>

            <button type="button" className="full-button" onClick={handlePayment}>
              Pay Now
            </button>

            <button type="button" className="secondary-button summary-clear" onClick={handleClearCart}>
              Clear Cart
            </button>
          </aside>
        </div>
      </section>
    </main>
  );
}

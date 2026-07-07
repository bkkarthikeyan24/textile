"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import { cancelOrderForCurrentUser, getCurrentUser } from "@/lib/user";

export default function OrdersPage() {
  const router = useRouter();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const currentUser = getCurrentUser();

    if (!currentUser) {
      router.push("/login");
      return;
    }

    setUser(currentUser);
  }, [router]);

  const handleCancelOrder = (orderId) => {
    const updatedUser = cancelOrderForCurrentUser(orderId);

    if (updatedUser) {
      setUser(updatedUser);
      window.alert("Order cancelled successfully");
    }
  };

  if (!user) {
    return null;
  }

  return (
    <main className="page-shell">
      <Navbar active="orders" />

      <section className="section-stack">
        <div className="collection-intro">
          <span className="eyebrow">Orders</span>
          <h1>Order Details</h1>
          <p>Paid details, payment method, ordered time, and dresses details inga varum.</p>
        </div>

        <div className="orders-list">
          {user.orders?.length ? (
            user.orders.map((order) => (
              <article key={order.id} className="order-card">
                <div className="order-head">
                  <h2>{order.orderedAt}</h2>
                  <span className="collection-tag">{order.paymentMethod}</span>
                </div>

                <p className="summary-line">
                  Payment Status: <strong>{order.paymentStatus || "Paid"}</strong>
                </p>
                <p className="summary-line">
                  Total Paid: <strong>Rs. {order.totalAmount}</strong>
                </p>

                <div className="order-items">
                  {order.items.map((item, index) => (
                    <div key={`${item.id}-${index}`} className="order-item">
                      <img src={item.image} alt={item.name} className="order-image" />
                      <div>
                        <h3>{item.name}</h3>
                        <p className="cart-meta">
                          Size: {item.size} | Qty: {item.quantity || 1} | Rs. {item.price}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <button
                  type="button"
                  className="secondary-button cancel-order-button"
                  onClick={() => handleCancelOrder(order.id)}
                >
                  Cancel Order
                </button>
              </article>
            ))
          ) : (
            <div className="empty-cart">No orders yet.</div>
          )}
        </div>
      </section>
    </main>
  );
}

"use client";

import { useEffect, useState } from "react";

export default function DatabasePreview() {
  const [database, setDatabase] = useState({
    products: [],
    users: [],
    orders: []
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadDatabase() {
      try {
        const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001";
        const [productsResponse, usersResponse, ordersResponse] = await Promise.all([
          fetch(`${apiUrl}/products`),
          fetch(`${apiUrl}/users`),
          fetch(`${apiUrl}/orders`)
        ]);

        if (!productsResponse.ok || !usersResponse.ok || !ordersResponse.ok) {
          throw new Error("Database server not running");
        }

        const [products, users, orders] = await Promise.all([
          productsResponse.json(),
          usersResponse.json(),
          ordersResponse.json()
        ]);

        setDatabase({
          products,
          users,
          orders
        });
      } catch (loadError) {
        setError("Run json-server to view database data on the website.");
      } finally {
        setLoading(false);
      }
    }

    loadDatabase();
  }, []);

  return (
    <section className="db-section">
      <div className="collection-intro">
        <span className="eyebrow">Database Preview</span>
        <h1>JSON Server Data</h1>
        <p>db.json data website-la inga show ஆகும்.</p>
      </div>

      {loading ? <div className="empty-cart">Loading database...</div> : null}
      {error ? <div className="empty-cart">{error}</div> : null}

      {!loading && !error ? (
        <div className="db-grid">
          <div className="stat-box">
            <strong>{database.products.length}</strong>
            Products in db.json
          </div>
          <div className="stat-box">
            <strong>{database.users.length}</strong>
            Users in db.json
          </div>
          <div className="stat-box">
            <strong>{database.orders.length}</strong>
            Orders in db.json
          </div>
        </div>
      ) : null}
    </section>
  );
}

import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";

export default function HomePage() {
  return (
    <main className="page-shell">
      <Navbar active="home" />

      <section className="hero">
        <div className="hero-card hero-image-wrap">
          <Image
            src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1200&q=80"
            alt="Fashionable dress model"
            width={1200}
            height={1400}
            className="hero-image"
            priority
          />
        </div>

        <div className="hero-card hero-content">
          <span className="eyebrow">New Season Style</span>
          <h1>Online Textile Shopping</h1>
          <p>
            Dress your day with elegant fabrics, trend-forward collections, and timeless
            fashion made for real life. Simple shopping, classy feel, and beautiful looks in
            one place.
          </p>

          <div className="hero-actions">
            <Link href="/collection" className="nav-button">
              Start Shopping
            </Link>
          </div>

          <div className="stats">
            <div className="stat-box">
              <strong>250+</strong>
              Fresh textile collections
            </div>
            <div className="stat-box" id="cart">
              <strong>40%</strong>
              Festival offers this week
            </div>
            <div className="stat-box">
              <strong>24/7</strong>
              Smooth customer support
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}

import Link from "next/link";
import Navbar from "@/components/Navbar";

const collections = [
  {
    title: "Men",
    tag: "Modern Menswear",
    description:
      "Sharp shirts, premium cotton outfits, and effortless everyday styles for confident looks.",
    image:
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1200&q=80",
    alt: "Men's fashion collection"
  },
  {
    title: "Women",
    tag: "Elegant Womenswear",
    description:
      "Graceful fabrics, festive favorites, and trend-led silhouettes designed for modern style.",
    image:
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=1200&q=80",
    alt: "Women's fashion collection"
  },
  {
    title: "Kids",
    tag: "Playful Kidswear",
    description:
      "Soft materials, bright colors, and comfortable outfits perfect for active little stars.",
    image:
      "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?auto=format&fit=crop&w=1200&q=80",
    alt: "Kids fashion collection"
  }
];

export default function CollectionPage() {
  return (
    <main className="page-shell">
      <Navbar active="collection" />

      <section className="section-stack">
        <div className="collection-intro">
          <span className="eyebrow">Signature Collection</span>
          <h1>Explore Our Textile Collections</h1>
          <p>Men, Women, and Kids-ku separate fashion collections ready.</p>
        </div>

        <div className="collection-grid">
          {collections.map((item) => (
            <Link
              key={item.title}
              href={`/collection/${item.title.toLowerCase()}`}
              className="collection-card collection-link"
            >
              <img
                src={item.image}
                alt={item.alt}
                className="collection-image"
              />
              <div className="collection-card-body">
                <span className="collection-tag">{item.tag}</span>
                <h2>{item.title}</h2>
                <p>{item.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}

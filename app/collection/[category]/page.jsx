import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import CategoryProducts from "@/components/CategoryProducts";
import { categoryProducts } from "@/data/products";

export function generateStaticParams() {
  return Object.keys(categoryProducts).map((category) => ({ category }));
}

export default async function CategoryPage({ params }) {
  const { category } = await params;
  const data = categoryProducts[category];

  if (!data) {
    notFound();
  }

  return (
    <main className="page-shell">
      <Navbar active="collection" />

      <section className="section-stack">
        <div className="collection-intro">
          <span className="eyebrow">{data.label} Collection</span>
          <h1>{data.title}</h1>
          <p>{data.subtitle}</p>
          <Link href="/collection" className="secondary-button">
            Back to Collection
          </Link>
        </div>

        <CategoryProducts products={data.products} categoryLabel={data.label} />
      </section>
    </main>
  );
}

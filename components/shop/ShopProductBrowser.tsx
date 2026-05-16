"use client";

import { useMemo, useState } from "react";
import { ProductCard } from "@/components/ui/ProductCard";
import type { Category, Product } from "@/lib/catalog/types";

type SortOption = "featured" | "name-asc" | "price-asc" | "price-desc";
type CategoryFilter = "all" | Category["id"];

type ShopProductBrowserProps = {
  categories: Category[];
  products: Product[];
};

const sortLabels: Record<SortOption, string> = {
  featured: "Featured",
  "name-asc": "Name: A to Z",
  "price-asc": "Price: Low to High",
  "price-desc": "Price: High to Low",
};

export function ShopProductBrowser({
  categories,
  products,
}: ShopProductBrowserProps) {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOption, setSortOption] = useState<SortOption>("featured");

  const filteredProducts = useMemo(() => {
    const normalizedSearch = searchQuery.trim().toLowerCase();
    const nextProducts = products.filter((product) => {
      const matchesCategory =
        activeCategory === "all" ? true : product.category === activeCategory;
      const matchesSearch =
        normalizedSearch.length === 0 ||
        [
          product.name,
          product.shortDescription,
          product.longDescription,
          ...product.tags,
        ]
          .join(" ")
          .toLowerCase()
          .includes(normalizedSearch);

      return matchesCategory && matchesSearch;
    });

    return [...nextProducts].sort((a, b) => {
      if (sortOption === "price-asc") {
        return a.price - b.price;
      }

      if (sortOption === "price-desc") {
        return b.price - a.price;
      }

      if (sortOption === "name-asc") {
        return a.name.localeCompare(b.name);
      }

      return Number(Boolean(b.isFeatured)) - Number(Boolean(a.isFeatured));
    });
  }, [activeCategory, products, searchQuery, sortOption]);

  return (
    <section className="shop-browser" aria-label="Shop products">
      <div className="shop-browser__toolbar">
        <label className="shop-browser__filter">
          <span>Category</span>
          <select
            onChange={(event) =>
              setActiveCategory(event.target.value as CategoryFilter)
            }
            value={activeCategory}
          >
            <option value="all">All categories</option>
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </label>

        <div className="shop-browser__controls">
          <label className="shop-browser__search">
            <span>Search</span>
            <input
              onChange={(event) => setSearchQuery(event.target.value)}
              placeholder="Beds, leashes, cleaning..."
              type="search"
              value={searchQuery}
            />
          </label>

          <label className="shop-browser__sort">
            <span>Sort</span>
            <select
              onChange={(event) =>
                setSortOption(event.target.value as SortOption)
              }
              value={sortOption}
            >
              {Object.entries(sortLabels).map(([value, label]) => (
                <option key={value} value={value}>
                  {label}
                </option>
              ))}
            </select>
          </label>
        </div>
      </div>

      <p className="shop-browser__count">
        Showing {filteredProducts.length} of {products.length} PawNest products
      </p>

      {filteredProducts.length > 0 ? (
        <div className="card-grid card-grid--4">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="shop-browser__empty">
          <h2>No products found</h2>
          <p>
            Try a different search or category to browse more cozy, practical
            PawNest essentials.
          </p>
        </div>
      )}
    </section>
  );
}

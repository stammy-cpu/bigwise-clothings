import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { useState, useEffect } from "react";
import { getProducts } from "@/lib/products";

export default function Collections() {
  const [products, setProducts] = useState(getProducts());
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    setProducts(getProducts());
  }, []);

  const filteredProducts = selectedCategory === "All" 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  const categories = ["All", "Men", "Women", "Unisex", "Accessories"];

  return (
    <div className="min-h-screen flex flex-col bg-[#1a1025] text-white font-sans">
      <Navbar />
      <main className="flex-grow pt-24 md:pt-32 pb-12 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12 md:mb-16">
            <h1 className="text-3xl md:text-5xl font-heading font-bold mb-4">All Collections</h1>
            <div className="flex flex-wrap justify-center gap-4 md:gap-6 text-xs md:text-sm uppercase tracking-widest font-medium text-gray-400">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`hover:text-white cursor-pointer transition-colors ${
                    selectedCategory === cat ? "text-white border-b border-purple-500" : ""
                  }`}
                  data-testid={`filter-${cat}`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {filteredProducts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-400 text-lg">No products found in this category.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {filteredProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group cursor-pointer"
                  data-testid={`product-item-${product.id}`}
                >
                  <Link href={`/product/${product.id}`}>
                    <a className="block">
                      <div className="relative aspect-[3/4] overflow-hidden bg-white/5 mb-4 rounded-lg border border-white/10 group-hover:border-purple-500/50 transition-all">
                        {product.image ? (
                          <img 
                            src={product.image} 
                            alt={product.name}
                            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center bg-black/20">
                            <span className="text-gray-500">No Image</span>
                          </div>
                        )}
                        {/* Quick Add Overlay */}
                        <div className="absolute bottom-0 left-0 w-full bg-white/90 backdrop-blur-sm p-3 md:p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 flex justify-between items-center text-black">
                          <span className="text-xs uppercase font-bold">Add to Cart</span>
                          <span className="text-xs font-bold">{product.price}</span>
                        </div>
                      </div>
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1">
                        <div>
                          <h3 className="text-base md:text-lg font-heading font-bold group-hover:text-purple-300 transition-colors line-clamp-2">{product.name}</h3>
                          <p className="text-xs md:text-sm text-gray-400">{product.category}</p>
                        </div>
                        <span className="text-sm md:text-base font-bold text-purple-300 flex-shrink-0">{product.price}</span>
                      </div>
                    </a>
                  </Link>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import menImage from "@assets/generated_images/male_fashion_model_urban_style.png";
import womenImage from "@assets/generated_images/female_fashion_model_elegance.png";
import accessoriesImage from "@assets/generated_images/fashion_accessories_still_life.png";

// Mock Data
const products = [
  { id: 1, name: "Oversized Blazer", price: "$120.00", category: "Men", image: menImage },
  { id: 2, name: "Silk Evening Dress", price: "$250.00", category: "Women", image: womenImage },
  { id: 3, name: "Leather Tote", price: "$180.00", category: "Accessories", image: accessoriesImage },
  { id: 4, name: "Classic White Tee", price: "$45.00", category: "Men", image: menImage }, // reusing images for prototype
  { id: 5, name: "Pleated Trousers", price: "$110.00", category: "Women", image: womenImage },
  { id: 6, name: "Aviator Sunglasses", price: "$85.00", category: "Accessories", image: accessoriesImage },
];

export default function Collections() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-grow pt-24 pb-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">All Collections</h1>
            <div className="flex justify-center gap-6 text-sm uppercase tracking-widest font-medium text-muted-foreground">
              <span className="text-black cursor-pointer border-b border-black">All</span>
              <span className="hover:text-black cursor-pointer transition-colors">Men</span>
              <span className="hover:text-black cursor-pointer transition-colors">Women</span>
              <span className="hover:text-black cursor-pointer transition-colors">Accessories</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="relative aspect-[3/4] overflow-hidden bg-gray-100 mb-4">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  {/* Quick Add Overlay */}
                  <div className="absolute bottom-0 left-0 w-full bg-white/90 backdrop-blur-sm p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 flex justify-between items-center">
                    <span className="text-xs uppercase font-bold">Add to Cart</span>
                    <span className="text-xs">{product.price}</span>
                  </div>
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-serif font-bold group-hover:text-primary/70 transition-colors">{product.name}</h3>
                    <p className="text-sm text-muted-foreground">{product.category}</p>
                  </div>
                  <span className="text-sm font-medium">{product.price}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

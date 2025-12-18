import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Link } from "wouter";
import bomberImg from "@assets/generated_images/premium_bomber_jacket_standalone.png";
import dressImg from "@assets/generated_images/elegant_velvet_dress_standalone.png";
import hoodieImg from "@assets/generated_images/street_hoodie_clothing_item.png";
import teeImg from "@assets/generated_images/classic_tee_shirt_product.png";
import pantsImg from "@assets/generated_images/casual_pants_product_shot.png";
import denimImg from "@assets/generated_images/denim_jacket_product_photo.png";

// Mock Data with proper clothing images
const products = [
  { id: 1, name: "Urban Bomber Jacket", price: "$120.00", category: "Men", image: bomberImg },
  { id: 2, name: "Velvet Evening Dress", price: "$250.00", category: "Women", image: dressImg },
  { id: 3, name: "Premium Street Hoodie", price: "$85.00", category: "Unisex", image: hoodieImg },
  { id: 4, name: "Classic White Tee", price: "$45.00", category: "Men", image: teeImg },
  { id: 5, name: "Casual Pants", price: "$110.00", category: "Women", image: pantsImg },
  { id: 6, name: "Denim Jacket", price: "$95.00", category: "Unisex", image: denimImg },
];

export default function Collections() {
  return (
    <div className="min-h-screen flex flex-col bg-[#1a1025] text-white font-sans">
      <Navbar />
      <main className="flex-grow pt-32 pb-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">All Collections</h1>
            <div className="flex justify-center gap-6 text-sm uppercase tracking-widest font-medium text-gray-400">
              <span className="text-white cursor-pointer border-b border-purple-500">All</span>
              <span className="hover:text-white cursor-pointer transition-colors">Men</span>
              <span className="hover:text-white cursor-pointer transition-colors">Women</span>
              <span className="hover:text-white cursor-pointer transition-colors">Unisex</span>
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
                <Link href={`/product/${product.id}`}>
                  <a className="block">
                    <div className="relative aspect-[3/4] overflow-hidden bg-white/5 mb-4 rounded-lg border border-white/10 group-hover:border-purple-500/50 transition-all">
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="w-full h-full object-contain p-4 transition-transform duration-700 ease-out group-hover:scale-110"
                      />
                      {/* Quick Add Overlay */}
                      <div className="absolute bottom-0 left-0 w-full bg-white/90 backdrop-blur-sm p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 flex justify-between items-center">
                        <span className="text-xs uppercase font-bold text-black">Add to Cart</span>
                        <span className="text-xs text-black font-bold">{product.price}</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-lg font-heading font-bold group-hover:text-purple-300 transition-colors">{product.name}</h3>
                        <p className="text-sm text-gray-400">{product.category}</p>
                      </div>
                      <span className="text-sm font-bold text-purple-300">{product.price}</span>
                    </div>
                  </a>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

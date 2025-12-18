import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import bomberImg from "@assets/generated_images/premium_bomber_jacket_standalone.png";
import dressImg from "@assets/generated_images/elegant_velvet_dress_standalone.png";
import hoodieImg from "@assets/generated_images/street_hoodie_clothing_item.png";
import { Button } from "@/components/ui/button";

const collections = [
  {
    id: 1,
    title: "Jackets & Outerwear",
    image: bomberImg,
    link: "/collections",
    description: "Premium urban layers crafted for style and comfort."
  },
  {
    id: 2,
    title: "Dresses & Formal",
    image: dressImg,
    link: "/collections",
    description: "Elegant pieces for every occasion."
  },
  {
    id: 3,
    title: "Streetwear Essentials",
    image: hoodieImg,
    link: "/collections",
    description: "Contemporary pieces that define your vibe."
  }
];

export function FeaturedCollections() {
  return (
    <section className="py-24 bg-gradient-to-b from-[#1a1025] to-[#251b35]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Curated Collections</h2>
            <p className="text-purple-200 max-w-md">Discover our latest arrivals, designed to elevate your everyday wardrobe with premium materials and timeless cuts.</p>
          </div>
          <Link href="/collections" className="hidden md:flex items-center gap-2 text-sm uppercase tracking-widest font-bold hover:text-purple-300 transition-colors group">
              View All <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {collections.map((collection, index) => (
            <motion.div
              key={collection.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[3/4] overflow-hidden bg-white/5 mb-6 rounded-xl border border-white/10 group-hover:border-purple-500/50 transition-all">
                <img 
                  src={collection.image} 
                  alt={collection.title}
                  className="w-full h-full object-contain p-6 transition-transform duration-700 ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
              </div>
              <h3 className="text-xl font-heading font-bold mb-2">{collection.title}</h3>
              <p className="text-sm text-purple-200 mb-4">{collection.description}</p>
              <Link href={collection.link} className="inline-block text-sm uppercase tracking-widest font-bold border-b border-white pb-1 hover:text-purple-300 hover:border-purple-300 transition-all">
                  Shop Now
              </Link>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 text-center md:hidden">
          <Link href="/collections">
            <Button variant="outline" className="w-full bg-white text-black hover:bg-gray-100">View All Collections</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

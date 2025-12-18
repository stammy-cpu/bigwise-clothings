import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import menImage from "@assets/generated_images/male_fashion_model_urban_style.png";
import womenImage from "@assets/generated_images/female_fashion_model_elegance.png";
import accessoriesImage from "@assets/generated_images/fashion_accessories_still_life.png";
import { Button } from "@/components/ui/button";

const collections = [
  {
    id: 1,
    title: "Men's Edit",
    image: menImage,
    link: "/collections?category=men",
    description: "Modern tailoring meets urban comfort."
  },
  {
    id: 2,
    title: "Women's Edit",
    image: womenImage,
    link: "/collections?category=women",
    description: "Elegant silhouettes for the contemporary woman."
  },
  {
    id: 3,
    title: "Accessories",
    image: accessoriesImage,
    link: "/collections?category=accessories",
    description: "The finishing touches that define your look."
  }
];

export function FeaturedCollections() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Curated Collections</h2>
            <p className="text-muted-foreground max-w-md">Discover our latest arrivals, designed to elevate your everyday wardrobe with premium materials and timeless cuts.</p>
          </div>
          <Link href="/collections" className="hidden md:flex items-center gap-2 text-sm uppercase tracking-widest font-bold hover:text-primary/60 transition-colors group">
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
              <div className="relative aspect-[3/4] overflow-hidden bg-gray-100 mb-6">
                <img 
                  src={collection.image} 
                  alt={collection.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
              </div>
              <h3 className="text-xl font-serif font-bold mb-2">{collection.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">{collection.description}</p>
              <Link href={collection.link} className="inline-block text-sm uppercase tracking-widest font-bold border-b border-black pb-1 hover:text-primary/60 hover:border-primary/60 transition-all">
                  Shop Now
              </Link>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 text-center md:hidden">
          <Link href="/collections">
            <Button variant="outline" className="w-full">View All Collections</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

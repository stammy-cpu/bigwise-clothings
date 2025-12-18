import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import heroImage from "@assets/generated_images/fashion_brand_hero_banner_with_diverse_models.png";

export function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Bigwise Fashion Hero" 
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full container mx-auto px-4 flex flex-col justify-center items-start">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-2xl text-white"
        >
          <h2 className="text-sm md:text-base font-bold tracking-[0.3em] uppercase mb-4 text-white/90">
            Est. 2025
          </h2>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold leading-tight mb-8">
            Define Your <br/>
            <span className="italic font-light">Presence</span>
          </h1>
          <p className="text-lg md:text-xl text-white/80 mb-10 max-w-md leading-relaxed">
            Minimalist essentials for the modern wardrobe. Designed for those who speak without saying a word.
          </p>
          
          <div className="flex gap-4">
            <Link href="/collections">
              <Button 
                size="lg" 
                className="bg-white text-black hover:bg-white/90 rounded-none h-14 px-8 text-sm uppercase tracking-widest font-bold transition-all hover:px-10"
              >
                Shop Collection
              </Button>
            </Link>
            <Link href="/about">
              <Button 
                variant="outline" 
                size="lg" 
                className="border-white text-white hover:bg-white hover:text-black rounded-none h-14 px-8 text-sm uppercase tracking-widest font-bold bg-transparent"
              >
                Our Story
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-widest">Scroll</span>
        <div className="w-[1px] h-12 bg-white/50" />
      </motion.div>
    </section>
  );
}

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Star, Heart, Share2, MessageCircle, Phone, Truck, ShieldCheck, ArrowLeft } from "lucide-react";
import { Link, useRoute } from "wouter";
import menImage from "@assets/generated_images/male_fashion_model_urban_style.png"; // Placeholder
import { cn } from "@/lib/utils";

export default function ProductDetail() {
  const [selectedSize, setSelectedSize] = useState("M");
  const [isWishlisted, setIsWishlisted] = useState(false);
  
  // Mock product data
  const product = {
    name: "Bigwise Urban Bomber Jacket",
    price: "$120.00",
    description: "Designed for the streets of Lagos and beyond. This premium bomber jacket features water-resistant fabric, our signature purple lining, and heavy-duty hardware. Perfect for layering in any season.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Purple", "Black", "Olive"],
    images: [menImage, menImage, menImage], // Simulating gallery
    reviews: 124,
    rating: 4.8
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#1a1025] text-white font-sans">
      <Navbar />
      <main className="flex-grow pt-32 pb-20">
        <div className="container mx-auto px-4 md:px-6">
          <Link href="/collections">
            <a className="inline-flex items-center gap-2 text-purple-300 hover:text-white mb-8 text-sm font-medium transition-colors">
              <ArrowLeft size={16} /> Back to Collections
            </a>
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Image Gallery */}
            <div className="space-y-4">
              <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-white/5 border border-white/10 relative">
                <img 
                  src={product.images[0]} 
                  alt={product.name} 
                  className="w-full h-full object-cover"
                />
                <button 
                  onClick={() => setIsWishlisted(!isWishlisted)}
                  className="absolute top-4 right-4 p-3 bg-white/10 backdrop-blur-md rounded-full hover:bg-white/20 transition-colors"
                >
                  <Heart size={20} className={cn("transition-colors", isWishlisted ? "fill-red-500 text-red-500" : "text-white")} />
                </button>
              </div>
              <div className="grid grid-cols-3 gap-4">
                {product.images.map((img, i) => (
                  <div key={i} className="aspect-square rounded-lg overflow-hidden border border-white/10 cursor-pointer hover:border-purple-500 transition-colors">
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div>
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h1 className="text-3xl md:text-4xl font-heading font-bold mb-2">{product.name}</h1>
                  <div className="flex items-center gap-2 text-sm text-purple-300">
                    <div className="flex text-yellow-400">
                      <Star size={16} fill="currentColor" />
                      <Star size={16} fill="currentColor" />
                      <Star size={16} fill="currentColor" />
                      <Star size={16} fill="currentColor" />
                      <Star size={16} fill="currentColor" />
                    </div>
                    <span>({product.reviews} reviews)</span>
                  </div>
                </div>
                <div className="text-3xl font-bold text-purple-400">{product.price}</div>
              </div>

              <p className="text-gray-300 leading-relaxed mb-8 border-b border-white/10 pb-8">
                {product.description}
              </p>

              <div className="space-y-6 mb-8">
                <div>
                  <span className="block text-sm font-bold uppercase tracking-wider mb-3 text-gray-400">Select Size</span>
                  <div className="flex flex-wrap gap-3">
                    {product.sizes.map(size => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={cn(
                          "w-12 h-12 rounded-lg border flex items-center justify-center font-bold transition-all",
                          selectedSize === size 
                            ? "bg-purple-600 border-purple-600 text-white shadow-lg shadow-purple-600/30" 
                            : "border-white/20 hover:border-white/50 text-gray-300"
                        )}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <span className="block text-sm font-bold uppercase tracking-wider mb-3 text-gray-400">Color</span>
                  <div className="flex gap-3">
                    <div className="w-8 h-8 rounded-full bg-purple-900 border-2 border-white ring-2 ring-purple-500 cursor-pointer" />
                    <div className="w-8 h-8 rounded-full bg-black border-2 border-transparent hover:border-white cursor-pointer" />
                    <div className="w-8 h-8 rounded-full bg-stone-700 border-2 border-transparent hover:border-white cursor-pointer" />
                  </div>
                </div>
              </div>

              <div className="flex gap-4 mb-8">
                <Button className="flex-1 h-14 bg-white text-purple-950 hover:bg-gray-100 rounded-full font-bold text-lg uppercase tracking-wide">
                  Add to Cart
                </Button>
                <Button variant="outline" className="h-14 w-14 rounded-full border-white/20 hover:bg-white/10 flex items-center justify-center">
                  <Share2 size={20} />
                </Button>
              </div>

              {/* Direct Contact Options */}
              <div className="bg-white/5 rounded-xl p-6 border border-white/10 space-y-4">
                <h3 className="font-heading font-bold text-lg">Have questions? Talk to us.</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Button variant="outline" className="w-full border-green-500/50 text-green-400 hover:bg-green-500/10 hover:text-green-300 justify-start gap-3">
                    <MessageCircle size={18} /> WhatsApp Us
                  </Button>
                  <Button variant="outline" className="w-full border-purple-500/50 text-purple-300 hover:bg-purple-500/10 hover:text-purple-200 justify-start gap-3">
                    <MessageCircle size={18} /> Direct Message
                  </Button>
                  <Button variant="outline" className="w-full border-white/20 text-gray-300 hover:bg-white/5 justify-start gap-3">
                    <Phone size={18} /> Call Sales
                  </Button>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="flex items-center gap-3 text-sm text-gray-400">
                  <Truck size={20} className="text-purple-400" />
                  <span>Free shipping to Lagos & Ile-Ife</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-400">
                  <ShieldCheck size={20} className="text-purple-400" />
                  <span>Authentic Quality Guaranteed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/home/Hero";
import { FeaturedCollections } from "@/components/home/FeaturedCollections";
import { InstagramFeed } from "@/components/home/InstagramFeed";
import { MessageCircle, Star, ArrowRight, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { motion } from "framer-motion";

// Placeholder for Trending Items
const trendingItems = [
  { id: 1, name: "Urban Bomber", price: "$85", image: "bg-purple-900" },
  { id: 2, name: "Velvet Dress", price: "$120", image: "bg-purple-800" },
  { id: 3, name: "Street Hoodie", price: "$65", image: "bg-indigo-900" },
  { id: 4, name: "Classic Tee", price: "$35", image: "bg-violet-900" },
];

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#1a1025] text-white font-sans">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        
        {/* Featured Collections */}
        <FeaturedCollections />
        
        {/* Trending Section */}
        <section className="py-24 bg-gradient-to-b from-[#1a1025] to-[#251b35]">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-bold">Trending Now</h2>
              <Link href="/collections">
                <a className="text-purple-400 hover:text-purple-300 flex items-center gap-2 text-sm uppercase tracking-wider font-bold">
                  View All <ArrowRight size={16} />
                </a>
              </Link>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {trendingItems.map((item, i) => (
                <motion.div 
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="group cursor-pointer"
                >
                  <div className={`aspect-[3/4] ${item.image} rounded-lg mb-4 overflow-hidden relative`}>
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
                    {/* Placeholder content since we don't have images for all */}
                    <div className="w-full h-full flex items-center justify-center text-white/20 font-heading text-4xl font-bold">
                      BW
                    </div>
                    <div className="absolute bottom-4 left-4 right-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <Button className="w-full bg-white text-black hover:bg-gray-200 font-bold rounded-full text-xs uppercase tracking-widest">
                        Quick Add
                      </Button>
                    </div>
                  </div>
                  <h3 className="font-bold text-lg mb-1">{item.name}</h3>
                  <p className="text-purple-300 font-medium">{item.price}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-purple-900/10 -skew-y-3 transform origin-left scale-110" />
          <div className="container mx-auto px-4 relative z-10">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-16">What Our Clients Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { name: "Sarah J.", text: "The quality is unmatched. I wore the velvet dress to a gala and received compliments all night.", loc: "Lagos" },
                { name: "Michael T.", text: "Finally, a brand that understands modern African street style. Bigwise is the future.", loc: "Ile-Ife" },
                { name: "Amara K.", text: "Fast delivery and the packaging was so premium. Felt like opening a gift to myself.", loc: "Abuja" }
              ].map((t, i) => (
                <div key={i} className="bg-white/5 backdrop-blur-md p-8 rounded-2xl border border-white/10 hover:border-purple-500/50 transition-colors">
                  <div className="flex gap-1 mb-4 text-yellow-400">
                    {[1,2,3,4,5].map(s => <Star key={s} size={16} fill="currentColor" />)}
                  </div>
                  <p className="text-gray-300 italic mb-6 leading-relaxed">"{t.text}"</p>
                  <div>
                    <h4 className="font-bold">{t.name}</h4>
                    <span className="text-xs text-purple-400 uppercase tracking-widest">{t.loc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section className="py-24 bg-purple-900 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
          <div className="container mx-auto px-4 text-center relative z-10">
            <Mail className="w-12 h-12 mx-auto mb-6 text-purple-300" />
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">Join the Bigwise Circle</h2>
            <p className="max-w-xl mx-auto text-purple-200 mb-10 text-lg">
              Be the first to know about new drops, exclusive events in Lagos & Ile-Ife, and member-only sales.
            </p>
            <form className="max-w-md mx-auto flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="flex-grow bg-white/10 border border-white/20 rounded-full px-6 py-3 text-white placeholder:text-white/50 focus:outline-none focus:border-purple-400 transition-colors"
              />
              <Button className="bg-white text-purple-900 hover:bg-gray-100 rounded-full px-8 font-bold">
                Subscribe
              </Button>
            </form>
          </div>
        </section>

        <InstagramFeed />
      </main>
      <Footer />
      
      {/* Floating Buttons */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
        <a 
          href="https://wa.me/1234567890" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform duration-300 flex items-center justify-center"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle size={24} fill="white" />
        </a>
      </div>
    </div>
  );
}

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/home/Hero";
import { FeaturedCollections } from "@/components/home/FeaturedCollections";
import { InstagramFeed } from "@/components/home/InstagramFeed";
import { MessageCircle } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <FeaturedCollections />
        
        {/* Value Proposition Banner */}
        <section className="py-20 bg-primary text-primary-foreground text-center">
          <div className="container mx-auto px-4">
            <h3 className="text-2xl md:text-3xl font-serif font-bold mb-6 italic">
              "Fashion is the armor to survive the reality of everyday life."
            </h3>
            <p className="text-sm uppercase tracking-widest opacity-70">— Bill Cunningham</p>
          </div>
        </section>

        <InstagramFeed />
      </main>
      <Footer />
      
      {/* WhatsApp Floating Button */}
      <a 
        href="https://wa.me/1234567890" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform duration-300"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={24} fill="white" />
      </a>
    </div>
  );
}

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import studioImage from "@assets/generated_images/fashion_design_studio_interior.png";
import { MapPin } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col bg-[#1a1025] text-white font-sans">
      <Navbar />
      <main className="flex-grow pt-32 pb-20">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center mb-20"
          >
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">Our Story</h1>
            <p className="text-xl text-purple-200 leading-relaxed font-light">
              Born in Ile-Ife, refined in Lagos. Bigwise Clothings is a testament to the Nigerian spirit of excellence and style.
            </p>
          </motion.div>

          {/* Locations Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl opacity-20 blur-lg" />
              <img 
                src={studioImage} 
                alt="Bigwise Studio" 
                className="w-full h-auto rounded-xl relative z-10 border border-white/10 shadow-2xl" 
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-heading font-bold mb-4">From Ife to the World</h2>
                <p className="text-gray-300 leading-relaxed">
                  What started as a small tailoring shop near OAU Campus in Ile-Ife has grown into a fashion powerhouse with presence in Lagos. We bridge the gap between traditional craftsmanship and contemporary urban aesthetics.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white/5 p-4 rounded-lg border border-white/10">
                  <span className="block text-3xl font-bold text-purple-400 mb-1">2020</span>
                  <span className="text-sm text-gray-400">Founded in Ile-Ife</span>
                </div>
                <div className="bg-white/5 p-4 rounded-lg border border-white/10">
                  <span className="block text-3xl font-bold text-purple-400 mb-1">2023</span>
                  <span className="text-sm text-gray-400">Expanded to Lagos</span>
                </div>
                <div className="bg-white/5 p-4 rounded-lg border border-white/10">
                  <span className="block text-3xl font-bold text-purple-400 mb-1">5000+</span>
                  <span className="text-sm text-gray-400">Happy Clients</span>
                </div>
                <div className="bg-white/5 p-4 rounded-lg border border-white/10">
                  <span className="block text-3xl font-bold text-purple-400 mb-1">100%</span>
                  <span className="text-sm text-gray-400">Nigerian Made</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Timeline Animation Mockup */}
          <div className="relative py-20 border-t border-white/10">
            <h2 className="text-3xl font-heading font-bold text-center mb-16">The Journey</h2>
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-purple-900/50 -translate-x-1/2 hidden md:block" />
            
            <div className="space-y-12 relative z-10">
              <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="md:w-1/2 md:text-right">
                  <h3 className="text-2xl font-bold text-purple-300">Inception</h3>
                  <p className="text-gray-400">First sketches in a dorm room at OAU.</p>
                </div>
                <div className="w-4 h-4 bg-purple-500 rounded-full shadow-[0_0_20px_rgba(168,85,247,0.5)] flex-shrink-0" />
                <div className="md:w-1/2 text-gray-500 font-mono">2019</div>
              </div>

              <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:flex-row-reverse">
                <div className="md:w-1/2 md:text-left">
                  <h3 className="text-2xl font-bold text-purple-300">First Store</h3>
                  <p className="text-gray-400">Opening our flagship location in Ile-Ife.</p>
                </div>
                <div className="w-4 h-4 bg-purple-500 rounded-full shadow-[0_0_20px_rgba(168,85,247,0.5)] flex-shrink-0" />
                <div className="md:w-1/2 md:text-right text-gray-500 font-mono">2021</div>
              </div>

              <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="md:w-1/2 md:text-right">
                  <h3 className="text-2xl font-bold text-purple-300">Lagos Takeover</h3>
                  <p className="text-gray-400">Expanding to Lekki to serve our growing clientele.</p>
                </div>
                <div className="w-4 h-4 bg-white rounded-full shadow-[0_0_20px_rgba(255,255,255,0.5)] flex-shrink-0" />
                <div className="md:w-1/2 text-gray-500 font-mono">2023</div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

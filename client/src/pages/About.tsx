import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import studioImage from "@assets/generated_images/fashion_design_studio_interior.png";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-grow pt-24 pb-12">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">Our Story</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Bigwise Clothings was born from a simple idea: fashion should be effortless, timeless, and empowering.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img 
                src={studioImage} 
                alt="Bigwise Studio" 
                className="w-full h-auto shadow-xl" 
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-serif font-bold">The Philosophy</h2>
              <p className="text-muted-foreground leading-relaxed">
                We believe that true style comes from within. It's not about following trends blindly, but about finding pieces that resonate with your personal narrative. Bigwise is about making smart, bold choices in what you wear.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Every garment is crafted with meticulous attention to detail, using premium fabrics that stand the test of time. We champion the concept of "slow fashion"—buying less, but buying better.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center border-t border-b border-border py-16">
            <div className="space-y-4">
              <h3 className="text-xl font-bold uppercase tracking-widest">Quality</h3>
              <p className="text-muted-foreground text-sm">Premium materials sourced from sustainable suppliers.</p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-bold uppercase tracking-widest">Design</h3>
              <p className="text-muted-foreground text-sm">Minimalist aesthetics meets functional modern living.</p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-bold uppercase tracking-widest">Integrity</h3>
              <p className="text-muted-foreground text-sm">Honest pricing and transparent production processes.</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

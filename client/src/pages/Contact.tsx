import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Mail, Phone, MessageCircle } from "lucide-react";

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-grow pt-24 pb-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Contact Info */}
            <div className="space-y-8">
              <h1 className="text-4xl md:text-5xl font-serif font-bold mb-8">Get In Touch</h1>
              <p className="text-muted-foreground text-lg mb-8">
                Have a question about an order, a collaboration, or just want to say hi? We'd love to hear from you.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="mt-1 text-primary" />
                  <div>
                    <h3 className="font-bold uppercase tracking-widest text-sm mb-1">Visit Us</h3>
                    <p className="text-muted-foreground">123 Fashion Avenue,<br/>New York, NY 10012</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail className="mt-1 text-primary" />
                  <div>
                    <h3 className="font-bold uppercase tracking-widest text-sm mb-1">Email Us</h3>
                    <p className="text-muted-foreground">hello@bigwiseclothings.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="mt-1 text-primary" />
                  <div>
                    <h3 className="font-bold uppercase tracking-widest text-sm mb-1">Call Us</h3>
                    <p className="text-muted-foreground">+1 (555) 123-4567</p>
                  </div>
                </div>
              </div>

              <div className="pt-8">
                <a 
                  href="https://wa.me/1234567890" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Button className="gap-2 bg-[#25D366] hover:bg-[#25D366]/90 text-white border-none h-12 px-6 rounded-full w-full sm:w-auto">
                    <MessageCircle size={20} />
                    Chat on WhatsApp
                  </Button>
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-secondary/20 p-8 md:p-12">
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-bold uppercase tracking-widest">Name</label>
                  <Input id="name" placeholder="John Doe" className="bg-white border-none h-12" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-bold uppercase tracking-widest">Email</label>
                  <Input id="email" type="email" placeholder="john@example.com" className="bg-white border-none h-12" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-bold uppercase tracking-widest">Message</label>
                  <Textarea id="message" placeholder="How can we help?" className="bg-white border-none min-h-[150px] resize-none" />
                </div>
                <Button type="submit" className="w-full h-12 text-sm uppercase tracking-widest font-bold">
                  Send Message
                </Button>
              </form>
            </div>

          </div>

          {/* Map Placeholder */}
          <div className="mt-24 w-full h-[400px] bg-gray-200 grayscale relative">
             <iframe 
               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.2219901290355!2d-74.0061599845942!3d40.71272817933185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a22a3bda30d%3A0xb89d1fe6bc499443!2sDowntown%20Conference%20Center!5e0!3m2!1sen!2sus!4v1620155556276!5m2!1sen!2sus" 
               width="100%" 
               height="100%" 
               style={{ border: 0, filter: "grayscale(100%)" }} 
               allowFullScreen 
               loading="lazy"
             ></iframe>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

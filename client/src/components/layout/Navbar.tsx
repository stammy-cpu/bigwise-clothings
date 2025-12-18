import { Link, useLocation } from "wouter";
import { Menu, X, ShoppingBag, Search } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Collections", href: "/collections" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 border-b border-transparent",
        scrolled || isOpen ? "bg-white/90 backdrop-blur-md border-border py-4" : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-primary"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop Left Links */}
          <div className="hidden md:flex gap-8">
            {navLinks.slice(0, 2).map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                className={cn(
                  "text-sm uppercase tracking-widest hover:text-primary/60 transition-colors",
                  location === link.href ? "font-bold" : "font-medium"
                )}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Logo */}
          <Link 
            href="/"
            className="text-2xl md:text-3xl font-serif font-bold tracking-tighter text-center absolute left-1/2 -translate-x-1/2 md:static md:transform-none"
          >
            BIGWISE
          </Link>

          {/* Desktop Right Links */}
          <div className="hidden md:flex gap-8 items-center">
            {navLinks.slice(2).map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                className={cn(
                  "text-sm uppercase tracking-widest hover:text-primary/60 transition-colors",
                  location === link.href ? "font-bold" : "font-medium"
                )}
              >
                {link.name}
              </Link>
            ))}
            <div className="flex items-center gap-4 ml-4 border-l pl-4 border-gray-200">
              <Search className="w-5 h-5 cursor-pointer hover:text-primary/60 transition-colors" />
              <ShoppingBag className="w-5 h-5 cursor-pointer hover:text-primary/60 transition-colors" />
            </div>
          </div>

          {/* Mobile Cart/Search (placeholder) */}
          <div className="flex md:hidden gap-4">
             <ShoppingBag className="w-5 h-5" />
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-border animate-in slide-in-from-top-5">
            <div className="flex flex-col p-6 gap-6 items-center">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  href={link.href}
                  className="text-lg uppercase tracking-widest font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

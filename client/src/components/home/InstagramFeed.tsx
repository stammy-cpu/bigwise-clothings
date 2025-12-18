import { Instagram } from "lucide-react";

export function InstagramFeed() {
  // Placeholder data - in a real app this would come from an API
  const posts = [
    { id: 1, color: "bg-neutral-200" },
    { id: 2, color: "bg-neutral-300" },
    { id: 3, color: "bg-neutral-400" },
    { id: 4, color: "bg-neutral-200" },
  ];

  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4 text-muted-foreground">
            <Instagram size={20} />
            <span className="text-sm uppercase tracking-widest font-bold">@bigwise_clothings</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-serif font-bold">On The Feed</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {posts.map((post, index) => (
            <div 
              key={post.id} 
              className="aspect-square relative group overflow-hidden bg-gray-100"
            >
              {/* Using placeholders for now since we don't have 4 more images generated yet, 
                  but styling them to look like loading/placeholder content */}
              <div className={`w-full h-full ${post.color} flex items-center justify-center text-muted-foreground/20`}>
                <Instagram size={48} />
              </div>
              
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white font-bold tracking-widest uppercase text-sm">View Post</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

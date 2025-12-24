import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { loadUserFromStorage } from "@/lib/auth";
import { getProducts, addProduct, deleteProduct, updateProduct } from "@/lib/products";
import { Trash2, Edit2, Plus, LogOut } from "lucide-react";

export default function Admin() {
  const [, setLocation] = useLocation();
  const [user, setUser] = useState(loadUserFromStorage());
  const [products, setProducts] = useState(getProducts());
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState<number | null>(null);
  
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    category: "Men",
    image: "",
    description: ""
  });

  useEffect(() => {
    if (!user || user.role !== "admin") {
      setLocation("/auth");
    }
  }, [user, setLocation]);

  const handleAddProduct = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.price || !formData.category) {
      alert("Please fill in all required fields");
      return;
    }

    if (editingId) {
      const updated = updateProduct(editingId, {
        name: formData.name,
        price: formData.price,
        category: formData.category,
        image: formData.image,
        description: formData.description
      });
      if (updated) {
        setProducts(getProducts());
      }
      setEditingId(null);
    } else {
      addProduct({
        name: formData.name,
        price: formData.price,
        category: formData.category,
        image: formData.image,
        description: formData.description
      }, user?.id.toString() || "admin");
      setProducts(getProducts());
    }

    setFormData({ name: "", price: "", category: "Men", image: "", description: "" });
    setShowForm(false);
  };

  const handleDelete = (id: number) => {
    if (confirm("Are you sure you want to delete this product?")) {
      deleteProduct(id);
      setProducts(getProducts());
    }
  };

  const handleEdit = (product: typeof products[0]) => {
    setFormData({
      name: product.name,
      price: product.price,
      category: product.category,
      image: product.image,
      description: product.description || ""
    });
    setEditingId(product.id);
    setShowForm(true);
  };

  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    setLocation("/auth");
  };

  if (!user) {
    return null;
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#1a1025] text-white font-sans">
      <Navbar />
      <main className="flex-grow pt-24 md:pt-32 pb-12 px-4">
        <div className="container mx-auto max-w-7xl">
          {/* Header */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
            <div>
              <h1 className="text-3xl md:text-5xl font-heading font-bold mb-2">Admin Dashboard</h1>
              <p className="text-gray-400">Welcome, {user.name} ({user.role})</p>
            </div>
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 bg-red-600 hover:bg-red-700 px-6 py-3 rounded-lg font-bold transition-colors"
              data-testid="button-logout"
            >
              <LogOut size={18} />
              Logout
            </button>
          </div>

          {/* Add Product Section */}
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 md:p-8 mb-8">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-heading font-bold">{editingId ? "Edit Product" : "Add New Product"}</h2>
              {showForm && (
                <button
                  onClick={() => {
                    setShowForm(false);
                    setEditingId(null);
                    setFormData({ name: "", price: "", category: "Men", image: "", description: "" });
                  }}
                  className="text-gray-400 hover:text-white"
                >
                  ✕
                </button>
              )}
            </div>

            {!showForm ? (
              <Button
                onClick={() => setShowForm(true)}
                className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-lg flex items-center gap-2"
                data-testid="button-add-product"
              >
                <Plus size={20} />
                Add New Product
              </Button>
            ) : (
              <form onSubmit={handleAddProduct} className="space-y-4">
                <div>
                  <label className="text-xs uppercase tracking-widest font-bold text-gray-400 block mb-2">Product Name *</label>
                  <Input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g., Premium Street Hoodie"
                    className="bg-black/20 border-white/10 text-white h-12"
                    data-testid="input-product-name"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs uppercase tracking-widest font-bold text-gray-400 block mb-2">Price (₦) *</label>
                    <Input
                      type="text"
                      value={formData.price}
                      onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                      placeholder="e.g., 35,000"
                      className="bg-black/20 border-white/10 text-white h-12"
                      data-testid="input-product-price"
                    />
                  </div>
                  <div>
                    <label className="text-xs uppercase tracking-widest font-bold text-gray-400 block mb-2">Category *</label>
                    <select
                      value={formData.category}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                      className="w-full bg-black/20 border border-white/10 text-white h-12 rounded-lg px-3"
                      data-testid="select-category"
                    >
                      <option>Men</option>
                      <option>Women</option>
                      <option>Unisex</option>
                      <option>Accessories</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-xs uppercase tracking-widest font-bold text-gray-400 block mb-2">Image URL</label>
                  <Input
                    type="url"
                    value={formData.image}
                    onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                    placeholder="https://example.com/image.jpg"
                    className="bg-black/20 border-white/10 text-white h-12"
                    data-testid="input-product-image"
                  />
                </div>

                <div>
                  <label className="text-xs uppercase tracking-widest font-bold text-gray-400 block mb-2">Description</label>
                  <textarea
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    placeholder="Product description..."
                    className="w-full bg-black/20 border border-white/10 text-white rounded-lg px-3 py-2 min-h-24"
                    data-testid="input-product-description"
                  />
                </div>

                <div className="flex gap-4">
                  <Button
                    type="submit"
                    className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg"
                    data-testid="button-submit-product"
                  >
                    {editingId ? "Update Product" : "Add Product"}
                  </Button>
                  <Button
                    type="button"
                    onClick={() => {
                      setShowForm(false);
                      setEditingId(null);
                      setFormData({ name: "", price: "", category: "Men", image: "", description: "" });
                    }}
                    variant="outline"
                    className="border-white/20 text-white hover:bg-white/10 font-bold py-3 px-6 rounded-lg"
                  >
                    Cancel
                  </Button>
                </div>
              </form>
            )}
          </div>

          {/* Products List */}
          <div>
            <h2 className="text-2xl font-heading font-bold mb-6">All Products ({products.length})</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl overflow-hidden hover:border-purple-500/50 transition-colors"
                  data-testid={`product-card-${product.id}`}
                >
                  {product.image && (
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-48 object-cover"
                    />
                  )}
                  <div className="p-4">
                    <h3 className="font-bold text-lg mb-1 line-clamp-2">{product.name}</h3>
                    <p className="text-gray-400 text-sm mb-3">{product.category}</p>
                    <p className="text-purple-300 font-bold text-lg mb-4">{product.price}</p>
                    {product.description && (
                      <p className="text-gray-400 text-sm mb-4 line-clamp-2">{product.description}</p>
                    )}
                    <div className="flex gap-2">
                      <button
                        onClick={() => handleEdit(product)}
                        className="flex-1 bg-blue-600 hover:bg-blue-700 py-2 rounded-lg font-bold flex items-center justify-center gap-2 transition-colors"
                        data-testid={`button-edit-${product.id}`}
                      >
                        <Edit2 size={16} />
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(product.id)}
                        className="flex-1 bg-red-600 hover:bg-red-700 py-2 rounded-lg font-bold flex items-center justify-center gap-2 transition-colors"
                        data-testid={`button-delete-${product.id}`}
                      >
                        <Trash2 size={16} />
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

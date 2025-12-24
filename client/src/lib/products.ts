// Product management with localStorage
export interface Product {
  id: number;
  name: string;
  price: string;
  category: string;
  image: string;
  description?: string;
  createdAt: number;
  createdBy: string;
}

const DEFAULT_PRODUCTS: Product[] = [
  { 
    id: 1, 
    name: "Urban Bomber Jacket", 
    price: "₦50,000", 
    category: "Men", 
    image: "https://via.placeholder.com/400x500?text=Bomber+Jacket",
    createdAt: Date.now(),
    createdBy: "admin"
  },
  { 
    id: 2, 
    name: "Velvet Evening Dress", 
    price: "₦105,000", 
    category: "Women", 
    image: "https://via.placeholder.com/400x500?text=Velvet+Dress",
    createdAt: Date.now(),
    createdBy: "admin"
  },
  { 
    id: 3, 
    name: "Premium Street Hoodie", 
    price: "₦35,000", 
    category: "Unisex", 
    image: "https://via.placeholder.com/400x500?text=Street+Hoodie",
    createdAt: Date.now(),
    createdBy: "admin"
  },
  { 
    id: 4, 
    name: "Classic White Tee", 
    price: "₦18,000", 
    category: "Men", 
    image: "https://via.placeholder.com/400x500?text=White+Tee",
    createdAt: Date.now(),
    createdBy: "admin"
  },
  { 
    id: 5, 
    name: "Casual Pants", 
    price: "₦46,000", 
    category: "Women", 
    image: "https://via.placeholder.com/400x500?text=Casual+Pants",
    createdAt: Date.now(),
    createdBy: "admin"
  },
  { 
    id: 6, 
    name: "Denim Jacket", 
    price: "₦40,000", 
    category: "Unisex", 
    image: "https://via.placeholder.com/400x500?text=Denim+Jacket",
    createdAt: Date.now(),
    createdBy: "admin"
  }
];

export function getProducts(): Product[] {
  const stored = localStorage.getItem("bigwise_products");
  if (!stored) {
    localStorage.setItem("bigwise_products", JSON.stringify(DEFAULT_PRODUCTS));
    return DEFAULT_PRODUCTS;
  }
  return JSON.parse(stored);
}

export function addProduct(product: Omit<Product, "id" | "createdAt" | "createdBy">, createdBy: string): Product {
  const products = getProducts();
  const newProduct: Product = {
    ...product,
    id: Math.max(...products.map(p => p.id), 0) + 1,
    createdAt: Date.now(),
    createdBy
  };
  products.push(newProduct);
  localStorage.setItem("bigwise_products", JSON.stringify(products));
  return newProduct;
}

export function updateProduct(id: number, updates: Partial<Omit<Product, "id" | "createdAt" | "createdBy">>): Product | null {
  const products = getProducts();
  const index = products.findIndex(p => p.id === id);
  if (index === -1) return null;
  
  products[index] = { ...products[index], ...updates };
  localStorage.setItem("bigwise_products", JSON.stringify(products));
  return products[index];
}

export function deleteProduct(id: number): boolean {
  const products = getProducts();
  const filtered = products.filter(p => p.id !== id);
  if (filtered.length === products.length) return false;
  
  localStorage.setItem("bigwise_products", JSON.stringify(filtered));
  return true;
}

export function getProductById(id: number): Product | undefined {
  const products = getProducts();
  return products.find(p => p.id === id);
}

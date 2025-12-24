import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useLocation } from "wouter";
import { useState } from "react";
import { validateLogin, saveUserToStorage } from "@/lib/auth";

export default function Auth() {
  const [, setLocation] = useLocation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    const user = validateLogin(email, password);
    if (user) {
      saveUserToStorage(user);
      setLocation("/");
    } else {
      setError("Invalid email or password");
    }

    setLoading(false);
  };

  const handleDemoLogin = (demoEmail: string) => {
    const user = validateLogin(demoEmail, "@21Savage");
    if (user) {
      saveUserToStorage(user);
      setLocation("/");
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#1a1025] text-white font-sans">
      <Navbar />
      <main className="flex-grow pt-32 pb-20 flex items-center justify-center">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 shadow-2xl shadow-purple-900/20">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-heading font-bold mb-2">Welcome Back</h1>
              <p className="text-gray-400 text-sm">Join the Bigwise community</p>
            </div>

            <Tabs defaultValue="login" className="w-full">
              <TabsList className="grid w-full grid-cols-2 bg-black/20 p-1 rounded-xl mb-8">
                <TabsTrigger value="login" className="data-[state=active]:bg-purple-600 data-[state=active]:text-white rounded-lg">Login</TabsTrigger>
                <TabsTrigger value="demo" className="data-[state=active]:bg-purple-600 data-[state=active]:text-white rounded-lg">Demo</TabsTrigger>
              </TabsList>
              
              <TabsContent value="login" className="space-y-4">
                {error && (
                  <div className="bg-red-500/20 border border-red-500/50 rounded-lg p-3 text-red-300 text-sm">
                    {error}
                  </div>
                )}
                <form onSubmit={handleLogin} className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest font-bold text-gray-400">Email</label>
                    <Input 
                      type="email" 
                      placeholder="john@example.com" 
                      className="bg-black/20 border-white/10 text-white h-12"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      data-testid="input-email"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest font-bold text-gray-400">Password</label>
                    <Input 
                      type="password" 
                      placeholder="••••••••" 
                      className="bg-black/20 border-white/10 text-white h-12"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      data-testid="input-password"
                    />
                  </div>
                  <Button 
                    type="submit"
                    disabled={loading}
                    className="w-full h-12 bg-white text-purple-950 hover:bg-gray-100 font-bold uppercase tracking-wider rounded-lg mt-4 disabled:opacity-50"
                    data-testid="button-login"
                  >
                    {loading ? "Logging in..." : "Log In"}
                  </Button>
                </form>
              </TabsContent>
              
              <TabsContent value="demo" className="space-y-4">
                <p className="text-sm text-gray-400 mb-4">Quick login with demo accounts:</p>
                <button
                  onClick={() => handleDemoLogin("fatahstammy@gmail.com")}
                  className="w-full h-12 bg-purple-600 hover:bg-purple-700 text-white font-bold uppercase tracking-wider rounded-lg mb-3 transition-colors"
                  data-testid="button-demo-admin"
                >
                  Demo: Admin User
                </button>
                <div className="text-xs text-gray-500 text-center mb-3">
                  Email: fatahstammy@gmail.com
                </div>
                <button
                  onClick={() => handleDemoLogin("goke@stammy.org")}
                  className="w-full h-12 bg-blue-600 hover:bg-blue-700 text-white font-bold uppercase tracking-wider rounded-lg transition-colors"
                  data-testid="button-demo-user"
                >
                  Demo: Regular User
                </button>
                <div className="text-xs text-gray-500 text-center">
                  Email: goke@stammy.org
                </div>
              </TabsContent>
            </Tabs>
            
            <div className="mt-8 text-center text-xs text-gray-500">
              By continuing, you agree to our Terms of Service and Privacy Policy.
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

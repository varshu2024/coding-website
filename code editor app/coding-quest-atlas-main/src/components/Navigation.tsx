import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Code2 } from "lucide-react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-2 text-xl font-bold gradient-text">
              <Code2 className="w-8 h-8" />
              CodeLearn
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex items-center space-x-8">
              <Link to="/" className="text-foreground hover:text-primary transition-colors">Home</Link>
              <Link to="/courses" className="text-foreground hover:text-primary transition-colors">Courses</Link>
              <Link to="/editor" className="text-foreground hover:text-primary transition-colors">Editor</Link>
              <a href="#" className="text-foreground hover:text-primary transition-colors">Community</a>
            </div>
            
            <div className="flex items-center space-x-4">
              <Button variant="outline" className="border-primary/20 text-primary hover:bg-primary/10">
                Login
              </Button>
              <Button className="gradient-primary glow-primary">
                Sign Up
              </Button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background/95 backdrop-blur-md border-t border-border">
              <div className="flex flex-col space-y-2">
                <Link to="/" className="block px-3 py-2 text-foreground hover:text-primary transition-colors">Home</Link>
                <Link to="/courses" className="block px-3 py-2 text-foreground hover:text-primary transition-colors">Courses</Link>
                <Link to="/editor" className="block px-3 py-2 text-foreground hover:text-primary transition-colors">Editor</Link>
                <a href="#" className="block px-3 py-2 text-foreground hover:text-primary transition-colors">Community</a>
                
                <div className="flex flex-col space-y-2 pt-4 border-t border-border">
                  <Button variant="outline" className="border-primary/20 text-primary">
                    Login
                  </Button>
                  <Button className="gradient-primary">
                    Sign Up
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
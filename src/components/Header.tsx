import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Truck } from "lucide-react";
import { cn } from "@/lib/utils";
import { GlassButton } from "@/components/ui/button-variants";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Post Load", href: "/post-load" },
  { name: "Post Truck", href: "/post-truck" },
  { name: "Live Map", href: "/map" },
  { name: "Contact", href: "/contact" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 w-full z-50 glass-card border-0">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link to="/" className="-m-1.5 p-1.5 flex items-center group">
            <Truck className="h-8 w-8 text-accent mr-2 transition-transform group-hover:scale-110" />
            <span className="text-2xl font-bold text-primary">LoadStack</span>
          </Link>
        </div>
        
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-foreground"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={cn(
                "text-sm font-semibold leading-6 transition-colors hover:text-accent",
                location.pathname === item.href ? "text-accent" : "text-foreground"
              )}
            >
              {item.name}
            </Link>
          ))}
        </div>
        
        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-4">
          <GlassButton variant="secondary">Log in</GlassButton>
          <GlassButton variant="primary">Sign up</GlassButton>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden">
          <div className="fixed inset-0 z-50" />
          <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto glass-card px-6 py-6 sm:max-w-sm">
            <div className="flex items-center justify-between">
              <Link to="/" className="-m-1.5 p-1.5 flex items-center">
                <Truck className="h-8 w-8 text-accent mr-2" />
                <span className="text-xl font-bold text-primary">LoadStack</span>
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-foreground"
                onClick={() => setMobileMenuOpen(false)}
              >
                <X className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-border">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className={cn(
                        "-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:bg-muted",
                        location.pathname === item.href ? "text-accent" : "text-foreground"
                      )}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
                <div className="py-6 space-y-2">
                  <GlassButton variant="secondary" className="w-full">Log in</GlassButton>
                  <GlassButton variant="primary" className="w-full">Sign up</GlassButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
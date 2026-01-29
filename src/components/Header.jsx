import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Input } from './Input';
import { Button } from './Button';
import { useCart } from '../hooks/useCart';
import { CartModal } from './CartModal';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { cartCount } = useCart();

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-light-gray">
      <div className="max-w-7xl mx-auto">
        {/* Top Bar */}
        <div className="flex items-center justify-between px-4 py-4 md:px-6">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-black hover:text-dark-charcoal transition-colors">
            CLOTH
          </Link>

          {/* Search Bar - Hidden on Mobile */}
          <div className="hidden md:flex flex-1 mx-8">
            <Input
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          {/* Icons - Cart and Menu */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsCartOpen(!isCartOpen)}
              className="text-black text-2xl hover:text-dark-charcoal transition-colors relative"
              data-testid="cart-icon"
            >
              🛒
              {cartCount > 0 && (
                <span
                  className="absolute -top-2 -right-2 bg-accent text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-semibold"
                  data-testid="cart-count"
                >
                  {cartCount}
                </span>
              )}
            </button>
            <button
              className="md:hidden text-2xl text-black hover:text-dark-charcoal transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              ☰
            </button>
          </div>
        </div>

        {/* Navigation - Visible on Desktop */}
        <nav className="hidden md:block px-4 md:px-6 py-3 border-t border-light-gray">
          <div className="flex gap-8">
            <Link to="/products?category=men" className="text-sm font-semibold text-black hover:text-dark-charcoal transition-colors">
              MEN
            </Link>
            <Link to="/products?category=women" className="text-sm font-semibold text-black hover:text-dark-charcoal transition-colors">
              WOMEN
            </Link>
            <Link to="/products?category=kids" className="text-sm font-semibold text-black hover:text-dark-charcoal transition-colors">
              KIDS
            </Link>
            <a href="#" className="text-sm font-semibold text-black hover:text-dark-charcoal transition-colors">
              SALE
            </a>
          </div>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="md:hidden border-t border-light-gray px-4 py-4 space-y-4">
            <Link to="/products?category=men" className="block text-sm font-semibold text-black hover:text-dark-charcoal">
              MEN
            </Link>
            <Link to="/products?category=women" className="block text-sm font-semibold text-black hover:text-dark-charcoal">
              WOMEN
            </Link>
            <Link to="/products?category=kids" className="block text-sm font-semibold text-black hover:text-dark-charcoal">
              KIDS
            </Link>
            <a href="#" className="block text-sm font-semibold text-black hover:text-dark-charcoal">
              SALE
            </a>
            <div className="pt-4 border-t border-light-gray">
              <Input placeholder="Search products..." />
            </div>
          </nav>
        )}

        {/* Cart Modal */}
        {isCartOpen && <CartModal onClose={() => setIsCartOpen(false)} />}
      </div>
    </header>
  );
}

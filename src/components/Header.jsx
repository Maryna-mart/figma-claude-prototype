import { useState } from 'react';
import { Input } from './Input';
import { Button } from './Button';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-light-gray">
      <div className="max-w-7xl mx-auto">
        {/* Top Bar */}
        <div className="flex items-center justify-between px-4 py-4 md:px-6">
          {/* Logo */}
          <div className="text-2xl font-bold text-black">
            CLOTH
          </div>

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
            <button className="text-black text-2xl hover:text-dark-charcoal transition-colors">
              🛒
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
            <a href="#" className="text-sm font-semibold text-black hover:text-dark-charcoal transition-colors">
              MEN
            </a>
            <a href="#" className="text-sm font-semibold text-black hover:text-dark-charcoal transition-colors">
              WOMEN
            </a>
            <a href="#" className="text-sm font-semibold text-black hover:text-dark-charcoal transition-colors">
              KIDS
            </a>
            <a href="#" className="text-sm font-semibold text-black hover:text-dark-charcoal transition-colors">
              SALE
            </a>
          </div>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="md:hidden border-t border-light-gray px-4 py-4 space-y-4">
            <a href="#" className="block text-sm font-semibold text-black hover:text-dark-charcoal">
              MEN
            </a>
            <a href="#" className="block text-sm font-semibold text-black hover:text-dark-charcoal">
              WOMEN
            </a>
            <a href="#" className="block text-sm font-semibold text-black hover:text-dark-charcoal">
              KIDS
            </a>
            <a href="#" className="block text-sm font-semibold text-black hover:text-dark-charcoal">
              SALE
            </a>
            <div className="pt-4 border-t border-light-gray">
              <Input placeholder="Search products..." />
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}

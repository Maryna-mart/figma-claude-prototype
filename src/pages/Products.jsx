import { useState, useMemo } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { ProductGrid } from '../components/ProductGrid';
import { FilterSidebar } from '../components/FilterSidebar';
import { Breadcrumb } from '../components/Breadcrumb';
import { Button } from '../components/Button';
import { useCart } from '../hooks/useCart';
import { products } from '../data/products';

export function Products() {
  const { addToCart } = useCart();
  const [filters, setFilters] = useState({
    sizes: [],
    availability: [],
    colors: [],
  });
  const [sortBy, setSortBy] = useState('newest');

  const filteredAndSortedProducts = useMemo(() => {
    let result = [...products];

    // Apply filters
    if (filters.availability.length > 0) {
      result = result.filter(product => {
        if (filters.availability.includes('In Stock')) {
          if (product.availability) return true;
        }
        if (filters.availability.includes('Out of Stock')) {
          if (!product.availability) return true;
        }
        return false;
      });
    }

    // Apply sorting
    switch (sortBy) {
      case 'price-low':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'name':
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'newest':
      default:
        // Keep original order for newest
        break;
    }

    return result;
  }, [filters, sortBy]);

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <div className="max-w-7xl mx-auto px-4 md:px-6 py-8">
        {/* Breadcrumb */}
        <Breadcrumb
          items={[
            { label: 'Home', href: '/' },
            { label: 'Products' },
          ]}
        />

        {/* Title */}
        <h1 className="text-4xl font-bold text-black my-8">All Products</h1>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar - Hidden on Mobile, Visible on Desktop */}
          <div className="hidden lg:block">
            <FilterSidebar onFilterChange={handleFilterChange} />
          </div>

          {/* Products Section */}
          <div className="lg:col-span-3">
            {/* Sort Options */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 pb-6 border-b border-light-gray">
              <p className="text-sm text-charcoal mb-4 md:mb-0">
                Showing {filteredAndSortedProducts.length} products
              </p>
              <div className="flex items-center gap-3">
                <label className="text-sm font-semibold text-black">Sort by:</label>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-4 py-2 border border-light-gray rounded-md text-sm focus:outline-none focus:border-black transition-colors"
                >
                  <option value="newest">Newest</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="name">Name: A to Z</option>
                </select>
              </div>
            </div>

            {/* Product Grid */}
            {filteredAndSortedProducts.length > 0 ? (
              <>
                <ProductGrid
                  products={filteredAndSortedProducts}
                  onAddToCart={addToCart}
                />

                {/* Pagination */}
                <div className="flex justify-center items-center gap-2 mt-12">
                  <Button variant="outline" size="sm">
                    Previous
                  </Button>
                  <div className="flex gap-1">
                    {[1, 2, 3].map((page) => (
                      <button
                        key={page}
                        className={`w-8 h-8 rounded-md flex items-center justify-center transition-colors ${
                          page === 1
                            ? 'bg-black text-white'
                            : 'border border-light-gray text-black hover:bg-off-white'
                        }`}
                      >
                        {page}
                      </button>
                    ))}
                  </div>
                  <Button variant="outline" size="sm">
                    Next
                  </Button>
                </div>
              </>
            ) : (
              <div className="text-center py-12">
                <p className="text-lg text-charcoal">No products found matching your filters.</p>
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

import { useNavigate } from 'react-router-dom';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { ProductGrid } from '../components/ProductGrid';
import { Button } from '../components/Button';
import { useCart } from '../hooks/useCart';
import { products, heroContent, featuredCategories } from '../data/products';

export function Home() {
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  // Get featured products (first 6)
  const featuredProducts = products.slice(0, 6);

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center h-96 md:h-screen flex items-center justify-center"
        style={{ backgroundImage: `url(${heroContent.image})`, backgroundAttachment: 'fixed' }}
      >
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative text-center text-white px-4 z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">{heroContent.title}</h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">{heroContent.subtitle}</p>
          <Button variant="accent" size="lg" onClick={() => navigate('/products')}>
            {heroContent.ctaText}
          </Button>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 py-16">
        <h2 className="text-3xl font-bold text-black mb-12 text-center">Shop by Category</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredCategories.map((category) => (
            <a
              key={category.id}
              href={`/products?category=${category.id}`}
              className="group relative overflow-hidden rounded-lg h-64 md:h-80 cursor-pointer"
            >
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-300 flex items-center justify-center">
                <h3 className="text-3xl font-bold text-white text-center">{category.name}</h3>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 py-16 border-t border-light-gray">
        <h2 className="text-3xl font-bold text-black mb-12">Featured Products</h2>
        <ProductGrid products={featuredProducts} onAddToCart={handleAddToCart} />
        <div className="flex justify-center mt-12">
          <Button variant="outline" size="lg" onClick={() => navigate('/products')}>
            View All Products
          </Button>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-off-white py-16">
        <div className="max-w-2xl mx-auto px-4 md:px-6 text-center">
          <h2 className="text-2xl font-bold text-black mb-4">Subscribe to Our Newsletter</h2>
          <p className="text-charcoal mb-8">Get the latest updates on new products and sales</p>
          <div className="flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-md border border-light-gray focus:outline-none focus:border-black transition-colors"
            />
            <Button>Subscribe</Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

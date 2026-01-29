import { Badge } from './Badge';
import { Button } from './Button';

export function ProductCard({ product, onAddToCart }) {
  const { name, price, originalPrice, image, badge, availability } = product;

  const hasDiscount = originalPrice && originalPrice > price;

  return (
    <div className="bg-white rounded-lg overflow-hidden border border-light-gray hover:shadow-md transition-shadow duration-200" data-testid="product-card">
      {/* Image Container */}
      <div className="relative bg-off-white aspect-square overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
        {badge && (
          <div className="absolute top-3 right-3">
            <Badge variant={badge === 'NEW' ? 'accent' : 'warning'} size="sm">
              {badge}
            </Badge>
          </div>
        )}
        {hasDiscount && (
          <div className="absolute top-3 left-3 bg-accent-red text-white px-2 py-1 rounded text-xs font-bold">
            -{Math.round(((originalPrice - price) / originalPrice) * 100)}%
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="text-sm font-semibold text-black mb-2 line-clamp-2" data-testid="product-name">
          {name}
        </h3>

        {/* Price */}
        <div className="flex items-center gap-2 mb-3">
          <span className="text-lg font-bold text-black">
            ${price.toFixed(2)}
          </span>
          {hasDiscount && (
            <span className="text-sm text-charcoal line-through">
              ${originalPrice.toFixed(2)}
            </span>
          )}
        </div>

        {/* Availability */}
        <div className="mb-3">
          <span className={`text-xs font-semibold ${availability ? 'text-mint-green' : 'text-accent-red'}`}>
            {availability ? 'In Stock' : 'Out of Stock'}
          </span>
        </div>

        {/* Add to Cart Button */}
        <Button
          fullWidth
          variant={availability ? 'primary' : 'secondary'}
          size="sm"
          disabled={!availability}
          onClick={() => onAddToCart(product)}
          data-testid="add-to-cart-btn"
        >
          Add to Cart
        </Button>
      </div>
    </div>
  );
}

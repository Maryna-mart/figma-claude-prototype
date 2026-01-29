import { useCart } from '../hooks/useCart';
import { Button } from './Button';

export function CartModal({ onClose }) {
  const { cartItems, cartTotal, removeFromCart, updateQuantity } = useCart();

  return (
    <div
      className="fixed inset-0 bg-black/50 z-40"
      onClick={onClose}
      data-testid="cart-modal-backdrop"
    >
      <div
        className="fixed right-0 top-0 bottom-0 w-full md:w-96 bg-white shadow-lg flex flex-col"
        onClick={(e) => e.stopPropagation()}
        data-testid="cart-modal"
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-light-gray">
          <h2 className="text-xl font-bold text-black">Shopping Cart</h2>
          <button
            onClick={onClose}
            className="text-2xl text-charcoal hover:text-black transition-colors"
            data-testid="close-cart"
          >
            ✕
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto p-6">
          {cartItems.length === 0 ? (
            <p className="text-center text-charcoal py-12">Your cart is empty</p>
          ) : (
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div key={item.id} className="border border-light-gray rounded-lg p-4" data-testid="cart-item">
                  <div className="flex gap-4 mb-3">
                    {item.image && (
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-16 h-16 object-cover rounded"
                      />
                    )}
                    <div className="flex-1">
                      <h3 className="font-semibold text-black" data-testid="cart-item-name">
                        {item.name}
                      </h3>
                      <p className="text-sm text-charcoal">
                        ${item.price.toFixed(2)}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity - 1)
                        }
                        className="w-8 h-8 rounded border border-light-gray flex items-center justify-center hover:bg-off-white transition-colors"
                      >
                        −
                      </button>
                      <span className="text-sm font-semibold" data-testid="item-quantity">
                        Qty: {item.quantity}
                      </span>
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity + 1)
                        }
                        className="w-8 h-8 rounded border border-light-gray flex items-center justify-center hover:bg-off-white transition-colors"
                      >
                        +
                      </button>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-sm text-error hover:text-red-700 transition-colors"
                      data-testid="remove-from-cart"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {cartItems.length > 0 && (
          <div className="border-t border-light-gray p-6 space-y-4">
            <div className="flex items-center justify-between text-lg font-bold">
              <span>Total:</span>
              <span data-testid="cart-total">${cartTotal.toFixed(2)}</span>
            </div>
            <Button
              className="w-full"
              onClick={() => {
                onClose();
              }}
            >
              Checkout
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}

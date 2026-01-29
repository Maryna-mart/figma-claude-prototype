import { useState } from 'react';
import { Home } from './pages/Home';

export default function App() {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (productId) => {
    setCart([...cart, productId]);
  };

  return (
    <div>
      <Home onAddToCart={handleAddToCart} />
    </div>
  );
}

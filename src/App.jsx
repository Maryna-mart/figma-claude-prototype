import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { ErrorBoundary } from './components/ErrorBoundary';
import { Home } from './pages/Home';
import { Products } from './pages/Products';

export default function App() {
  return (
    <ErrorBoundary>
      <Router basename="/figma-claude-prototype">
        <CartProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
          </Routes>
        </CartProvider>
      </Router>
    </ErrorBoundary>
  );
}

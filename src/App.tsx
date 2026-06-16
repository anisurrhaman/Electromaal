/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { CartProvider } from './hooks/useCart';
import { Layout } from './components/layout/Layout';
import { Home } from './pages/Home';
import { Shop } from './pages/Shop';
import { ProductDetail } from './pages/ProductDetail';
import { Cart } from './pages/Cart';
import { Checkout } from './pages/Checkout';
import { Contact } from './pages/Contact';
import { Auth } from './pages/Auth';
import { Account } from './pages/Account';

export default function App() {
  return (
    <Router>
      <CartProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="shop" element={<Shop />} />
            <Route path="product/:id" element={<ProductDetail />} />
            <Route path="cart" element={<Cart />} />
            <Route path="checkout" element={<Checkout />} />
            <Route path="contact" element={<Contact />} />
            <Route path="account" element={<Account />} />
            {/* Catch-all for undefined routes */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
          {/* Auth is outside the main layout for clean look */}
          <Route path="auth" element={<Auth />} />
        </Routes>
      </CartProvider>
    </Router>
  );
}


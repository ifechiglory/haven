import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import { setProducts } from './store';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import About from './components/About';
import Contact from './components/Contact';
import CartSidebar from './components/CartSidebar';
import ProductModal from './components/ProductModal';
import CheckoutModal from './components/CheckoutModal';
import Footer from './components/Footer';
import { products } from './data/product';

function AppContent() {
  useEffect(() => {
    store.dispatch(setProducts(products));
  }, []);

  return (
    <section className="min-h-screen bg-linear-to-br from-gray-50 to-gray-100">
      <Navbar />
      <section id="home">
        <Hero />
      </section>

      <About />
      <section id="catalog">
        <section className="container mx-auto px-4 py-8">
          <ProductGrid />
        </section>
      </section>
      <Contact />

      <Footer />
      <CartSidebar />
      <ProductModal />
      <CheckoutModal />
    </section>
  );
}

function App() {
  return (
    <Provider store={store}>
      <AppContent />
    </Provider>
  );
}

export default App;
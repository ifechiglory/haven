import React, { useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { motion, AnimatePresence } from 'framer-motion';
import ProductCard from './ProductCard';
import FiltersPanel from './FiltersPanel';

const ProductGrid = () => {
  const { items: products, filters, sort } = useSelector(state => state.products);
  const dispatch = useDispatch();

  const filteredAndSortedProducts = useMemo(() => {
    let filtered = products.filter(product => {
      // Category filter
      if (filters.category !== 'all' && product.category !== filters.category) {
        return false;
      }
      
      // Price range filter
      if (product.price < filters.priceRange[0] || product.price > filters.priceRange[1]) {
        return false;
      }
      
      // Color filter
      if (filters.color !== 'all' && product.color !== filters.color) {
        return false;
      }
      
      return true;
    });

    // Sort products
    switch (sort) {
      case 'price-low':
        return filtered.sort((a, b) => a.price - b.price);
      case 'price-high':
        return filtered.sort((a, b) => b.price - a.price);
      case 'newest':
        return filtered.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
      case 'popular':
        return filtered.sort((a, b) => (b.isPopular ? 1 : 0) - (a.isPopular ? 1 : 0));
      default:
        return filtered;
    }
  }, [products, filters, sort]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <section className="py-16" id='catalog'>
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-light text-center mb-12 text-gray-800 underline decoration-orange-500"
        >
          Our Collection
        </motion.h2>
        
        <FiltersPanel />
        
        <AnimatePresence mode="wait">
          <motion.div
            key={JSON.stringify(filters) + sort}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredAndSortedProducts.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </motion.div>
        </AnimatePresence>
        
        {filteredAndSortedProducts.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <p className="text-gray-500 text-lg">No products found matching your criteria.</p>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default ProductGrid;
import { configureStore, createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    isOpen: false,
  },
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.items.find(item => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const item = state.items.find(item => item.id === id);
      if (item) {
        item.quantity = quantity;
        if (item.quantity <= 0) {
          state.items = state.items.filter(item => item.id !== id);
        }
      }
    },
    toggleCart: (state) => {
      state.isOpen = !state.isOpen;
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    items: [],
    filters: {
      category: 'all',
      priceRange: [0, 2000],
      color: 'all',
    },
    sort: 'newest',
  },
  reducers: {
    setProducts: (state, action) => {
      state.items = action.payload;
    },
    setFilters: (state, action) => {
      state.filters = { ...state.filters, ...action.payload };
    },
    setSort: (state, action) => {
      state.sort = action.payload;
    },
  },
});

const modalSlice = createSlice({
  name: 'modal',
  initialState: {
    isProductModalOpen: false,
    selectedProduct: null,
    isCheckoutOpen: false,
  },
  reducers: {
    openProductModal: (state, action) => {
      state.isProductModalOpen = true;
      state.selectedProduct = action.payload;
    },
    closeProductModal: (state) => {
      state.isProductModalOpen = false;
      state.selectedProduct = null;
    },
    toggleCheckout: (state) => {
      state.isCheckoutOpen = !state.isCheckoutOpen;
    },
  },
});

export const { addToCart, removeFromCart, updateQuantity, toggleCart, clearCart } = cartSlice.actions;
export const { setProducts, setFilters, setSort } = productsSlice.actions;
export const { openProductModal, closeProductModal, toggleCheckout } = modalSlice.actions;

export const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    products: productsSlice.reducer,
    modal: modalSlice.reducer,
  },
});
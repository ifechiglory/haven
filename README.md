# Haven - Minimal Furniture E-commerce Store

## 📋 Project Overview

Haven is a modern, minimalist furniture e-commerce store built with React, featuring a sleek glassmorphism design, smooth animations, and an intuitive user experience. The project showcases contemporary furniture with a focus on clean design and seamless interactions.

## 🚀 Live Demo

[Add your live demo link here]

## 🛠 Tech Stack

### Frontend

- **React 18** - Modern React with hooks
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Production-ready motion library for React

### State Management

- **Redux Toolkit (RTK)** - Modern Redux with simplified syntax

### Icons & UI

- **Lucide React** - Beautiful & consistent icons
- **Glassmorphism Design** - Modern glass-like UI effects

### Development Tools

- **ESLint** - Code linting
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixing

## 📁 Project Structure

```txt
src/
├── components/          # React components
│   ├── Navbar.jsx      # Navigation with mobile menu
│   ├── Hero.jsx        # Landing section with CTA
│   ├── ProductGrid.jsx # Product catalog with filters
│   ├── ProductCard.jsx # Individual product display
│   ├── FiltersPanel.jsx# Filtering and sorting controls
│   ├── CartSidebar.jsx # Shopping cart overlay
│   ├── ProductModal.jsx# Product detail modal
│   ├── CheckoutModal.jsx# Checkout process modal
│   ├── AboutSection.jsx# Company information
│   ├── ContactSection.jsx# Contact form and info
│   └── Footer.jsx      # Site footer with links
├── store/              # Redux store configuration
│   └── index.js        # Store setup and slices
├── data/               # Mock data and constants
│   └── products.js     # Product catalog data
└── App.jsx             # Main application component
```

## ✨ Key Features

### 🎨 Design & UX

- **Glassmorphism UI** - Semi-transparent backgrounds with backdrop blur
- **Orange Accent Theme** - Consistent color scheme throughout
- **Responsive Design** - Mobile-first approach with Tailwind CSS
- **Smooth Animations** - Framer Motion for page transitions and interactions
- **Hover Effects** - Interactive elements with smooth state changes

### 🛍 E-commerce Functionality

- **Product Catalog** - Grid layout with filtering and sorting
- **Shopping Cart** - Add/remove items with quantity management
- **Product Modals** - Detailed views with image galleries
- **Checkout Process** - Multi-step mock checkout flow
- **Filter System** - Category, price range, and color filtering
- **Sort Options** - Price, popularity, and newest sorting

### 🔧 Technical Features

- **Redux State Management** - Centralized state for cart, products, and UI
- **Smooth Scrolling Navigation** - Section-based navigation with scroll behavior
- **Mobile-Optimized** - Responsive design with touch-friendly interfaces
- **Accessible UI** - Proper ARIA labels and keyboard navigation
- **Performance Optimized** - Efficient re-renders and lazy loading

## 🎯 Component Details

### Core Components

#### Navbar

- Sticky navigation with glassmorphism effect
- Mobile hamburger menu with smooth animations
- Cart icon with item count badge
- Smooth scrolling to sections

#### Hero Section

- Full-screen landing with background image
- Animated call-to-action button
- Interactive scroll indicator
- Gradient overlays for text readability

#### Product Grid

- Responsive grid layout (1-3 columns)
- Real-time filtering and sorting
- Animated product cards with hover effects
- Empty states and loading indicators

#### Shopping Cart

- Slide-out sidebar design
- Quantity management with +/- controls
- Real-time total calculation
- Persistent cart state

### Interactive Features

#### Product Modals

- Image gallery with navigation
- Product details and features
- Quantity selection
- Add to cart functionality

#### Filter System

- Category filtering (chairs, desks, sofas, etc.)
- Price range slider
- Color-based filtering
- Sort by price, popularity, and date

## 🏗 Installation & Setup

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation Steps

1. **Clone the repository**

   ```bash
   git clone https://github.com/your-username/haven-furniture.git
   cd haven-furniture
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start development server**

   ```bash
   npm run dev
   ```

4. **Build for production**

   ```bash
   npm run build
   ```

5. **Preview production build**

   ```bash
   npm run preview
   ```

## 📝 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🎨 Customization

### Styling

The project uses Tailwind CSS with custom configurations:

- Orange color scheme (`#f97316`)
- Glassmorphism effects with backdrop blur
- Custom animations and transitions

### Adding Products

Edit `src/data/products.js` to add new products:

```javascript
{
  id: 7,
  name: "Product Name",
  price: 299.99,
  category: "category",
  color: "color",
  description: "Product description",
  features: ["Feature 1", "Feature 2"],
  images: ["image-url-1", "image-url-2"],
  inStock: true,
  isPopular: false,
  isNew: true
}
```

### State Management

The Redux store manages:

- Cart items and quantities
- Product filters and sorting
- Modal states (product detail, checkout)
- UI states (mobile menu, cart sidebar)

## 🌟 Performance Features

- **Code Splitting** - Efficient bundle splitting with Vite
- **Lazy Loading** - Components loaded on demand
- **Optimized Images** - Proper sizing and format selection
- **Efficient Re-renders** - Optimized React component structure
- **Smooth Animations** - Hardware-accelerated with Framer Motion

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🔮 Future Enhancements

- [ ] User authentication system
- [ ] Product reviews and ratings
- [ ] Wishlist functionality
- [ ] Advanced search with keywords
- [ ] Product comparison feature
- [ ] Backend integration with real database
- [ ] Payment gateway integration
- [ ] Order tracking system
- [ ] Admin dashboard
- [ ] Multi-language support

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## 👥 Authors

- Ifechukwu - [GitHub Profile](https://github.com/ifechiglory)

## 🙏 Acknowledgments

- Unsplash for high-quality furniture images
- Lucide for beautiful icons
- Tailwind CSS for the utility-first framework
- Framer Motion for smooth animations
- Redux Toolkit for simplified state management

---

**Haven** - *Where minimal design meets modern living*

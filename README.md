

# StyleCove

**StyleCove** is a multi-page, responsive eCommerce web application for a modern clothing store. Built using **React**, it offers a smooth user experience for browsing fashion products, viewing details, managing a shopping cart, and checking out. The app incorporates **React Hooks** like `useState`, `useContext`, and `useEffect`, and utilizes **React Router DOM** for seamless multi-page navigation.

## Features

- **Product Catalog**: Browse various clothing categories, view product details, and see related items.
- **Shopping Cart**: Add products to the cart, adjust quantities, and remove items with ease.
- **User Authentication**: (If applicable) Simulated login and registration flow.
- **Checkout Page**: Review order and proceed with checkout.
- **React Router DOM Navigation**: Smooth transitions between pages without page reloads.
- **State Management**: Efficiently manages cart items and user data with `useState` and `useContext`.

## Technologies Used

- **React**: JavaScript library for building user interfaces.
- **React Router DOM**: Manages routing and navigation between pages.
- **React Hooks**:
  - **useState**: Manages component-level state.
  - **useContext**: Provides global state management across the app.
  - **useEffect**: Fetches data and manages side effects.
- **CSS Framework**: Tailwind CSS or Bootstrap for responsive styling.
- **API Integration**: (if applicable) Fetches product data and user information from an external API.

## Installation

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/your-username/stylecove.git
   cd stylecove
   ```

2. **Install Dependencies**:

   ```bash
   npm install
   ```

3. **Run the App**:

   Start the development server:

   ```bash
   npm start
   ```

   The app will be running at `http://localhost:3000/`.

## Folder Structure

```bash
├── public
│   └── index.html
├── src
│   ├── components          # Reusable components (Navbar, Footer, ProductCard, etc.)
│   ├── pages               # Different pages (Home, Product, Cart, Checkout)
│   │   ├── Shop.jsx         # Home page showing featured products
│   │   ├── Product.jsx      # Product detail page
│   │   ├── Cart.jsx         # Cart page for managing selected items
│   │   ├── LoginSignUp.jsx     # Checkout page for finalizing orders
│   ├── context             # Context API for global state
│   │   └── ShopContext.js  # Manages global cart state using useContext
│   ├── App.js              # Main app component with routing
│   ├── index.js            # Entry point of the application
│   └── styles              # CSS/SCSS stylesheets
├── package.json
└── README.md
```

## React Hooks Used

- **useState**: Manages local component state such as cart items, product quantities, and user input.
- **useContext**: Used to create a `CartContext` for managing cart state globally, allowing easy access to cart data and actions across components.
- **useEffect**: Fetches product data from an API and handles side effects.

## Routing with React Router DOM

**StyleCove** uses **React Router DOM** for efficient navigation across pages:

- `/`: Home page displaying the latest fashion items.
- `/men`: Men's shopping page displayed.
- `/women`: women shopping page displayed.
- `kids`: Kids shopping page is displayed.
- `/product/:id`: Product detail page for specific clothing items.
- `/cart`: Shopping cart page showing selected items.
- `/login`: To login to the website.

## Usage

1. **Browse Products**: Visit the home page to see featured clothing items.
2. **View Product Details**: Click on an item to see more details, including price, size options, and descriptions.
3. **Add to Cart**: Add products to the cart from the product details page.
4. **View Cart**: Go to the cart page to manage your selected items and adjust quantities.
5. **Checkout**: On the checkout page, review your order and proceed to complete your purchase.

## Deployment

To deploy **StyleCove**:

1. Build the production version of the app:

   ```bash
   npm run build
   ```

2. Deploy the app to a hosting platform like Netlify, Vercel, or GitHub Pages.

## License

This project is licensed under the MIT License.

---

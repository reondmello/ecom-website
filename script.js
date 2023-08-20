// script.js

// Cart data
const cart = [];

// Function to update the cart display
function updateCartDisplay() {
    const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
    document.getElementById('cart-count').textContent = cartCount;
}

// Function to handle adding an item to the cart
function addToCart(productIndex) {
    const product = products[productIndex];
    const existingCartItem = cart.find(item => item.id === product.id);

    if (existingCartItem) {
        existingCartItem.quantity++;
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    updateCartDisplay();
}

// Sample product data
const products = [
    { id: 1, name: 'Product 1', price: 19.99 },
    { id: 2, name: 'Product 2', price: 24.99 },
    { id: 3, name: 'Product 3', price: 29.99 },
];

// Add event listeners to "Add to Cart" buttons
document.addEventListener('DOMContentLoaded', () => {
    const addToCartButtons = document.querySelectorAll('.product button');
    addToCartButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            addToCart(index);
        });
    });
});



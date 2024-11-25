// Initialize cart
let cart = [];

// Add to cart function
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        const product = button.parentElement;
        const id = product.getAttribute('data-id');
        const name = product.querySelector('h3').textContent;
        const price = parseFloat(product.getAttribute('data-price'));

        // Add product to cart
        cart.push({ id, name, price });
        updateCart();
    });
});

// Update cart display
function updateCart() {
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    cartItems.innerHTML = '';

    let total = 0;
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - $${item.price}`;
        cartItems.appendChild(li);
        total += item.price;
    });

    cartTotal.textContent = total.toFixed(2);
}

// Checkout function
document.getElementById('checkout').addEventListener('click', () => {
    alert(`Thank you for your purchase! Total: $${document.getElementById('cart-total').textContent}`);
    cart = []; // Clear cart
    updateCart();
});
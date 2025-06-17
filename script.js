// script.js
let cartItems = [];
let total = 0;

function addToCart(productName, price) {
    cartItems.push({ name: productName, price: price });
    total += price;
    updateCart();
}

function updateCart() {
    const cartList = document.getElementById('cart-items');
    cartList.innerHTML = '';
    cartItems.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - $${item.price}`;
        cartList.appendChild(li);
    });
    document.getElementById('cart-total').textContent = total.toFixed(2);
}

function checkout() {
    // Check if there are items in the cart before clearing
    if (total > 0) {
        cartItems = [];
        total = 0;
        updateCart();
        alert('Thank you for your purchase!');
    } else {
        alert("Your cart is empty. Please add items to your cart before proceeding.");
    }
}

// Function to add items to cart
function addToCart(title, price) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    // Check if item already exists
    let existingItem = cart.find(item => item.title === title);
    if (existingItem) {
        alert("Item is already in the cart!");
        return;
    }

    cart.push({ title, price });
    localStorage.setItem("cart", JSON.stringify(cart));

    updateCartCount();
    alert("Item added to cart!");
}

// Function to update cart count
function updateCartCount() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    document.getElementById("cart-count").innerText = cart.length;
}

// Function to load cart items on cart page
function loadCart() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let cartContainer = document.getElementById("cart-items");
    let totalPrice = 0;

    cartContainer.innerHTML = ""; // Clear previous content

    cart.forEach((item, index) => {
        totalPrice += item.price;

        let itemDiv = document.createElement("div");
        itemDiv.classList.add("cart-item");

        itemDiv.innerHTML = `
            <input type="text" value="${item.title}" readonly>
            <p>Price: ₹${item.price}</p>
            <button onclick="removeFromCart(${index})">Remove</button>
        `;
        cartContainer.appendChild(itemDiv);
    });

    document.getElementById("total-price").innerText = totalPrice;
}

// Function to remove an item from cart
function removeFromCart(index) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    loadCart();
}

// Handle checkout form submission
document.addEventListener("DOMContentLoaded", function () {
    if (document.getElementById("cart-items")) {
        loadCart();
    }

    if (document.getElementById("checkout-form")) {
        document.getElementById("checkout-form").addEventListener("submit", function (e) {
            e.preventDefault();
            alert("Order placed successfully!");
            localStorage.removeItem("cart");
            window.location.href = "Store-Page.html";
        });
    }
});

// Ensure cart count updates on store page load
document.addEventListener("DOMContentLoaded", updateCartCount);

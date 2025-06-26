 document.addEventListener("DOMContentLoaded", () => {
    // Select all "Add to Cart" buttons
    const buttons = document.querySelectorAll("button");

    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            // Get product details
            const productContainer = button.parentElement;
            const image = productContainer.querySelector("img").src;
            const price = productContainer.querySelector("p").textContent;
            const name = productContainer.querySelector("h3").textContent;
           
            // Create product object
            const product = { image, price, name};

            // Get existing cart data from localStorage
            let cart = JSON.parse(localStorage.getItem("cart")) || [];

            // Add new product to cart
            cart.push(product);

            // Save updated cart back to localStorage
            localStorage.setItem("cart", JSON.stringify(cart));

            alert(`${name} added to cart!`);
        });
    });
});
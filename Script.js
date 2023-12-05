// JavaScript for sliding functionality
let currentIndex = 0;

function showSlide(index) {
    const wrapper = document.querySelector('.carousel-wrapper');
    const slides = document.querySelectorAll('.carousel-slide');
    const slideWidth = slides[0].clientWidth;

    if (index >= slides.length) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = slides.length - 1;
    } else {
        currentIndex = index;
    }

    const transformValue = -currentIndex * slideWidth + 'px';
    wrapper.style.transform = 'translateX(' + transformValue + ')';
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

function prevSlide() {
    showSlide(currentIndex - 1);
}
function addToCart(productName, price) {
    // Retrieve existing cart items from local storage or initialize an empty array
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];

    // Add the current product to the cart
    const product = {
        name: productName,
        price: price,
        // Add other product details as needed
    };
    cartItems.push(product);

    // Save the updated cart back to local storage
    localStorage.setItem('cart', JSON.stringify(cartItems));

    // Optionally, provide feedback to the user
    alert(`${productName} added to cart!`);
}



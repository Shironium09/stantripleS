document.querySelectorAll('nav a').forEach(function(link) {
    if (window.location.pathname.includes(link.getAttribute('href'))) {
        link.classList.add('current');
    }
});


document.addEventListener("DOMContentLoaded", () => {
    const currentPage = window.location.pathname.split("/").pop(); // Dynamically get current page
    const nav = document.querySelector(".memselect");
    const items = document.querySelectorAll(".memselect ul li");
    let currentIndex = -1;

    // Identify the current page and set the class
    items.forEach((item, index) => {
        const link = item.querySelector("a").getAttribute("href");
        if (link === currentPage) {
            currentIndex = index;
            item.querySelector("a").classList.add("current");
        }
    });

    if (currentIndex !== -1) {
        // Show 3 items before and after the current page
        items.forEach((item, index) => {
            if (index >= currentIndex - 3 && index <= currentIndex + 3) {
                item.classList.add("visible");
            } else {
                item.classList.remove("visible");
            }
        });

        // Center the current item
        const activeItem = items[currentIndex];
        const scrollLeft =
            activeItem.offsetLeft - nav.clientWidth / 2 + activeItem.clientWidth / 2;
        nav.scrollLeft = scrollLeft;
    } else {
        console.error("Current page not found in navigation.");
    }
});

document.querySelector('.slider').addEventListener('scroll', () => {
    // Get all the images and the current slider container
    const images = document.querySelectorAll('.slider img');
    const slider = document.querySelector('.slider');
    
    // Get the width of one image (since all images have equal width in this case)
    const imageWidth = slider.scrollWidth / images.length;
    
    // Find out the index of the currently visible image
    const visibleIndex = Math.floor(slider.scrollLeft / imageWidth);

    // Update the caption
    const captionElement = document.getElementById('slider-caption');
    captionElement.textContent = images[visibleIndex].dataset.caption;
});

// Existing code for clicking nav buttons
document.querySelectorAll('.slider-nav a').forEach((navLink, index) => {
    navLink.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent default link behavior

        // Update the caption
        const images = document.querySelectorAll('.slider img');
        const captionElement = document.getElementById('slider-caption');
        captionElement.textContent = images[index].dataset.caption;

        // Scroll to the corresponding image
        const slider = document.querySelector('.slider');
        const imageWidth = slider.scrollWidth / slider.childElementCount;
        slider.scrollTo({
            left: imageWidth * index,
            behavior: 'smooth',
        });
    });
});







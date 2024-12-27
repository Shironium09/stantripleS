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











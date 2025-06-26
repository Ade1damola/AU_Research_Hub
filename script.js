// Mobile menu functionality
        const mobileMenuBtn = document.getElementById('mobile-menu-btn');
        const closeMenuBtn = document.getElementById('close-menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        const menuOverlay = document.getElementById('menu-overlay');

        function openMenu() {
            mobileMenu.classList.add('open');
            menuOverlay.classList.remove('hidden');
            document.body.style.overflow = 'hidden';
        }

        function closeMenu() {
            mobileMenu.classList.remove('open');
            menuOverlay.classList.add('hidden');
            document.body.style.overflow = '';
        }

        mobileMenuBtn.addEventListener('click', openMenu);
        closeMenuBtn.addEventListener('click', closeMenu);
        menuOverlay.addEventListener('click', closeMenu);

        // Close menu on escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && mobileMenu.classList.contains('open')) {
                closeMenu();
            }
        });

        // Close menu when clicking on menu links (for single page navigation)
        const mobileMenuLinks = mobileMenu.querySelectorAll('a');
        mobileMenuLinks.forEach(link => {
            link.addEventListener('click', closeMenu);
        });

        // Handle window resize
        window.addEventListener('resize', () => {
            if (window.innerWidth >= 768 && mobileMenu.classList.contains('open')) {
                closeMenu();
            }
        });

// Fade In Effect
// document.addEventListener("DOMContentLoaded", function() {
//     const sections = document.querySelectorAll(".fade-in-section");

//     const observerOptions = {
//         root: null, // Use the viewport as the root
//         rootMargin: "0px", // No margin around the root
//         threshold: 0.1 // Trigger when 10% of the element is visible
//     };

//     const observer = new IntersectionObserver((entries, observer) => {
//         entries.forEach(entry => {
//             if (entry.isIntersecting) {
//                 entry.target.classList.add("is-visible");
//                 observer.unobserve(entry.target); // Stop observing once it's visible
//             }
//         });
//     }, observerOptions);

//     sections.forEach(section => {
//         observer.observe(section);
//     });
// });


document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll(".fade-in-section");

    const observerOptions = {
        root: null, // Use the viewport as the root
        rootMargin: "0px", // No margin around the root
        threshold: 0.1 // Trigger when 10% of the element is visible/invisible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // If element is entering the viewport
                entry.target.classList.add("is-visible");
            } else {
                // If element is leaving the viewport
                entry.target.classList.remove("is-visible");
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        observer.observe(section);
    });
});
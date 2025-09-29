

// Добавляем интерактивность к полям
const inputs = document.querySelectorAll('.form-input, .form-textarea, .form-select');
inputs.forEach(input => {
    input.addEventListener('focus', function() {
        this.parentElement.style.transform = 'scale(1.02)';
    });

    input.addEventListener('blur', function() {
        this.parentElement.style.transform = 'scale(1)';
    });
});

//Navigation and page switching
function showPage(pageId) {
    // Hide all pages
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.classList.remove('active'));

    // Show selected page
    document.getElementById(pageId).classList.add('active');

    // Update navigation
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => link.classList.remove('active'));

    // Find and activate corresponding nav link
    const activeLink = document.querySelector(`[onclick="showPage('${pageId}')"]`);
    if (activeLink) activeLink.classList.add('active');

    // Scroll to top
    window.scrollTo(0, 0);

    // Update page title
    const titles = {
        'home': 'VISTEK SP. Z O.O. - Strona główna',
        'about': 'VISTEK SP. Z O.O. - O nas',
        'services': 'VISTEK SP. Z O.O. - Usługi',
        'pricing': 'VISTEK SP. Z O.O. - Cennik',
        'contact': 'VISTEK SP. Z O.O. - Kontakt'
    };
    document.title = titles[pageId] || 'VISTEK SP. Z O.O.';
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        if (this.getAttribute('href') === '#') {
            e.preventDefault();
        }
    });
});

// Add scroll effect to header
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(255, 255, 255, 0.98)';
    } else {
        header.style.background = 'rgba(255, 255, 255, 0.95)';
    }
});

// Animate elements on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'slideInUp 0.8s ease-out forwards';
        }
    });
}, observerOptions);

// Observe all cards
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.value-card, .service-card, .contact-card, .pricing-category').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(50px)';
        observer.observe(card);
    });
});

// Mobile menu toggle (placeholder for future implementation)
function toggleMobileMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('mobile-active');
}

// Enhanced animations for pricing tables
document.addEventListener('DOMContentLoaded', function() {
    const pricingRows = document.querySelectorAll('.pricing-row');
    pricingRows.forEach((row, index) => {
        row.style.animation = `slideInUp 0.6s ease-out ${index * 0.1}s both`;
    });
});


function toggleMenu() {
    document.querySelector(".nav-links").classList.toggle("show");
}





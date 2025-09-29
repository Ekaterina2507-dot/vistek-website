// Инициализация EmailJS (замените на ваш Public Key)
emailjs.init('BhGIV5pyEcpw0oLtL');

document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const btn = document.querySelector('.submit-btn');
    const originalText = btn.textContent;

    btn.textContent = 'Отправляется...';
    btn.disabled = true;

    // Собираем данные формы
    const templateParams = {
        from_name: this.firstName.value + ' ' + this.lastName.value,
        from_email: this.email.value,
        phone: this.phone.value,
        subject: this.subject.value,
        message: this.message.value,
        to_email: 'levkovichkate64@gmail.com' // Ваша почта
    };

    // Отправляем письмо через EmailJS
    emailjs.send('service_91u4oyn', 'template_fzo00y8', templateParams)
        .then(() => {
            btn.textContent = 'Отправлено!';
            btn.style.background = 'linear-gradient(135deg, #27ae60, #2ecc71)';

            setTimeout(() => {
                btn.textContent = originalText;
                btn.disabled = false;
                btn.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
                this.reset();
            }, 2000);
        })
        .catch((error) => {
            console.error('Ошибка:', error);
            btn.textContent = 'Ошибка отправки';
            btn.style.background = 'linear-gradient(135deg, #e74c3c, #c0392b)';

            setTimeout(() => {
                btn.textContent = originalText;
                btn.disabled = false;
                btn.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
            }, 3000);
        });
});

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

// Navigation and page switching
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


const translations = {
    pl: {
        title: "VISTEK SP. Z O.O.",
        description: "Twoje nowoczesne i niezawodne biuro rachunkowe.",
        cta: "Skontaktuj się z nami"
    },
    en: {
        title: "VISTEK LTD",
        description: "Your modern and reliable accounting office.",
        cta: "Contact Us"
    },
    ru: {
        title: "VISTEK ООО",
        description: "Ваш современный и надежный бухгалтерский офис.",
        cta: "Связаться с нами"
    }
};


function setLanguage(lang) {
    const elements = document.querySelectorAll("[data-translate]");

    elements.forEach(el => {
        const key = el.getAttribute("data-translate");
        el.textContent = translations[lang][key];
    });

    // Сохраняем язык в localStorage, чтобы сайт помнил выбор
    localStorage.setItem("siteLanguage", lang);
}

// При загрузке страницы выбираем язык из localStorage или ставим по умолчанию
document.addEventListener("DOMContentLoaded", () => {
    const savedLang = localStorage.getItem("siteLanguage") || "pl";
    setLanguage(savedLang);
});

function toggleMenu() {
    document.querySelector(".nav-links").classList.toggle("show");
}






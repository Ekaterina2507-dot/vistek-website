
//validation.js

// Инициализация EmailJS
emailjs.init('BhGIV5pyEcpw0oLtL');

let currentLang = 'pl';

// Функция для синхронизации языка
function syncLanguage() {
    if (typeof window.currentLang !== 'undefined') {
        currentLang = window.currentLang;
    }
}

// Вызываем синхронизацию при загрузке
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', syncLanguage);
} else {
    syncLanguage();
}

// Следим за изменениями глобального языка
setInterval(() => {
    if (typeof window.currentLang !== 'undefined' && window.currentLang !== currentLang) {
        currentLang = window.currentLang;
    }
}, 100);

// Объект с переводами сообщений об ошибках
const validationMessages = {
    pl: {
        emailInvalid: 'Nieprawidłowy format email',
        emailWarning: (domain) => `Adres email z domeną "${domain}" może być nietypowy. Upewnij się, że jest poprawny.`,
        firstNameShort: 'Imię musi zawierać co najmniej 2 znaki',
        firstNameProfanity: 'Imię zawiera niedozwolone słowa',
        lastNameShort: 'Nazwisko musi zawierać co najmniej 2 znaki',
        lastNameProfanity: 'Nazwisko zawiera niedozwolone słowa',
        phoneInvalid: 'Numer telefonu musi być w formacie +48XXXXXXXXX (9 cyfr)',
        subjectEmpty: 'Wybierz temat zapytania',
        messageShort: 'Wiadomość musi zawierać co najmniej 10 znaków',
        messageProfanity: 'Wiadomość zawiera niedozwolone słowa',
        privacyUnchecked: 'Musisz zaakceptować politykę prywatności',
        sending: 'Wysyłanie...',
        sent: 'Wysłane! ✓',
        error: 'Błąd wysyłki ✗',
        phoneNotProvided: 'Nie podano'
    },
    ru: {
        emailInvalid: 'Неправильный формат email',
        emailWarning: (domain) => `Адрес email с доменом "${domain}" может быть нестандартным. Убедитесь, что он правильный.`,
        firstNameShort: 'Имя должно содержать минимум 2 символа',
        firstNameProfanity: 'Имя содержит запрещённые слова',
        lastNameShort: 'Фамилия должна содержать минимум 2 символа',
        lastNameProfanity: 'Фамилия содержит запрещённые слова',
        phoneInvalid: 'Номер телефона должен быть в формате +48XXXXXXXXX (9 цифр)',
        subjectEmpty: 'Выберите тему обращения',
        messageShort: 'Сообщение должно содержать минимум 10 символов',
        messageProfanity: 'Сообщение содержит запрещённые слова',
        privacyUnchecked: 'Вы должны принять политику конфиденциальности',
        sending: 'Отправка...',
        sent: 'Отправлено! ✓',
        error: 'Ошибка отправки ✗',
        phoneNotProvided: 'Не указано'
    }
};

// Функция получения сообщения на текущем языке
function getMessage(key, ...args) {
    const message = validationMessages[currentLang][key];
    return typeof message === 'function' ? message(...args) : message;
}

// Функция для обновления языка валидатора
function updateValidatorLanguage(lang) {
    currentLang = lang;

    // Обновляем placeholder'ы
    const firstName = document.getElementById('firstName');
    const lastName = document.getElementById('lastName');
    const email = document.getElementById('email');
    const phone = document.getElementById('phone');
    const message = document.getElementById('message');

    if (lang === 'ru') {
        if (firstName) firstName.placeholder = 'Ваше имя';
        if (lastName) lastName.placeholder = 'Ваша фамилия';
        if (email) email.placeholder = 'primer@email.com';
        if (phone) phone.placeholder = '+48 123 456 789';
        if (message) message.placeholder = 'Опишите подробно свой вопрос или потребности...';
    } else {
        if (firstName) firstName.placeholder = 'Twoje imię';
        if (lastName) lastName.placeholder = 'Twoje nazwisko';
        if (email) email.placeholder = 'twoj@email.com';
        if (phone) phone.placeholder = '+48 123 456 789';
        if (message) message.placeholder = 'Opisz szczegółowo swoje pytanie lub potrzeby...';
    }

    // Очищаем существующие ошибки и предупреждения при смене языка
    document.querySelectorAll('.error-message').forEach(el => el.style.display = 'none');
    document.querySelectorAll('.warning-message').forEach(el => el.style.display = 'none');
    document.querySelectorAll('.error-input').forEach(el => el.classList.remove('error-input'));
}

// Функция проверки на нецензурную лексику
function checkProfanity(text) {
    const lowerText = text.toLowerCase();
    for (let lang in profanityList) {
        for (let word of profanityList[lang]) {
            const wordRegex = new RegExp('\\b' + word.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '\\b', 'i');
            if (wordRegex.test(text)) {
                return true;
            }
            if (lowerText.includes(word.toLowerCase())) {
                return true;
            }
        }
    }
    return false;
}

// Валидация телефона (+48 и 9 цифр)
function validatePhone(phone) {
    const phoneRegex = /^\+48\d{9}$/;
    return phoneRegex.test(phone.replace(/\s/g, ''));
}

// Популярные email-домены
const popularDomains = [
    'gmail.com', 'yahoo.com', 'outlook.com', 'hotmail.com',
    'icloud.com', 'protonmail.com', 'proton.me',
    'wp.pl', 'onet.pl', 'interia.pl', 'o2.pl',
    'mail.ru', 'yandex.ru', 'yandex.com'
];

// Валидация email
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i;

    if (!emailRegex.test(email)) {
        return {
            valid: false,
            warning: null,
            message: getMessage('emailInvalid')
        };
    }

    const domain = email.split('@')[1].toLowerCase();

    if (!popularDomains.includes(domain)) {
        return {
            valid: true,
            warning: getMessage('emailWarning', domain)
        };
    }

    return { valid: true, warning: null };
}

// Показать ошибку
function showError(input, message) {
    const formGroup = input.closest('.form-group') || input.closest('.form-row');
    let errorElement = formGroup.querySelector('.error-message');

    if (!errorElement) {
        errorElement = document.createElement('div');
        errorElement.className = 'error-message';
        formGroup.appendChild(errorElement);
    }

    errorElement.textContent = message;
    errorElement.style.display = 'block';
    input.classList.add('error-input');
}

// Убрать ошибку
function clearError(input) {
    const formGroup = input.closest('.form-group') || input.closest('.form-row');
    const errorElement = formGroup.querySelector('.error-message');

    if (errorElement) errorElement.style.display = 'none';
    input.classList.remove('error-input');
}

// Показать предупреждение
function showWarning(input, message) {
    const formGroup = input.closest('.form-group') || input.closest('.form-row');
    let warningElement = formGroup.querySelector('.warning-message');

    if (!warningElement) {
        warningElement = document.createElement('div');
        warningElement.className = 'warning-message';
        formGroup.appendChild(warningElement);
    }

    warningElement.textContent = '⚠️ ' + message;
    warningElement.style.display = 'block';
}

// Убрать предупреждение
function clearWarning(input) {
    const formGroup = input.closest('.form-group') || input.closest('.form-row');
    const warningElement = formGroup.querySelector('.warning-message');

    if (warningElement) warningElement.style.display = 'none';
}

// Добавляем обработчики для очистки ошибок/предупреждений
document.querySelectorAll('.form-input, .form-select, .form-textarea').forEach(input => {
    input.addEventListener('input', function() {
        clearError(this);
        clearWarning(this);
    });
});

// Обработка формы
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();

    let isValid = true;

    // Очистка ошибок и предупреждений
    document.querySelectorAll('.error-message').forEach(el => el.style.display = 'none');
    document.querySelectorAll('.warning-message').forEach(el => el.style.display = 'none');
    document.querySelectorAll('.error-input').forEach(el => el.classList.remove('error-input'));

    // Проверка имени
    const firstName = this.firstName.value.trim();
    if (firstName.length < 2) {
        showError(this.firstName, getMessage('firstNameShort'));
        isValid = false;
    } else if (checkProfanity(firstName)) {
        showError(this.firstName, getMessage('firstNameProfanity'));
        isValid = false;
    }

    // Проверка фамилии
    const lastName = this.lastName.value.trim();
    if (lastName.length < 2) {
        showError(this.lastName, getMessage('lastNameShort'));
        isValid = false;
    } else if (checkProfanity(lastName)) {
        showError(this.lastName, getMessage('lastNameProfanity'));
        isValid = false;
    }

    // Проверка email
    const email = this.email.value.trim();
    const emailCheck = validateEmail(email);

    if (!emailCheck.valid) {
        showError(this.email, emailCheck.message);
        isValid = false;
    } else if (emailCheck.warning) {
        showWarning(this.email, emailCheck.warning);
    }

    // Проверка телефона (если заполнен)
    const phone = this.phone.value.trim();
    if (phone && !validatePhone(phone)) {
        showError(this.phone, getMessage('phoneInvalid'));
        isValid = false;
    }

    // Проверка темы
    if (!this.subject.value) {
        showError(this.subject, getMessage('subjectEmpty'));
        isValid = false;
    }

    // Проверка сообщения
    const message = this.message.value.trim();
    if (message.length < 10) {
        showError(this.message, getMessage('messageShort'));
        isValid = false;
    } else if (checkProfanity(message)) {
        showError(this.message, getMessage('messageProfanity'));
        isValid = false;
    }

    // Проверка чекбокса
    if (!this.privacy.checked) {
        const checkboxGroup = this.privacy.closest('.checkbox-group');
        let errorElement = checkboxGroup.querySelector('.error-message');
        if (!errorElement) {
            errorElement = document.createElement('div');
            errorElement.className = 'error-message';
            checkboxGroup.appendChild(errorElement);
        }
        errorElement.textContent = getMessage('privacyUnchecked');
        errorElement.style.display = 'block';
        isValid = false;
    }

    if (!isValid) {
        const firstError = document.querySelector('.error-input');
        if (firstError) {
            firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
        return;
    }

    // Отправка формы
    const btn = document.querySelector('.submit-btn');
    const originalText = btn.textContent;

    btn.textContent = getMessage('sending');
    btn.disabled = true;

    const templateParams = {
        from_name: firstName + ' ' + lastName,
        from_email: email,
        phone: phone || getMessage('phoneNotProvided'),
        subject: this.subject.value,
        message: message,
        to_email: 'levkovichkate64@gmail.com'
    };

    emailjs.send('service_91u4oyn', 'template_fzo00y8', templateParams)
        .then(() => {
            btn.textContent = getMessage('sent');
            btn.style.background = 'linear-gradient(135deg, #27ae60, #2ecc71)';
            setTimeout(() => {
                btn.textContent = originalText;
                btn.disabled = false;
                btn.style.background = 'linear-gradient(135deg, #27ae60, #2ecc71)';
                this.reset();
            }, 2000);
        })
        .catch((error) => {
            console.error('Błąd:', error);
            btn.textContent = getMessage('error');
            btn.style.background = 'linear-gradient(135deg, #e74c3c, #c0392b)';
            setTimeout(() => {
                btn.textContent = originalText;
                btn.disabled = false;
                btn.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
            }, 3000);
        });
});
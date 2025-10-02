// Инициализация EmailJS
emailjs.init('BhGIV5pyEcpw0oLtL');

// Список нецензурных слов
const profanityList = {
    en: ['fuck', 'shit', 'damn', 'bitch', 'asshole', 'bastard', 'crap'],
    ru: ['блять', 'хуй', 'пизда', 'ебать', 'сука', 'дерьмо', 'гавно'],
    pl: ['kurwa', 'chuj', 'pierdol', 'jebać', 'dupa', 'gówno', 'skurwysyn']
};

// Функция проверки на нецензурную лексику
function checkProfanity(text) {
    const lowerText = text.toLowerCase();
    for (let lang in profanityList) {
        for (let word of profanityList[lang]) {
            if (lowerText.includes(word)) {
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
        return { valid: false, warning: null, message: 'Nieprawidłowy format email' };
    }

    const domain = email.split('@')[1].toLowerCase();

    if (!popularDomains.includes(domain)) {
        return { valid: true, warning: `Adres email z domeną "${domain}" może być nietypowy. Upewnij się, że jest poprawny.` };
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
        showError(this.firstName, 'Imię musi zawierać co najmniej 2 znaki');
        isValid = false;
    } else if (checkProfanity(firstName)) {
        showError(this.firstName, 'Imię zawiera niedozwolone słowa');
        isValid = false;
    }

    // Проверка фамилии
    const lastName = this.lastName.value.trim();
    if (lastName.length < 2) {
        showError(this.lastName, 'Nazwisko musi zawierać co najmniej 2 znaki');
        isValid = false;
    } else if (checkProfanity(lastName)) {
        showError(this.lastName, 'Nazwisko zawiera niedozwolone słowa');
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
        showError(this.phone, 'Numer telefonu musi być w formacie +48XXXXXXXXX (9 cyfr)');
        isValid = false;
    }

    // Проверка темы
    if (!this.subject.value) {
        showError(this.subject, 'Wybierz temat zapytania');
        isValid = false;
    }

    // Проверка сообщения
    const message = this.message.value.trim();
    if (message.length < 10) {
        showError(this.message, 'Wiadomość musi zawierać co najmniej 10 znaków');
        isValid = false;
    } else if (checkProfanity(message)) {
        showError(this.message, 'Wiadomość zawiera niedozwolone słowa');
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
        errorElement.textContent = 'Musisz zaakceptować politykę prywatności';
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

    btn.textContent = 'Wysyłanie...';
    btn.disabled = true;

    const templateParams = {
        from_name: firstName + ' ' + lastName,
        from_email: email,
        phone: phone || 'Nie podano',
        subject: this.subject.value,
        message: message,
        to_email: 'levkovichkate64@gmail.com'
    };

    emailjs.send('service_91u4oyn', 'template_fzo00y8', templateParams)
        .then(() => {
            btn.textContent = 'Wysłane! ✓';
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
            btn.textContent = 'Błąd wysyłki ✗';
            btn.style.background = 'linear-gradient(135deg, #e74c3c, #c0392b)';
            setTimeout(() => {
                btn.textContent = originalText;
                btn.disabled = false;
                btn.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
            }, 3000);
        });
});

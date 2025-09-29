// Инициализация EmailJS (замените на ваш Public Key)
emailjs.init('BhGIV5pyEcpw0oLtL');

document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const btn = document.querySelector('.submit-btn');
    const originalText = btn.textContent;

    btn.textContent = 'Wysyłanie...';
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
            btn.textContent = 'Wysłane!';
            btn.style.background = 'linear-gradient(135deg, #27ae60, #2ecc71)';

            setTimeout(() => {
                btn.textContent = originalText;
                btn.disabled = false;
                btn.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
                this.reset();
            }, 2000);
        })
        .catch((error) => {
            console.error('Błąd:', error);
            btn.textContent = 'Błąd wysyłki';
            btn.style.background = 'linear-gradient(135deg, #e74c3c, #c0392b)';

            setTimeout(() => {
                btn.textContent = originalText;
                btn.disabled = false;
                btn.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
            }, 3000);
        });
});
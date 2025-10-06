//translator.js

window.currentLang = 'pl';

function toggleLanguage() {
    const checkbox = document.getElementById('langSwitch');

    if (checkbox.checked) {
        window.currentLang = 'ru';
        translateToRussian();
        if (typeof updateValidatorLanguage === 'function') {
            updateValidatorLanguage('ru');
        }
    } else {
        window.currentLang = 'pl';
        translateToPolish();
        if (typeof updateValidatorLanguage === 'function') {
            updateValidatorLanguage('pl');
        }
    }
}

function translateToRussian() {


    // Навигация
    document.querySelector('.nav-link.active').textContent = 'Главная';
    document.querySelectorAll('.nav-link')[1].textContent = 'О нас';
    document.querySelectorAll('.nav-link')[2].textContent = 'Услуги';
    document.querySelectorAll('.nav-link')[3].textContent = 'Цены';
    document.querySelectorAll('.nav-link')[4].textContent = 'Контакты';

    // Hero section
    document.querySelector('.hero p').textContent = 'Ваш современный и надежный бухгалтерский офис. Профессионализм и индивидуальный подход к каждому клиенту.';
    document.querySelector('.hero-cta .btn-primary').textContent = 'Свяжитесь с нами';
    document.querySelector('.hero-cta .btn-outline').textContent = 'Посмотреть цены';

    // Oferta specjalna
    document.querySelector('.section h3').textContent = 'Специальное предложение';
    document.querySelectorAll('.grid-2 h4')[0].textContent = 'Регистрация компаний';
    document.querySelectorAll('.grid-2 p')[0].textContent = 'ООО';
    document.querySelectorAll('.grid-2 p')[1].textContent = 'При выборе постоянного бухгалтерского обслуживания';

    document.querySelectorAll('.grid-2 h4')[1].textContent = 'Изменения в KRS';
    document.querySelectorAll('.grid-2 p')[2].textContent = 'Для постоянных клиентов';
    document.querySelectorAll('.grid-2 p')[3].textContent = 'С абонементом на бухгалтерское обслуживание';

    // Values
    document.querySelector('.section-title').textContent = 'Ценности, которые нас ведут';
    document.querySelector('.section-subtitle').textContent = 'Профессиональная финансовая поддержка, которая позволяет предпринимателям сосредоточиться на развитии бизнеса';

    let values = document.querySelectorAll('.grid-3 .card');
    values[0].querySelector('.card-title').textContent = 'Профессионализм';
    values[0].querySelector('.card-content p').textContent = 'Высочайшие отраслевые стандарты и профессиональная этика во всех аспектах нашей работы.';

    values[1].querySelector('.card-title').textContent = 'Соответствие закону';
    values[1].querySelector('.card-content p').textContent = 'Постоянно обновляемые знания об изменениях в налоговом законодательстве.';

    values[2].querySelector('.card-title').textContent = 'Безопасность данных';
    values[2].querySelector('.card-content p').textContent = 'Полная конфиденциальность и защита данных в соответствии с GDPR и высшими стандартами.';

    values[3].querySelector('.card-title').textContent = 'Своевременность';
    values[3].querySelector('.card-content p').textContent = 'Точность и пунктуальность в выполнении всех обязательств.';

    values[4].querySelector('.card-title').textContent = 'Индивидуальный подход';
    values[4].querySelector('.card-content p').textContent = 'Гибкие решения, адаптированные к особенностям каждого клиента.';

    values[5].querySelector('.card-title').textContent = 'Обслуживание по всей Польше';
    values[5].querySelector('.card-content p').textContent = 'Современные инструменты, позволяющие удобно работать независимо от местоположения.';

    // Services
    document.querySelectorAll('.section-title')[1].textContent = 'Комплексный спектр услуг';
    document.querySelectorAll('.section-subtitle')[1].textContent = 'Полный набор решений, адаптированных к потребностям вашей компании';

    let services = document.querySelectorAll('.grid-2 .card');
    services[0].querySelector('.card-title').textContent = 'Бухгалтерские услуги';
    services[0].querySelectorAll('li')[0].textContent = 'Ведение полного бухгалтерского учета';
    services[0].querySelectorAll('li')[1].textContent = 'Книга доходов и расходов (KPiR)';
    services[0].querySelectorAll('li')[2].textContent = 'Учет фиксированного налога';
    services[0].querySelectorAll('li')[3].textContent = 'Годовые финансовые отчеты';

    services[1].querySelector('.card-title').textContent = 'Налоги';
    services[1].querySelectorAll('li')[0].textContent = 'Подготовка деклараций CIT, PIT, VAT';
    services[1].querySelectorAll('li')[1].textContent = 'Представительство в налоговой инспекции';
    services[1].querySelectorAll('li')[2].textContent = 'Текущие контакты с органами';
    services[1].querySelectorAll('li')[3].textContent = 'Налоговая оптимизация';

    services[2].querySelector('.card-title').textContent = 'Кадры и зарплаты';
    services[2].querySelectorAll('li')[0].textContent = 'Ведение расчетных ведомостей';
    services[2].querySelectorAll('li')[1].textContent = 'Договоры и взносы ZUS';
    services[2].querySelectorAll('li')[2].textContent = 'Кадровая документация';
    services[2].querySelectorAll('li')[3].textContent = 'Подготовка и отправка деклараций ZUS DRA';

    services[3].querySelector('.card-title').textContent = 'Для новых компаний';
    services[3].querySelectorAll('li')[0].textContent = 'Поддержка при открытии бизнеса';
    services[3].querySelectorAll('li')[1].textContent = 'Выбор оптимальной правовой формы';
    services[3].querySelectorAll('li')[2].textContent = 'Выбор наиболее выгодной налоговой формы';
    services[3].querySelectorAll('li')[3].textContent = 'Комплексные консультации на старте';

    document.querySelector('.btn-primary[onclick*="showPage(\'services\')"]').textContent = 'Посмотреть все услуги';

    // ABOUT PAGE
    document.querySelector('#about h1').textContent = 'О нас';
    document.querySelector('#about .hero p').textContent = 'Познакомьтесь с нашей историей, командой и подходом к ведению бизнеса';

    let aboutCards = document.querySelectorAll('#about .grid-3 .card');
    aboutCards[0].querySelector('.card-title').textContent = 'Наша миссия';
    aboutCards[0].querySelector('.card-content p').textContent = 'Предоставление надежной и безопасной финансовой поддержки, которая позволяет предпринимателям сосредоточиться на развитии бизнеса без забот о бухгалтерии и кадрах.';

    aboutCards[1].querySelector('.card-title').textContent = 'Наше видение';
    aboutCards[1].querySelector('.card-content p').textContent = 'Стать самым надежным бизнес-партнером для малых и средних предприятий в Польше, предлагая современные бухгалтерские и кадровые решения.';

    aboutCards[2].querySelector('.card-title').textContent = 'Наши ценности';
    aboutCards[2].querySelector('.card-content p').textContent = 'Профессионализм, надежность, конфиденциальность, пунктуальность и индивидуальный подход к каждому клиенту — основа нашей работы.';

    document.querySelector('#about .section-title').textContent = 'Почему VISTEK?';

    let aboutFeatures = document.querySelectorAll('#about .grid-2 .card');
    aboutFeatures[0].querySelector('.card-title').textContent = 'Опыт';
    aboutFeatures[0].querySelector('.card-content p').textContent = 'Многолетний опыт в бухгалтерской и кадровой сфере. Мы знаем все нюансы законодательства и постоянно повышаем квалификацию.';

    aboutFeatures[1].querySelector('.card-title').textContent = 'Безопасность';
    aboutFeatures[1].querySelector('.card-content p').textContent = 'Мы гарантируем полную конфиденциальность и безопасность ваших данных в соответствии с GDPR. Используем современные системы защиты.';

    aboutFeatures[2].querySelector('.card-title').textContent = 'Современность';
    aboutFeatures[2].querySelector('.card-content p').textContent = 'Мы используем новейшие технологии и бухгалтерское ПО, что обеспечивает скорость и точность наших услуг.';

    aboutFeatures[3].querySelector('.card-title').textContent = 'Партнёрство';
    aboutFeatures[3].querySelector('.card-content p').textContent = 'Мы не просто поставщик услуг — мы ваш бизнес-партнёр, заботящийся о развитии вашей компании.';

    // SERVICES PAGE
    document.querySelector('#services h1').textContent = 'Наши услуги';
    document.querySelector('#services .hero p').textContent = 'Комплексное бухгалтерское, кадровое и налоговое обслуживание для вашей компании';

    let servicesCards = document.querySelectorAll('#services .grid-2 .card');

    // Карточка 1
    servicesCards[0].querySelector('.card-title').textContent = 'Полное бухгалтерское обслуживание';
    servicesCards[0].querySelectorAll('li')[0].textContent = 'Ведение бухгалтерских книг для компаний';
    servicesCards[0].querySelectorAll('li')[1].textContent = 'Ежемесячное обслуживание в зависимости от количества документов';
    servicesCards[0].querySelectorAll('li')[2].textContent = 'Годовые финансовые отчёты (баланс)';
    servicesCards[0].querySelectorAll('li')[3].textContent = 'Управление бухгалтерской документацией';

    // Карточка 2
    servicesCards[1].querySelector('.card-title').textContent = 'ИП: Книга доходов и расходов';
    servicesCards[1].querySelectorAll('li')[0].textContent = 'Обслуживание индивидуальных предпринимателей';
    servicesCards[1].querySelectorAll('li')[1].textContent = 'KPiR, единый налог и учёт НДС';
    servicesCards[1].querySelectorAll('li')[2].textContent = 'Пакеты в зависимости от количества документов';
    servicesCards[1].querySelectorAll('li')[3].textContent = 'Оптимизация формы налогообложения';

    // Карточка 3
    servicesCards[2].querySelector('.card-title').textContent = 'Кадры и зарплаты';
    servicesCards[2].querySelectorAll('li')[0].textContent = 'Расчёт сотрудников (начисление заработной платы)';
    servicesCards[2].querySelectorAll('li')[1].textContent = 'Регистрация в ZUS (приём, увольнение)';
    servicesCards[2].querySelectorAll('li')[2].textContent = 'Ведение кадровой документации';
    servicesCards[2].querySelectorAll('li')[3].textContent = 'Подготовка деклараций ZUS';

    // Карточка 4
    servicesCards[3].querySelector('.card-title').textContent = 'Регистрация компаний и стартапов';
    servicesCards[3].querySelectorAll('li')[0].textContent = 'Регистрация ООО и ИП';
    servicesCards[3].querySelectorAll('li')[1].textContent = 'Изменения в KRS и обновление данных NIP-8';
    servicesCards[3].querySelectorAll('li')[2].textContent = 'Юридические и бухгалтерские консультации для новых компаний';
    servicesCards[3].querySelectorAll('li')[3].textContent = 'Выбор оптимальной правовой формы';

    // Карточка 5
    servicesCards[4].querySelector('.card-title').textContent = 'Дополнительные услуги';
    servicesCards[4].querySelectorAll('li')[0].textContent = 'Регистрация VAT-R, VAT-UE, CRBR';
    servicesCards[4].querySelectorAll('li')[1].textContent = 'Составление и корректировка деклараций (PIT, CIT, VAT)';
    servicesCards[4].querySelectorAll('li')[2].textContent = 'Справки из налоговой и ZUS';
    servicesCards[4].querySelectorAll('li')[3].textContent = 'Восстановление бухгалтерии';

    // Карточка 6
    servicesCards[5].querySelector('.card-title').textContent = 'Налоговое консультирование';
    servicesCards[5].querySelectorAll('li')[0].textContent = 'Налоговая оптимизация';
    servicesCards[5].querySelectorAll('li')[1].textContent = 'Представительство перед органами';
    servicesCards[5].querySelectorAll('li')[2].textContent = 'Анализ налогового законодательства';
    servicesCards[5].querySelectorAll('li')[3].textContent = 'Поддержка при налоговых проверках';

    document.querySelector('#services .btn-primary[onclick*="showPage(\'pricing\')"]').textContent = 'Посмотреть цены';
    document.querySelector('#services .btn-primary[onclick*="showPage(\'contact\')"]').textContent = 'Связаться с нами';

    // PRICING PAGE
    document.querySelector('#pricing h1').textContent = 'Цены на бухгалтерские услуги';
    document.querySelector('#pricing .hero p').textContent = 'Прозрачные цены и комплексное бухгалтерское обслуживание для вашей компании';
    document.querySelector('#pricing .hero small').textContent = 'Сумма не облагается НДС';


    // PRICING PAGE - табы
    let pricingTabs = document.querySelectorAll('#pricing .pricing-tabs .tab-button');
    pricingTabs[0].textContent = 'Основные услуги';
    pricingTabs[1].textContent = 'Дополнительные услуги';
    pricingTabs[2].textContent = 'Калькулятор';

    // PRICING PAGE - Główne Usługi (Основные услуги)
    document.querySelector('#main-services .service-package:nth-child(1) h3').textContent = '📊 Ведение бухгалтерских книг';
    document.querySelector('#main-services .service-package:nth-child(1) .description').textContent = 'Для обществ с ограниченной ответственностью';

    let fullAccTiers = document.querySelectorAll('#main-services .service-package:nth-child(1) .tier');
    fullAccTiers[0].querySelector('.tier-name').textContent = 'Без активности';
    fullAccTiers[0].querySelector('.tier-range').textContent = 'Нет документов';
    fullAccTiers[0].querySelector('.tier-price').textContent = '400 зл/мес.';

    fullAccTiers[1].querySelector('.tier-name').textContent = 'Пакет Мини';
    fullAccTiers[1].querySelector('.tier-range').textContent = 'До 20 документов';
    fullAccTiers[1].querySelector('.tier-price').textContent = '700 зл/мес.';

    fullAccTiers[2].querySelector('.tier-name').textContent = 'Пакет Миди';
    fullAccTiers[2].querySelector('.tier-range').textContent = '21-50 документов';
    fullAccTiers[2].querySelector('.tier-price').textContent = '1 000 зл/мес.';

    fullAccTiers[3].querySelector('.tier-name').textContent = 'Пакет Макси';
    fullAccTiers[3].querySelector('.tier-range').textContent = '51-100 документов';
    fullAccTiers[3].querySelector('.tier-price').textContent = '1 500 зл/мес.';

    fullAccTiers[4].querySelector('.tier-name').textContent = 'Пакет Макси Плюс';
    fullAccTiers[4].querySelector('.tier-range').textContent = 'Свыше 100 документов';
    fullAccTiers[4].querySelector('.tier-price').textContent = 'Индивидуально';

    // JDG
    document.querySelector('#main-services .service-package:nth-child(2) h3').textContent = '📋 ИП: KPiR, фиксированный налог';
    document.querySelector('#main-services .service-package:nth-child(2) .description').textContent = 'Для индивидуальных предпринимателей';

    let jdgTiers = document.querySelectorAll('#main-services .service-package:nth-child(2) .tier');
    jdgTiers[0].querySelector('.tier-name').textContent = 'Без активности';
    jdgTiers[0].querySelector('.tier-range').textContent = 'Нет документов';
    jdgTiers[0].querySelector('.tier-price').textContent = '100 зл/мес.';

    jdgTiers[1].querySelector('.tier-name').textContent = 'Пакет Мини';
    jdgTiers[1].querySelector('.tier-range').textContent = 'До 10 документов';
    jdgTiers[1].querySelector('.tier-price').textContent = '280 зл/мес.';

    jdgTiers[2].querySelector('.tier-name').textContent = 'Пакет Миди';
    jdgTiers[2].querySelector('.tier-range').textContent = '11-30 документов';
    jdgTiers[2].querySelector('.tier-price').textContent = '380 зл/мес.';

    jdgTiers[3].querySelector('.tier-name').textContent = 'Пакет Миди Плюс';
    jdgTiers[3].querySelector('.tier-range').textContent = '31-50 документов';
    jdgTiers[3].querySelector('.tier-price').textContent = '480 зл/мес.';

    jdgTiers[4].querySelector('.tier-name').textContent = 'Пакет Макси';
    jdgTiers[4].querySelector('.tier-range').textContent = '51-100 документов';
    jdgTiers[4].querySelector('.tier-price').textContent = '580 зл/мес.';

    // Kadry i płace
    document.querySelector('#main-services .service-package:nth-child(3) h3').textContent = '👥 Кадры и зарплаты';
    document.querySelector('#main-services .service-package:nth-child(3) .description').textContent = 'За 1 сотрудника';

    let hrTiers = document.querySelectorAll('#main-services .service-package:nth-child(3) .tier');
    hrTiers[0].querySelector('.tier-name').textContent = 'Расчет сотрудника';
    hrTiers[0].querySelector('.tier-range').textContent = 'Кадровое и зарплатное обслуживание';
    hrTiers[0].querySelector('.tier-price').textContent = '80 зл/мес.';

    hrTiers[1].querySelector('.tier-name').textContent = 'Регистрация в ZUS';
    hrTiers[1].querySelector('.tier-range').textContent = 'Прием/увольнение';
    hrTiers[1].querySelector('.tier-price').textContent = '80 зл';

    hrTiers[2].querySelector('.tier-name').textContent = 'Кадровые документы';
    hrTiers[2].querySelector('.tier-range').textContent = 'По запросу';
    hrTiers[2].querySelector('.tier-price').textContent = '50-100 зл/шт.';

    // ADDITIONAL SERVICES (Таблица)
    document.querySelector('#additional .card-title').textContent = '🛠️ Дополнительные услуги';

    let tableHeaders = document.querySelectorAll('#additional table thead th');
    tableHeaders[0].textContent = 'Услуга';
    tableHeaders[1].textContent = 'Описание';
    tableHeaders[2].textContent = 'Цена';

    // CONTACT PAGE
    document.querySelector('#contact h1').textContent = 'Контакт';
    document.querySelector('#contact .hero p').textContent = 'Мы готовы к сотрудничеству с вами. С радостью ответим на все вопросы.';

    document.querySelectorAll('#contact .card-title')[0].textContent = 'Прямой контакт';
    document.querySelectorAll('#contact .card-content p')[2].textContent = 'С радостью ответим на все ваши вопросы.';

    document.querySelectorAll('#contact .card-title')[1].textContent = 'Данные компании';
    document.querySelectorAll('#contact .card-content')[1].querySelector('p:nth-child(5)').textContent = 'Общество с ограниченной ответственностью, внесенное в Национальный судебный реестр.';

    // CONTACT FORM
    document.querySelector('.form-title').textContent = 'Напишите нам';
    document.querySelector('.form-subtitle').textContent = 'Ответим в течение 24 часов';

    document.querySelectorAll('.form-label')[0].innerHTML = 'Имя <span class="required">*</span>';
    document.querySelector('#firstName').placeholder = 'Ваше имя';

    document.querySelectorAll('.form-label')[1].innerHTML = 'Фамилия <span class="required">*</span>';
    document.querySelector('#lastName').placeholder = 'Ваша фамилия';

    document.querySelectorAll('.form-label')[2].innerHTML = 'Email <span class="required">*</span>';
    document.querySelector('#email').placeholder = 'пример@email.com';

    document.querySelectorAll('.form-label')[3].textContent = 'Телефон';
    document.querySelector('#phone').placeholder = '+48 123 456 789';

    document.querySelectorAll('.form-label')[4].innerHTML = 'Тема запроса <span class="required">*</span>';
    let subjectOptions = document.querySelectorAll('#subject option');
    subjectOptions[0].textContent = 'Выберите тему';
    subjectOptions[1].textContent = 'Бухгалтерские услуги';
    subjectOptions[2].textContent = 'Кадры и зарплаты';
    subjectOptions[3].textContent = 'Регистрация компании';
    subjectOptions[4].textContent = 'Налоговое консультирование';
    subjectOptions[5].textContent = 'Вопросы о ценах';
    subjectOptions[6].textContent = 'Другое';

    document.querySelectorAll('.form-label')[5].innerHTML = 'Сообщение <span class="required">*</span>';
    document.querySelector('#message').placeholder = 'Подробно опишите свой вопрос или потребности...';

    document.querySelector('.checkbox-label').innerHTML = '<span class="required">*</span> Соглашаюсь на обработку моих персональных данных в соответствии с политикой конфиденциальности';

    document.querySelector('.submit-btn').textContent = 'Отправить сообщение';

    // FOOTER
    document.querySelectorAll('footer h3')[0].textContent = 'VISTEK SP. Z O.O.';
    document.querySelectorAll('footer p')[0].textContent = 'Ваше современное бухгалтерское бюро';
    document.querySelectorAll('footer p')[1].textContent = 'Профессиональное бухгалтерское, кадровое и налоговое обслуживание для компаний по всей Польше.';

    document.querySelectorAll('footer h3')[1].textContent = 'Наши услуги';
    let footerServices = document.querySelectorAll('footer .footer-section:nth-child(2) li');
    footerServices[0].querySelector('a').textContent = 'Полная бухгалтерия';
    footerServices[1].querySelector('a').textContent = 'Кадры и зарплаты';
    footerServices[2].querySelector('a').textContent = 'Налоговое обслуживание';
    footerServices[3].querySelector('a').textContent = 'Регистрация компаний';
    footerServices[4].querySelector('a').textContent = 'Прайс-лист услуг';
    footerServices[5].querySelector('a').textContent = 'ИП: Книга доходов и расходов';

    document.querySelectorAll('footer h3')[2].textContent = 'Контакт';

    document.querySelectorAll('footer h3')[3].textContent = 'Юридическая информация';
    document.querySelectorAll('footer p')[4].textContent = 'Общество с ограниченной ответственностью, внесенное в Национальный судебный реестр.';

    document.querySelector('.footer-bottom p').textContent = '© 2025 VISTEK SP. Z O.O. Все права защищены.';

    // COOKIE BANNER
    document.querySelector('#cookie-banner h2').textContent = 'Мы заботимся о ваших cookie 🍪';
    document.querySelector('#cookie-banner p').innerHTML = 'Наш сайт использует файлы cookie для улучшения качества услуг и пользовательского опыта. Нажимая «Принять», вы соглашаетесь на их использование в соответствии с <a href="https://www.freeprivacypolicy.com/live/01aecf20-b227-46f7-b3c9-138a34f74b7d">Политикой cookies</a>.';
    document.querySelector('#decline-cookies').textContent = 'Отклонить';
    document.querySelector('#accept-cookies').textContent = 'Принять';
}

function translateToPolish() {

    // Навигация
    document.querySelector('.nav-link.active').textContent = 'Strona Główna';
    document.querySelectorAll('.nav-link')[1].textContent = 'O nas';
    document.querySelectorAll('.nav-link')[2].textContent = 'Usługi';
    document.querySelectorAll('.nav-link')[3].textContent = 'Cennik';
    document.querySelectorAll('.nav-link')[4].textContent = 'Kontakt';

    // Hero section
    document.querySelector('.hero p').textContent = 'Twoje nowoczesne i niezawodne biuro rachunkowe. Profesjonalizm i indywidualne podejście do każdego klienta.';
    document.querySelector('.hero-cta .btn-primary').textContent = 'Skontaktuj się z nami';
    document.querySelector('.hero-cta .btn-outline').textContent = 'Zobacz cennik';

    // Oferta specjalna
    document.querySelector('.section h3').textContent = 'Oferta specjalna';
    document.querySelectorAll('.grid-2 h4')[0].textContent = 'Rejestracja spółek';
    document.querySelectorAll('.grid-2 p')[0].textContent = 'Sp. z o.o.';
    document.querySelectorAll('.grid-2 p')[1].textContent = 'Przy wyborze stałej obsługi księgowej';

    document.querySelectorAll('.grid-2 h4')[1].textContent = 'Zmiany w KRS';
    document.querySelectorAll('.grid-2 p')[2].textContent = 'Dla stałych klientów';
    document.querySelectorAll('.grid-2 p')[3].textContent = 'Z abonamentem na obsługę księgową';

    // Values
    document.querySelector('.section-title').textContent = 'Wartości, które nas prowadzą';
    document.querySelector('.section-subtitle').textContent = 'Profesjonalne wsparcie finansowe, które pozwala przedsiębiorcom skoncentrować się na rozwoju firmy';

    let values = document.querySelectorAll('.grid-3 .card');
    values[0].querySelector('.card-title').textContent = 'Profesjonalizm';
    values[0].querySelector('.card-content p').textContent = 'Najwyższe standardy branżowe i etyka zawodowa w każdym aspekcie naszej pracy.';

    values[1].querySelector('.card-title').textContent = 'Zgodność z przepisami';
    values[1].querySelector('.card-content p').textContent = 'Stale aktualizowana wiedza o zmianach w prawie i regulacjach podatkowych.';

    values[2].querySelector('.card-title').textContent = 'Bezpieczeństwo danych';
    values[2].querySelector('.card-content p').textContent = 'Pełna poufność i ochrona danych zgodna z RODO i najwyższymi standardami.';

    values[3].querySelector('.card-title').textContent = 'Terminowość';
    values[3].querySelector('.card-content p').textContent = 'Precyzja i punktualność w realizacji wszystkich zobowiązań.';

    values[4].querySelector('.card-title').textContent = 'Indywidualne podejście';
    values[4].querySelector('.card-content p').textContent = 'Elastyczne rozwiązania dostosowane do specyfiki każdego klienta.';

    values[5].querySelector('.card-title').textContent = 'Obsługa w całej Polsce';
    values[5].querySelector('.card-content p').textContent = 'Nowoczesne narzędzia umożliwiają wygodną współpracę bez względu na lokalizację.';

    // Services
    document.querySelectorAll('.section-title')[1].textContent = 'Kompleksowy zakres usług';
    document.querySelectorAll('.section-subtitle')[1].textContent = 'Pełen wachlarz rozwiązań dostosowanych do potrzeb Twojej firmy';

    let services = document.querySelectorAll('.grid-2 .card');
    services[0].querySelector('.card-title').textContent = 'Usługi księgowe';
    services[0].querySelectorAll('li')[0].textContent = 'Prowadzenie pełnej księgowości';
    services[0].querySelectorAll('li')[1].textContent = 'Księga Przychodów i Rozchodów (KPiR)';
    services[0].querySelectorAll('li')[2].textContent = 'Rozliczenia ryczałtu ewidencjonowanego';
    services[0].querySelectorAll('li')[3].textContent = 'Roczne sprawozdania finansowe';

    services[1].querySelector('.card-title').textContent = 'Podatki';
    services[1].querySelectorAll('li')[0].textContent = 'Przygotowywanie deklaracji CIT, PIT, VAT';
    services[1].querySelectorAll('li')[1].textContent = 'Reprezentacja przed Urzędem Skarbowym';
    services[1].querySelectorAll('li')[2].textContent = 'Bieżący kontakt z urzędami';
    services[1].querySelectorAll('li')[3].textContent = 'Optymalizacja podatkowa';

    services[2].querySelector('.card-title').textContent = 'Kadry i płace';
    services[2].querySelectorAll('li')[0].textContent = 'Obsługa list płac';
    services[2].querySelectorAll('li')[1].textContent = 'Umowy i składki ZUS';
    services[2].querySelectorAll('li')[2].textContent = 'Dokumentacja kadrowa';
    services[2].querySelectorAll('li')[3].textContent = 'Przygotowanie i wysyłka deklaracji ZUS DRA';

    services[3].querySelector('.card-title').textContent = 'Dla nowych firm';
    services[3].querySelectorAll('li')[0].textContent = 'Wsparcie w zakładaniu działalności';
    services[3].querySelectorAll('li')[1].textContent = 'Dobór optymalnej formy prawnej';
    services[3].querySelectorAll('li')[2].textContent = 'Wybór najkorzystniejszej formy podatkowej';
    services[3].querySelectorAll('li')[3].textContent = 'Kompleksowe doradztwo na start';

    document.querySelector('.btn-primary[onclick*="showPage(\'services\')"]').textContent = 'Zobacz wszystkie usługi';



    // ABOUT PAGE
    document.querySelector('#about h1').textContent = 'O nas';
    document.querySelector('#about .hero p').textContent = 'Poznaj naszą historię, zespół i podejście do prowadzenia biznesu';

    let aboutCards = document.querySelectorAll('#about .grid-3 .card');
    aboutCards[0].querySelector('.card-title').textContent = 'Nasza misja';
    aboutCards[0].querySelector('.card-content p').textContent = 'Dostarczanie rzetelnego i bezpiecznego wsparcia finansowego, które pozwala przedsiębiorcom skoncentrować się na rozwoju swojej firmy bez obaw o kwestie księgowe i kadrowe.';

    aboutCards[1].querySelector('.card-title').textContent = 'Nasza wizja';
    aboutCards[1].querySelector('.card-content p').textContent = 'Być najbardziej zaufanym partnerem biznesowym dla małych i średnich przedsiębiorstw w Polsce, oferując nowoczesne rozwiązania księgowe i kadrowe.';

    aboutCards[2].querySelector('.card-title').textContent = 'Nasze wartości';
    aboutCards[2].querySelector('.card-content p').textContent = 'Profesjonalizm, rzetelność, dyskrecja, terminowość oraz indywidualne podejście do każdego klienta to podstawa naszego działania.';

    document.querySelector('#about .section-title').textContent = 'Dlaczego VISTEK?';

    let aboutFeatures = document.querySelectorAll('#about .grid-2 .card');
    aboutFeatures[0].querySelector('.card-title').textContent = 'Doświadczenie';
    aboutFeatures[0].querySelector('.card-content p').textContent = 'Wieloletnie doświadczenie w branży księgowej i kadrowej. Znamy wszystkie zawiłości przepisów i regularnie podnosimy swoje kwalifikacje.';

    aboutFeatures[1].querySelector('.card-title').textContent = 'Bezpieczeństwo';
    aboutFeatures[1].querySelector('.card-content p').textContent = 'Gwarantujemy pełną poufność i bezpieczeństwo Twoich danych zgodnie z RODO. Używamy nowoczesnych systemów zabezpieczeń.';

    aboutFeatures[2].querySelector('.card-title').textContent = 'Nowoczesność';
    aboutFeatures[2].querySelector('.card-content p').textContent = 'Wykorzystujemy najnowsze technologie i oprogramowanie księgowe, co przekłada się na szybkość i precyzję naszych usług.';

    aboutFeatures[3].querySelector('.card-title').textContent = 'Partnerstwo';
    aboutFeatures[3].querySelector('.card-content p').textContent = 'Nie jesteśmy tylko dostawcą usług - jesteśmy Twoim partnerem biznesowym, który dba o rozwój Twojej firmy.';



    // SERVICES PAGE
    document.querySelector('#services h1').textContent = 'Nasze usługi';
    document.querySelector('#services .hero p').textContent = 'Kompleksowa obsługa księgowa, kadrowa i podatkowa dla Twojej firmy';

    let servicesCards = document.querySelectorAll('#services .grid-2 .card');

    // Карточка 1
    servicesCards[0].querySelector('.card-title').textContent = 'Pełna księgowość';
    servicesCards[0].querySelectorAll('li')[0].textContent = 'Prowadzenie ksiąg rachunkowych dla spółek';
    servicesCards[0].querySelectorAll('li')[1].textContent = 'Obsługa miesięczna według liczby dokumentów';
    servicesCards[0].querySelectorAll('li')[2].textContent = 'Roczne sprawozdania finansowe (bilans)';
    servicesCards[0].querySelectorAll('li')[3].textContent = 'Zarządzanie dokumentacją księgową';

    // Карточка 2
    servicesCards[1].querySelector('.card-title').textContent = 'JDG: Księga przychodów i rozchodów';
    servicesCards[1].querySelectorAll('li')[0].textContent = 'Obsługa jednoosobowych działalności gospodarczych';
    servicesCards[1].querySelectorAll('li')[1].textContent = 'KPiR, ryczałt i ewidencje VAT';
    servicesCards[1].querySelectorAll('li')[2].textContent = 'Pakiety według liczby dokumentów';
    servicesCards[1].querySelectorAll('li')[3].textContent = 'Optymalizacja formy opodatkowania';

    // Карточка 3
    servicesCards[2].querySelector('.card-title').textContent = 'Kadry i płace';
    servicesCards[2].querySelectorAll('li')[0].textContent = 'Rozliczanie pracowników (naliczanie wynagrodzeń)';
    servicesCards[2].querySelectorAll('li')[1].textContent = 'Zgłoszenia do ZUS (przyjęcie, zwolnienie)';
    servicesCards[2].querySelectorAll('li')[2].textContent = 'Obsługa dokumentacji kadrowej';
    servicesCards[2].querySelectorAll('li')[3].textContent = 'Przygotowanie deklaracji ZUS';

    // Карточка 4
    servicesCards[3].querySelector('.card-title').textContent = 'Rejestracja firm i start-upy';
    servicesCards[3].querySelectorAll('li')[0].textContent = 'Rejestracja spółek z o.o. i JDG';
    servicesCards[3].querySelectorAll('li')[1].textContent = 'Zmiany w KRS i aktualizacja danych NIP-8';
    servicesCards[3].querySelectorAll('li')[2].textContent = 'Konsultacje prawno-księgowe dla nowych firm';
    servicesCards[3].querySelectorAll('li')[3].textContent = 'Dobór optymalnej formy prawnej';

    // Карточка 5
    servicesCards[4].querySelector('.card-title').textContent = 'Dodatkowe usługi';
    servicesCards[4].querySelectorAll('li')[0].textContent = 'Rejestracja VAT-R, VAT-UE, CRBR';
    servicesCards[4].querySelectorAll('li')[1].textContent = 'Sporządzanie i korekta deklaracji (PIT, CIT, VAT)';
    servicesCards[4].querySelectorAll('li')[2].textContent = 'Zaświadczenia z US i ZUS';
    servicesCards[4].querySelectorAll('li')[3].textContent = 'Przywrócenie księgowości';

    // Карточка 6
    servicesCards[5].querySelector('.card-title').textContent = 'Doradztwo podatkowe';
    servicesCards[5].querySelectorAll('li')[0].textContent = 'Optymalizacja podatkowa';
    servicesCards[5].querySelectorAll('li')[1].textContent = 'Reprezentacja przed urzędami';
    servicesCards[5].querySelectorAll('li')[2].textContent = 'Analiza przepisów podatkowych';
    servicesCards[5].querySelectorAll('li')[3].textContent = 'Wsparcie w kontrolach skarbowych';

    document.querySelector('#services .btn-primary[onclick*="showPage(\'pricing\')"]').textContent = 'Zobacz cennik';
    document.querySelector('#services .btn-primary[onclick*="showPage(\'contact\')"]').textContent = 'Skontaktuj się';



    // PRICING PAGE
    document.querySelector('#pricing h1').textContent = 'Cennik usług księgowych';
    document.querySelector('#pricing .hero p').textContent = 'Przejrzyste ceny i kompleksowa obsługa księgowa dla Twojej firmy';
    document.querySelector('#pricing .hero small').textContent = 'Kwota nie podlega opodatkowaniu podatkiem VAT';

    let pricingTabs = document.querySelectorAll('#pricing .pricing-tabs .tab-button');
    pricingTabs[0].textContent = 'Główne Usługi';
    pricingTabs[1].textContent = 'Usługi Dodatkowe';
    pricingTabs[2].textContent = 'Kalkulator';


// PRICING PAGE - Główne Usługi
    document.querySelector('#main-services .service-package:nth-child(1) h3').textContent = '📊 Prowadzenie ksiąg rachunkowych';
    document.querySelector('#main-services .service-package:nth-child(1) .description').textContent = 'Dla spółek z o.o.';

    let fullAccTiers = document.querySelectorAll('#main-services .service-package:nth-child(1) .tier');
    fullAccTiers[0].querySelector('.tier-name').textContent = 'Brak aktywności';
    fullAccTiers[0].querySelector('.tier-range').textContent = 'Brak dokumentów';
    fullAccTiers[0].querySelector('.tier-price').textContent = '400 zł/mies.';

    fullAccTiers[1].querySelector('.tier-name').textContent = 'Pakiet Mini';
    fullAccTiers[1].querySelector('.tier-range').textContent = 'Do 20 dokumentów';
    fullAccTiers[1].querySelector('.tier-price').textContent = '700 zł/mies.';

    fullAccTiers[2].querySelector('.tier-name').textContent = 'Pakiet Midi';
    fullAccTiers[2].querySelector('.tier-range').textContent = '21–50 dokumentów';
    fullAccTiers[2].querySelector('.tier-price').textContent = '1 000 zł/mies.';

    fullAccTiers[3].querySelector('.tier-name').textContent = 'Pakiet Maxi';
    fullAccTiers[3].querySelector('.tier-range').textContent = '51–100 dokumentów';
    fullAccTiers[3].querySelector('.tier-price').textContent = '1 500 zł/mies.';

    fullAccTiers[4].querySelector('.tier-name').textContent = 'Pakiet Maxi Plus';
    fullAccTiers[4].querySelector('.tier-range').textContent = 'Powyżej 100 dokumentów';
    fullAccTiers[4].querySelector('.tier-price').textContent = 'Indywidualnie';

// JDG
    document.querySelector('#main-services .service-package:nth-child(2) h3').textContent = '📋 JDG: KPiR, podatek ryczałtowy';
    document.querySelector('#main-services .service-package:nth-child(2) .description').textContent = 'Dla jednoosobowych działalności gospodarczych';

    let jdgTiers = document.querySelectorAll('#main-services .service-package:nth-child(2) .tier');
    jdgTiers[0].querySelector('.tier-name').textContent = 'Brak aktywności';
    jdgTiers[0].querySelector('.tier-range').textContent = 'Brak dokumentów';
    jdgTiers[0].querySelector('.tier-price').textContent = '100 zł/mies.';

    jdgTiers[1].querySelector('.tier-name').textContent = 'Pakiet Mini';
    jdgTiers[1].querySelector('.tier-range').textContent = 'Do 10 dokumentów';
    jdgTiers[1].querySelector('.tier-price').textContent = '280 zł/mies.';

    jdgTiers[2].querySelector('.tier-name').textContent = 'Pakiet Midi';
    jdgTiers[2].querySelector('.tier-range').textContent = '11–30 dokumentów';
    jdgTiers[2].querySelector('.tier-price').textContent = '380 zł/mies.';

    jdgTiers[3].querySelector('.tier-name').textContent = 'Pakiet Midi Plus';
    jdgTiers[3].querySelector('.tier-range').textContent = '31–50 dokumentów';
    jdgTiers[3].querySelector('.tier-price').textContent = '480 zł/mies.';

    jdgTiers[4].querySelector('.tier-name').textContent = 'Pakiet Maxi';
    jdgTiers[4].querySelector('.tier-range').textContent = '51–100 dokumentów';
    jdgTiers[4].querySelector('.tier-price').textContent = '580 zł/mies.';

// Kadry i płace
    document.querySelector('#main-services .service-package:nth-child(3) h3').textContent = '👥 Kadry i płace';
    document.querySelector('#main-services .service-package:nth-child(3) .description').textContent = 'Za 1 pracownika';

    let hrTiers = document.querySelectorAll('#main-services .service-package:nth-child(3) .tier');
    hrTiers[0].querySelector('.tier-name').textContent = 'Obsługa pracownika';
    hrTiers[0].querySelector('.tier-range').textContent = 'Obsługa kadrowo-płacowa';
    hrTiers[0].querySelector('.tier-price').textContent = '80 zł/mies.';

    hrTiers[1].querySelector('.tier-name').textContent = 'Rejestracja w ZUS';
    hrTiers[1].querySelector('.tier-range').textContent = 'Zatrudnienie/zwolnienie';
    hrTiers[1].querySelector('.tier-price').textContent = '80 zł';

    hrTiers[2].querySelector('.tier-name').textContent = 'Dokumenty kadrowe';
    hrTiers[2].querySelector('.tier-range').textContent = 'Na życzenie';
    hrTiers[2].querySelector('.tier-price').textContent = '50–100 zł/szt.';

// USŁUGI DODATKOWE (tabela)
    document.querySelector('#additional .card-title').textContent = '🛠️ Usługi dodatkowe';

    let tableHeaders = document.querySelectorAll('#additional table thead th');
    tableHeaders[0].textContent = 'Usługa';
    tableHeaders[1].textContent = 'Opis';
    tableHeaders[2].textContent = 'Cena';

// STRONA KONTAKT
    document.querySelector('#contact h1').textContent = 'Kontakt';
    document.querySelector('#contact .hero p').textContent = 'Jesteśmy gotowi do współpracy. Z przyjemnością odpowiemy na wszystkie pytania.';

    document.querySelectorAll('#contact .card-title')[0].textContent = 'Kontakt bezpośredni';
    document.querySelectorAll('#contact .card-content p')[2].textContent = 'Z przyjemnością odpowiemy na wszystkie pytania.';

    document.querySelectorAll('#contact .card-title')[1].textContent = 'Dane firmy';
    document.querySelectorAll('#contact .card-content')[1].querySelector('p:nth-child(5)').textContent = 'Spółka z ograniczoną odpowiedzialnością wpisana do Krajowego Rejestru Sądowego.';

// FORMULARZ KONTAKTOWY
    document.querySelector('.form-title').textContent = 'Napisz do nas';
    document.querySelector('.form-subtitle').textContent = 'Odpowiemy w ciągu 24 godzin';

    document.querySelectorAll('.form-label')[0].innerHTML = 'Imię <span class="required">*</span>';
    document.querySelector('#firstName').placeholder = 'Twoje imię';

    document.querySelectorAll('.form-label')[1].innerHTML = 'Nazwisko <span class="required">*</span>';
    document.querySelector('#lastName').placeholder = 'Twoje nazwisko';

    document.querySelectorAll('.form-label')[2].innerHTML = 'Email <span class="required">*</span>';
    document.querySelector('#email').placeholder = 'przyklad@email.com';

    document.querySelectorAll('.form-label')[3].textContent = 'Telefon';
    document.querySelector('#phone').placeholder = '+48 123 456 789';

    document.querySelectorAll('.form-label')[4].innerHTML = 'Temat zapytania <span class="required">*</span>';
    let subjectOptions = document.querySelectorAll('#subject option');
    subjectOptions[0].textContent = 'Wybierz temat';
    subjectOptions[1].textContent = 'Usługi księgowe';
    subjectOptions[2].textContent = 'Kadry i płace';
    subjectOptions[3].textContent = 'Rejestracja spółki';
    subjectOptions[4].textContent = 'Doradztwo podatkowe';
    subjectOptions[5].textContent = 'Pytania o ceny';
    subjectOptions[6].textContent = 'Inne';

    document.querySelectorAll('.form-label')[5].innerHTML = 'Wiadomość <span class="required">*</span>';
    document.querySelector('#message').placeholder = 'Opisz szczegółowo swoje pytanie lub potrzeby...';

    document.querySelector('.checkbox-label').innerHTML = '<span class="required">*</span> Wyrażam zgodę na przetwarzanie moich danych osobowych zgodnie z polityką prywatności';

    document.querySelector('.submit-btn').textContent = 'Wyślij wiadomość';

// STOPKA
    document.querySelectorAll('footer h3')[0].textContent = 'VISTEK SP. Z O.O.';
    document.querySelectorAll('footer p')[0].textContent = 'Twoje nowoczesne biuro rachunkowe';
    document.querySelectorAll('footer p')[1].textContent = 'Profesjonalna obsługa księgowa, kadrowa i podatkowa dla firm w całej Polsce.';

    document.querySelectorAll('footer h3')[1].textContent = 'Nasze usługi';
    let footerServices = document.querySelectorAll('footer .footer-section:nth-child(2) li');
    footerServices[0].querySelector('a').textContent = 'Pełna księgowość';
    footerServices[1].querySelector('a').textContent = 'Kadry i płace';
    footerServices[2].querySelector('a').textContent = 'Obsługa podatkowa';
    footerServices[3].querySelector('a').textContent = 'Rejestracja spółek';
    footerServices[4].querySelector('a').textContent = 'Cennik usług';
    footerServices[5].querySelector('a').textContent = 'JDG: Księga przychodów i rozchodów';

    document.querySelectorAll('footer h3')[2].textContent = 'Kontakt';

    document.querySelectorAll('footer h3')[3].textContent = 'Informacje prawne';
    document.querySelectorAll('footer p')[4].textContent = 'Spółka z ograniczoną odpowiedzialnością wpisana do Krajowego Rejestru Sądowego.';

    document.querySelector('.footer-bottom p').textContent = '© 2025 VISTEK SP. Z O.O. Wszelkie prawa zastrzeżone.';

// BANER COOKIE
    document.querySelector('#cookie-banner h2').textContent = 'Dbamy o Twoje cookie 🍪';
    document.querySelector('#cookie-banner p').innerHTML = 'Nasz serwis korzysta z plików cookie w celu poprawy jakości usług i doświadczenia użytkownika. Klikając „Akceptuję”, wyrażasz zgodę na ich użycie zgodnie z <a href="https://www.freeprivacypolicy.com/live/01aecf20-b227-46f7-b3c9-138a34f74b7d">Polityką cookies</a>.';
    document.querySelector('#decline-cookies').textContent = 'Odrzuć';
    document.querySelector('#accept-cookies').textContent = 'Akceptuję';

}

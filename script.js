// Обратный отсчет до свадьбы
function updateCountdown() {
    const weddingDate = new Date('October 18, 2025 12:00:00').getTime();
    const now = new Date().getTime();
    const distance = weddingDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerHTML = `
        <p>До нашего особенного дня осталось:</p>
        <p>${days} дней ${hours} часов ${minutes} минут ${seconds} секунд</p>
    `;

    if (distance < 0) {
        clearInterval(countdownTimer);
        document.getElementById("countdown").innerHTML = "Праздник уже начался!";
    }
}

// Запускаем обратный отсчет
let countdownTimer = setInterval(updateCountdown, 1000);
updateCountdown();

// Обработка формы RSVP
document.getElementById('rsvp-form').addEventListener('submit', function(event) {
    // Форма будет отправляться через Formspree
    // Показываем сообщение об успехе
    document.getElementById('form-success').style.display = 'block';
    
    // Скрываем сообщение через 5 секунд
    setTimeout(() => {
        document.getElementById('form-success').style.display = 'none';
    }, 5000);
});

// Создаем анимацию падающих оранжевых листьев
function createLeaves() {
    const leavesContainer = document.querySelector('.leaves-container');
    const leafTypes = [
        "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23E67E22' opacity='0.6'%3E%3Cpath d='M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z'/%3E%3C/svg%3E",
        "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23D35400' opacity='0.5'%3E%3Cpath d='M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z'/%3E%3C/svg%3E",
        "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23C86B39' opacity='0.7'%3E%3Cpath d='M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z'/%3E%3C/svg%3E"
    ];
    
    for (let i = 0; i < 25; i++) {
        const leaf = document.createElement('div');
        leaf.classList.add('leaf');
        leaf.style.left = `${Math.random() * 100}%`;
        leaf.style.width = `${Math.random() * 30 + 20}px`;
        leaf.style.height = `${Math.random() * 30 + 20}px`;
        leaf.style.backgroundImage = leafTypes[Math.floor(Math.random() * leafTypes.length)];
        leaf.style.opacity = `${Math.random() * 0.4 + 0.3}`;
        leaf.style.animationDuration = `${Math.random() * 10 + 8}s`;
        leaf.style.animationDelay = `${Math.random() * 5}s`;
        leavesContainer.appendChild(leaf);
    }
}

createLeaves();

// Добавляем плавную прокрутку для якорных ссылок
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

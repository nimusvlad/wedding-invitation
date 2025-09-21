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

// Создаем анимацию падающих листьев
function createLeaves() {
    const leavesContainer = document.querySelector('.leaves-container');
    const leafSymbols = ['🍂', '🍁'];
    
    for (let i = 0; i < 30; i++) {
        const leaf = document.createElement('div');
        leaf.classList.add('leaf');
        leaf.style.left = `${Math.random() * 100}%`;
        leaf.style.fontSize = `${Math.random() * 20 + 15}px`;
        leaf.style.opacity = `${Math.random() * 0.3 + 0.1}`;
        leaf.style.animationDuration = `${Math.random() * 10 + 5}s`;
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

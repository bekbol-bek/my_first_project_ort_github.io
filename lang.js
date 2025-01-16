// Переключение языков
const kgBtn = document.getElementById('kg-btn');
const ruBtn = document.getElementById('ru-btn');

const lessonTitle = document.getElementById('lesson-title');
const video1Title = document.getElementById('video1-title');
const video2Title = document.getElementById('video2-title');
const video3Title = document.getElementById('video3-title');
const video4Title = document.getElementById('video4-title');

kgBtn.addEventListener('click', () => {
    kgBtn.classList.add('active');
    ruBtn.classList.remove('active');
    
    // Меняем текст на киргизский
    lessonTitle.textContent = 'Видео сабактар';
    video1Title.textContent = '1-Сабак';
    video2Title.textContent = '2-Сабак';
    video3Title.textContent = '3-Сабак';
    video4Title.textContent = '4-Сабак';
});

ruBtn.addEventListener('click', () => {
    ruBtn.classList.add('active');
    kgBtn.classList.remove('active');
    
    // Меняем текст на русский
    lessonTitle.textContent = 'Видеоуроки';
    video1Title.textContent = '1-Урок';
    video2Title.textContent = '2-Урок';
    video3Title.textContent = '3-Урок';
    video4Title.textContent = '4-Урок';
});

// Устанавливаем активный язык при загрузке страницы
kgBtn.classList.add('active');

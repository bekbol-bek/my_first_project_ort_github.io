// Функция для переключения секций
function toggleSection(id) {
    const section = document.getElementById(id);
    section.classList.toggle('hidden');
    section.classList.toggle('highlighted');
}

let currentQuestionIndex = 0;  // Индекс текущего вопроса
let questions = [
    {
        question: "1. колдонуу:эскируу",
        options: ["ыргытуу:кируу", "ооруу:жатуу", "зеригуу:ойноо", "ачуу:жабуу"],
        answer: "ооруу:жатуу" 
    },
    {
        question: "2. дарак:бутак",
        options: ["шаты:баскыч", "мейманкана:болмо", "шкаф:текче", "китеп:барак"],
        answer: "мейманкана:болмо" 
    },
    {
        question: "3. учак:канат",
        options: ["шайтан араба:донголок", "телефон:энергия", "камаз:жук", "от араба:от"],
        answer: "шайтан араба:донголок" 
    },
    {
        question: "4. оюн:кок бору",
        options: ["оюн:футбол", "Оюн:тенис", "оюн:топ таш", "оюн:ордо"],
        answer: "оюн:футбол" 
    },
    {
        question: "5. казан:кулак",
        options: ["эшик:тутка", "самоор:чорго", "бут кийим:боо", "шым:чонток"],
        answer: "эшик:тутка" 
    },
    // Добавьте другие вопросы сюда (всего 10)
];

let userAnswers = [];  // Массив для хранения ответов пользователя
let totalTime = 20 * 60;  // Общее время для теста в секундах (например, 5 минут)
let timerInterval; // Переменная для хранения интервала таймера
let startTime; // Время начала теста

// Таймер
function startTimer() {
    startTime = Date.now(); // Запоминаем время начала теста
    timerInterval = setInterval(function() {
        let elapsedTime = Math.floor((Date.now() - startTime) / 1000); // Время, прошедшее с начала теста
        let remainingTime = totalTime - elapsedTime; // Оставшееся время

        if (remainingTime <= 0) {
            clearInterval(timerInterval);
            alert('Время вышло!');
            showResults();
        } else {
            let minutes = Math.floor(remainingTime / 60);
            let seconds = remainingTime % 60;
            document.getElementById('timer').innerText = `Оставшееся время: ${minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
        }
    }, 1000);  // Обновление каждую секунду
}

// Функция для отображения текущего вопроса
function showQuestion() {
    let currentQuestion = questions[currentQuestionIndex];
    let questionSection = document.getElementById('questionSection');
    questionSection.innerHTML = `
        <h3>${currentQuestion.question}</h3>
        <form id="questionForm">
            ${currentQuestion.options.map((option, index) => `
                <label>
                    <input type="radio" name="answer" value="${option}">
                    ${option}
                </label><br>
            `).join('')}
        </form>
    `;

    // Показываем кнопку "Следующий вопрос"
    document.getElementById('nextQuestionBtn').style.display = 'inline-block';
}

// Кнопка "Следующий вопрос"
document.getElementById('nextQuestionBtn').addEventListener('click', function() {
    let selectedAnswer = document.querySelector('input[name="answer"]:checked')?.value;
    if (selectedAnswer) {
        userAnswers.push(selectedAnswer);
        currentQuestionIndex++;

        // Если есть еще вопросы
        if (currentQuestionIndex < questions.length) {
            showQuestion();
        } else {
            document.getElementById('finishTestBtn').style.display = 'inline-block';
            document.getElementById('nextQuestionBtn').style.display = 'none';
        }
    } else {
        alert('Пожалуйста, выберите ответ!');
    }
});

// Кнопка "Завершить тест"
document.getElementById('finishTestBtn').addEventListener('click', function() {
    showResults();
});

// Показываем результаты
function showResults() {
    let resultsList = document.getElementById('resultsList');
    let score = 0;

    // Проверяем ответы
    questions.forEach((question, index) => {
        let result = (userAnswers[index] === question.answer) ? 'Правильно' : 'Неправильно';
        resultsList.innerHTML += `
            <p>Вопрос ${index + 1}: ${result}</p>
        `;
        if (result === 'Правильно') {
            score++;
        }
    });

    resultsList.innerHTML += `<h4>Ваш результат: ${score} из ${questions.length}</h4>`;

    // Добавляем время, потраченное на тест
    let elapsedTime = Math.floor((Date.now() - startTime) / 1000); // Время, прошедшее с начала теста
    let minutes = Math.floor(elapsedTime / 60);
    let seconds = elapsedTime % 60;
    resultsList.innerHTML += `<p>Время, затраченное на тест: ${minutes}:${seconds < 10 ? '0' + seconds : seconds}</p>`;
    
    // Показываем результаты
    document.getElementById('testSection').style.display = 'none';
    document.getElementById('results').style.display = 'block';
}

// Кнопка для повторного теста
document.getElementById('restartTestBtn').addEventListener('click', function() {
    // Сбрасываем все данные
    currentQuestionIndex = 0;
    userAnswers = [];
    totalTime = 5 * 60;  // Сброс времени
    clearInterval(timerInterval); // Очищаем текущий таймер
    document.getElementById('results').style.display = 'none';
    document.getElementById('intro').style.display = 'block';
    document.getElementById('startTestBtn').style.display = 'inline-block';
});

// Кнопка для начала теста
document.getElementById('startTestBtn').addEventListener('click', function() {
    // Скрыть инструкцию и кнопку старта
    document.getElementById('intro').style.display = 'none';
    
    // Показать тест
    document.getElementById('testSection').style.display = 'block';
    
    // Начать отсчет времени
    startTimer();
    
    // Показываем первый вопрос
    showQuestion();
});


// Вставьте новую функцию здесь
function showResults() {
    let resultsList = document.getElementById('resultsList');
    let score = 0;

    // Проверяем ответы
    questions.forEach((question, index) => {
        let result = (userAnswers[index] === question.answer) ? 'Правильно' : 'Неправильно';
        resultsList.innerHTML += `
            <p>Вопрос ${index + 1}: ${result}</p>
        `;
        if (result === 'Правильно') {
            score++;
        }
    });

    // Расчет процентов и оценка
    let percentage = (score / questions.length) * 100;
    let grade;

    if (percentage >= 90) {
        grade = 'ваша оценка : 5';
    } else if (percentage >= 70) {
        grade = 'ваша оценка : 4';
    } else if (percentage >= 50) {
        grade = 'ваша оценка : 3';
    } else {
        grade = 'ваша оценка :2';
    }

    resultsList.innerHTML += `<h4>Ваш результат: ${score} из ${questions.length} (${percentage.toFixed(2)}%)</h4>`;
    resultsList.innerHTML += `<p>Ваша оценка: <strong>${grade}</strong></p>`;

    // Добавляем время, потраченное на тест
    let elapsedTime = Math.floor((Date.now() - startTime) / 1000);
    let minutes = Math.floor(elapsedTime / 60);
    let seconds = elapsedTime % 60;
    resultsList.innerHTML += `<p>Время, затраченное на тест: ${minutes}:${seconds < 10 ? '0' + seconds : seconds}</p>`;

    // Показываем результаты
    document.getElementById('testSection').style.display = 'none';
    document.getElementById('results').style.display = 'block';
}















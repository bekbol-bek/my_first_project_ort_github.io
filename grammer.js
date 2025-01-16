let currentQuestionIndex = 0; // Индекс текущего вопроса
let userAnswers = []; // Массив для хранения ответов пользователя
let questionTimeLimit = 60; // Время на один вопрос (в секундах)
let questionTimer; // Таймер для текущего вопроса
let startTime = Date.now(); // Инициализация времени начала теста

let questions = [
    
    {
        question: "1. Кайсы варианттагы сүйлөмдө тыныш белгилери туура коюлган?",
        options: ["(А) Анын огородунда түрдүү мөмө-жемиштердин : алма, алча, өрүк, алмуруттун көчөттөрү отургузулган. ", "(Б) Анын огородунда түрдүү мөмө-жемитердин ; алма, алча, өрүк, алмуруттун: көчөттөрү отургузулган.", "(В) Анын огородунда түрдүү мөмө-жемиштердин – алма, алча, өрүк, алмуруттун – көчөттөрү отургузулган.", "(Г) Анын огородунда түрдүү мөмө-жемиштердин – алма, алча, өрүк, алмуруттун, көчөттөрү отургузулган."],
        answer: "(А) Анын огородунда түрдүү мөмө-жемиштердин : алма, алча, өрүк, алмуруттун көчөттөрү отургузулган. ",
        
    },
    
    {
        question: "2.  Кайсы сүйлөмдөгү асты сызылган сөз кыймыл-аракеттин ишке ашышын тилейт?",
        options: ["(А) Айтканын аткарсам, мени тынч коёр.", "(Б) Айтканын аткарсам, ыраазы кылсам.", "(В) Айтканын аткарсам, ал да сөзүндө турат.", "(Г) Аткарсамбы, аткарбасамбы деп ойлонуп отурам."],
        answer: "(Б) Айтканын аткарсам, ыраазы кылсам." ,
        
    },
    {
        question: "3. Кайсы варианттагы асты сызылган сөз “жөнөкөй” деген мааниде колдонулган?",
        options: ["(А) Баарыңардай эле, ал да – кара жумушчунун баласы.", "(Б) Кара басып, убагында келе албай калбадымбы!..", "(В) Кара кийген аялдар кошок кошуп отурушту.", "(Г) Кара далы атка конбой, турмушка чыксаңчы."],
        answer: "(А) Баарыңардай эле, ал да – кара жумушчунун баласы." ,
        
    },
    
    {
        question: "4. Кайсы варианттагы сүйлөмдө асты сызылган сөз туура ташымалданган?",
        options: ["А) Учурдагы кырдаалдын кооптуу -лугун көпчүлүк түшүнбөй жатат.", "Б) Токтогул Сатылган - овдун чыгармачы-лыгына арналган маареке өткөрүлдү.", "В) То - онун жели көңүлүн сергитти.", "г) Г) Мындай учурда айыл башчысы А. Т. - Тилеков ишке жарачу эле"],
        answer: "А) Учурдагы кырдаалдын кооптуу -лугун көпчүлүк түшүнбөй жатат.",
        
    },
    
    {
        question: "5. Төмөндө берилген сүйлөм бөлүктөрүн кайсы варианттагы ырааттуулук боюнча жайгаштырсак, сүйлөмдү туура түзгөн болобуз?(I. баласынын бетинен сүйүп) (II. догдуруна телефон чалды да)  (III. Алманбет жумуштан келди) (IV. эртеңки бош убактысын тактады)",
    
        options: ["(А) I, III, IV, II", "(Б) II, IV, I, III", "(В) III, I, II, IV", "(Г) IV, II, I, II"],
        answer: "(В) III, I, II, IV" ,
    },

];

// Таймер для одного вопроса
function startQuestionTimer() {
    let timeLeft = questionTimeLimit;
    document.getElementById('timer').innerText = `Время на текущий вопрос:⏳: ${timeLeft}секунд`;

    questionTimer = setInterval(() => {
        timeLeft--;

        if (timeLeft <= 0) {
            clearInterval(questionTimer);
            alert('Время на вопрос истекло! Переходим к следующему.');
            userAnswers.push(null); // Добавляем "Нет ответа"
            moveToNextQuestion(); // Переходим к следующему вопросу
        } else {
            document.getElementById('timer').innerText = `Время на текущий вопрос:⏳: ${timeLeft}скеунд`;
        }
    }, 1000);
}

// Переход к следующему вопросу
function moveToNextQuestion() {
    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showResults(); // Завершаем тест
    }
}

// Отображение текущего вопроса
function showQuestion() {
    clearInterval(questionTimer); // Очищаем предыдущий таймер
    let currentQuestion = questions[currentQuestionIndex];
    let questionSection = document.getElementById('questionSection');
    let cleanedQuestionText = currentQuestion.question.replace(/\$\$\$\$/g, '_____');

    questionSection.innerHTML = `
        <h3>${cleanedQuestionText}</h3>
        <form id="questionForm">
            ${currentQuestion.options.map((option) => `
                <label>
                    <input type="radio" name="answer" value="${option}">
                    ${option}
                </label><br>
            `).join('')}
        </form>
    `;

    // Запускаем таймер на текущий вопрос
    startQuestionTimer();

    document.getElementById('nextQuestionBtn').style.display = 'inline-block';
}

// Обработка кнопки "Следующий вопрос"
document.getElementById('nextQuestionBtn').addEventListener('click', function () {
    let selectedAnswer = document.querySelector('input[name="answer"]:checked')?.value;

    if (selectedAnswer) {
        userAnswers.push(selectedAnswer); // Сохраняем выбранный ответ
        moveToNextQuestion();
    } else {
        alert('Пожалуйста, выберите ответ или дождитесь завершения времени!');
    }
});

// Завершение теста
function showResults() {
    clearInterval(questionTimer); // Останавливаем последний таймер

    let resultsList = document.getElementById('resultsList');
    resultsList.innerHTML = '';
    let score = 0;

    questions.forEach((question, index) => {
        let cleanedQuestionText = question.question.replace(/\$\$\$\$/g, '_____');
        let userAnswer = userAnswers[index];
        let isCorrect = userAnswer === question.answer;
        let resultIcon = isCorrect ? '✓' : '✗';
        let resultColor = isCorrect ? 'green' : 'red';

        resultsList.innerHTML += `
            <p><strong>Вопрос ${index + 1}:</strong> ${cleanedQuestionText}</p>
            <p>Ваш ответ: <span>${userAnswer || 'Нет ответа'}</span></p>
            <p>Правильный ответ: <span>${question.answer}</span></p>
            <p>
                <span style="color: ${resultColor}; font-weight: bold;">${resultIcon}</span> 
                ${isCorrect ? 'Правильно' : 'Неправильно'}
            </p>
            <p><strong>Объяснение:</strong> ${question.explanation}</p>
            <hr>
        `;

        if (isCorrect) {
            score++;
        }
    });

    let percentage = (score / questions.length) * 100;
    let grade = percentage >= 70 ? '5 😇😇😇' : percentage >= 50 ? '4  🙃🙃🙃' : percentage >= 40 ? '3  😟😟😟' : '2  😫😫😫';

    resultsList.innerHTML += `<h4>Ваш результат: ${score} из ${questions.length} (${percentage.toFixed(2)}%)</h4>`;
    resultsList.innerHTML += `<p>Ваша оценка : <strong>${grade}</strong></p>`;

    // Вывод времени, затраченного на тест
    let elapsedTime = Math.floor((Date.now() - startTime) / 1000);
    let minutes = Math.floor(elapsedTime / 60);
    let seconds = elapsedTime % 60;
    resultsList.innerHTML += `<p>Время, затраченное на тест: ${minutes}:${seconds < 10 ? '0' + seconds : seconds}</p>`;

    // Переход к блоку с результатами
    document.getElementById('testSection').style.display = 'none';
    document.getElementById('resultsSection').style.display = 'block';
}

// Старт теста
    document.getElementById('startTestBtn').addEventListener('click', function () {
    document.getElementById('intro').style.display = 'none';
    document.getElementById('testSection').style.display = 'block';
    showQuestion(); // Показываем первый вопрос
});
document.getElementById('restartTestBtn').addEventListener('click', function () {
    // Сброс переменных
    currentQuestionIndex = 0;
    userAnswers = [];
    startTime = Date.now(); // Сброс времени начала

    // Скрыть результаты и показать тест
    document.getElementById('resultsSection').style.display = 'none';
    document.getElementById('testSection').style.display = 'block';

    // Показать первый вопрос
    showQuestion();
});





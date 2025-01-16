let currentQuestionIndex = 0; // Индекс текущего вопроса
let userAnswers = []; // Массив для хранения ответов пользователя
let questionTimeLimit = 60; // Время на один вопрос (в секундах)
let questionTimer; // Таймер для текущего вопроса
let startTime = Date.now(); // Инициализация времени начала теста

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
{
    question: "6. шаар:тегерек",
    options: ["куб:төрт бурчтук", "призма:көп бучтуу", "үч бурчтук:пирамида", "сүйрү:ийри"],
    answer: "куб:төрт бурчтук" 
},
{
    question: "7. күн:космос",
    options: ["кычкылтек:жер", "ай:орбита", "жылдыз:асман", "жаныбар:токой"],
    answer: "жылдыз:асман" 
},
{
    question: "8. ыр:акын",
    options: ["роман:афтор", "чыгарма:жазуучу", "дары:дармацевт", "мелодия:аспап"],
    answer: "роман:афтор" 
},
{
    question: "9. кыя:иш-аракет",
    options: ["жалкоолук:мээнеткечтик", "максат:эмгек", "сүйүү:симпатия", "тилек:бата"],
    answer: "тилек: бата"
},
{

    question: "10. шейк:кардинал",
    options: ["мечит: икона", "үй: батир", "бала: кыз", "президент: султан"],
    answer: "президент: султан"
},
{
    question: "11. катышуу:жылмаюу",
    options: ["жиндeнүү:чыйдоо", "урушуу:мактоо", "ыйлоо:өкүрүү", "бакыруу:шыбыроо"],
    answer: "бакыруу:шыбыроо"
},
{
    question: "12. баңги: ден-соолук",
    options: ["макияж: келбет", "таштанды: чөйрө", "темир: дат", "тарбия: жүрүм-турум"],
    answer: "таштанды: чөйрө"
},
{
    question: "13. дарбыз: данектүү",
    options: ["китеп: маңыздуу", "коон: сары", "мугалим: билимдүү", "акула: тиштүү"],
    answer: "акула: тиштүү"
},
{
    question: "14. стратосфера: атмосфера",
    options: ["сейсмология: кыртыш", "жогорку мантия: литосфера", "дүйнөлүк океан: гидросфера", "экосистема: биосфера"],
    answer: "жогорку мантия: литосфера"
},
{
    question: "15. буйрук: капитан",
    options: ["буйрук: староста", "буйрук: ата", "буйрук: мугалим", "буйрук: сот"],
    answer: "буйрук: староста"
},
{
    question: "16. жашоо:таттуу",
    options: ["өмүр:ырыхаттуу", "турмуш:максатсыз", "бакыт:ийгиликтуу", "эгемендүүдүк:баалуу"],
    answer: "өмүр:ырыхаттуу"
},
{
    question: "17. кылмыш:жаза",
    options: ["күнө:тозок", "соода:товар", "сүйүү:бакыт", "жумуш:акы"],
    answer: "жумуш:акы"
},
{
    question: "18. хиджаб:араб",
    options: ["калпак:кыргыз", "үкү топу:кыргыз", "элечек:кыргыз", "белдемчи:кыргыз"],
    answer: "элечек:кыргыз"
},
{
    question: "19. кукым:өсүмдүк",
    options: ["алма:гүл", "осетр:балык", "кайың:бак", "буркүт:жаныбар"],
    answer: "буркүт:жаныбар"
},
{
    question: "20. телефон:байланыш",
    options: ["телевизор:кино", "цирк:маскарапоз", "унаа:ташуу", "жылыткыч:жылуулук"],
    answer: "жылыткыч:жылуулук"
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





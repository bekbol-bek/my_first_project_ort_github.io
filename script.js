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
    {
        question: "21. согуш:багындыруу",
        options: ["жеңиш:жашоо", "көтөрүлүш:эркин болуу", "мелдеш:элдешүү", "тынчтык:өмүр сүрүү"],
        answer: "көтөрүлүш:эркин болуу"
    },
    {
        question: "22. нан:жабуу",
        options: ["фильм:тартуу", "китеп:окуу", "тасторкон:жаюу", "темир:эритүү"],
        answer: "фильм:тартуу"
    },
    {
        question: "23. имарат:каркас",
        options: ["фигура:форма", "кийим:материал", "боз үй:кереге", "китеп:мукаба"],
        answer: "боз үй:кереге"
    },
    {
        question: "24. адам:оору",
        options: ["темир:дат", "алма:чөп", "жыгач:катуу", "ит:кутуруу"],
        answer: "ир:кутуруу"
    },
    {
        question: "25. көгүчкөн:ителги",
        options: ["жылан:бака", "чөп:кой", "эчки:карышкыр", "акула:кит"],
        answer: "акула:кит"
    },
    {
        question: "26. урушуу:таарыныч",
        options: ["мактоо:сүйүнүч", "жек көрүү:өч", "элдешүү:кечирим", "барктануу:текеберлик"],
        answer: "барктануу:текеберлик"
    },
    {
        question: "27. топурак:баткак",
        options: ["таруу:ботко", "суу:муз", "отун:күл", "блут:ным"],
        answer: "суу:муз"
    },
    {
        question: "28. кык:семирткич",
        options: ["тезек:отун", "Жүн:кийим", "жибек:жип", "темир:метал"],
        answer: "тезек:отун"
    },
    {
        question: "29. сызгыч:сантиметр",
        options: ["тараза:масса", "компас:багыт", "градусник:градус", "саат:минута"],
        answer: "саат:минута"
    },
    {
        question: "30. барктуу:баалуу",
        options: ["ыргытуу:арзан", "колдонуу:пайдалуу", "сактоо:керектүү", "бөлүшүү:ашыкчы"],
        answer: "сактоо:керектүү"
    },



    // Добавьте другие вопросы сюда (всего 10)
];

let userAnswers = [];  // Массив для хранения ответов пользователя
let totalTime = 30 * 60;  // Общее время для теста в секундах (например, 5 минут)
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

    // // Проверяем ответы
    // questions.forEach((question, index) => {
    //     let result = (userAnswers[index] === question.answer) ? 'Правильно' : 'Неправильно';

    //     resultsList.innerHTML += `
    //         <p>Вопрос ${index + 1}: ${result}</p>
    //     `;
    //     if (result === 'Правильно') {
    //         score++;
    //     }
    // });
     

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

   
    questions.forEach((question, index) => {
        let isCorrect = (userAnswers[index] === question.answer);
        let resultIcon = isCorrect ? '✓' : '✗'; // Галочка, если правильно, крестик — если нет
        let resultColor = isCorrect ? 'green' : 'red'; // Зеленый цвет для правильного ответа, красный для неправильного

        resultsList.innerHTML += `
            <p>Вопрос ${index + 1}: 
                <span style="color: ${resultColor}; font-weight: bold;">${resultIcon}</span> 
                ${isCorrect ? 'Правильно' : 'Неправильно'}
            </p>
            <p>Ваш ответ: ${userAnswers[index] || 'Нет ответа'}</p>
            <p>Правильный ответ: ${question.answer}</p>
            <hr>
        `;

        if (isCorrect) {
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





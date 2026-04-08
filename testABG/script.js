// Вопросы основного теста (7 штук)
const questions = [
    {
        text: "Какой у вас цвет глаз?",
        image: "images/q1.jpg",
        options: ["Зеленый", "Голубой", "Карий", "Серо-буро-малиновый", "Серый", "Я не знаю", "Это меня деанонит", "Гетерохромия"],
        vibes: ["Лейла Юнусовна", "Петр Крюков", "Эдуард Хаджигаджимаджибаевич", "Сергей Довбыш", "Ярослав Скоробогатов", "Димон Лапта", "Роман Городницкий", "Наталья Иванова"]
    },
    {
        text: "Ваше любимое занятие?",
        image: "images/q2.jpg",
        options: ["Кодить", "Читать, предаваться размышлениям", "Математика - моя жизнь", "Играть в лапту", "Гулять с друзьями", "Считать сколько бы времени прошло, если бы ты двигался со скоростью света", "Придумываю новый политический строй", "Читаю новости"],
        vibes: ["Ярослав Скоробогатов", "Лейла Юнусовна", "Наталья Иванова", "Сергей Довбыш", "Димон Лапта", "Петр Крюков", "Эдуард Хаджигаджимаджибаевич", "Роман Городницкий"]
    },
    {
        text: "Ваш любимый напиток?",
        image: "images/q3.jpg",
        options: ["Чай", "Энергетик", "Кофе", "Вода", "Чайный гриб", "Слезы смертных", "Молоко", "Некий пенящийся напиток"],
        vibes: ["Эдуард Хаджигаджимаджибаевич", "Петр Крюков", "Ярослав Скоробогатов", "Наталья Иванова", "Сергей Довбыш", "Роман Городницкий", "Лейла Юнусовна", "Димон Лапта"]
    },
    {
        text: "Чем вы предпочитаете заниматься на уроках?",
        image: "images/q4.jpg",
        options: ["Вспоминать прошлое (ностальгировать)", "Спать", "Дебатировать с соседом по парте", "Читать", "Общаться с дипсиком", "Реально слушать урок", "Прогуливать", "Листать ленту запрещенных сетей"],
        vibes: ["Петр Крюков", "Сергей Довбыш", "Эдуард Хаджигаджимаджибаевич", "Лейла Юнусовна", "Ярослав Скоробогатов", "Наталья Иванова", "Роман Городницкий", "Димон Лапта"]
    },
    {
        text: "Выберите литературного героя?",
        image: "images/q5.jpg",
        options: ["Печорин", "Обломов", "Пьер Безухов", "Татьяна Ларина", "Фрекен Бок", "Мцыри", "Мистер Дарси", "Родион Раскольников"],
        vibes: ["Петр Крюков", "Димон Лапта", "Лейла Юнусовна", "Наталья Иванова", "Сергей Довбыш", "Эдуард Хаджигаджимаджибаевич", "Ярослав Скоробогатов", "Роман Городницкий"]
    },
    {
        text: "Ваш любимый жанр кино?",
        image: "images/q6.jpg",
        options: ["Советские фильмы", "Научная фантастика", "Историческое кино", "Комедии", "Романтика", "Люблю только книги", "Смотрю только спортивные матчи", "Мультики"],
        vibes: ["Петр Крюков", "Ярослав Скоробогатов", "Роман Городницкий", "Эдуард Хаджигаджимаджибаевич", "Наталья Иванова", "Лейла Юнусовна", "Димон Лапта", "Сергей Довбыш"]
    },
    {
        text: "Выбери суперсилу?",
        image: "images/q7.jpg",
        options: ["Невидимость", "Телекинез", "Путешествие в прошлое", "Суперскорость", "Разговаривать с животными", "Телепатия", "Телепортация", "Гипноз"],
        vibes: ["Наталья Иванова", "Ярослав Скоробогатов", "Роман Городницкий", "Димон Лапта", "Сергей Довбыш", "Лейла Юнусовна", "Петр Крюков", "Эдуард Хаджигаджимаджибаевич"]
    }
];

// БАЗА ОПИСАНИЙ И КАРТИНОК ДЛЯ КАЖДОГО ПЕРСОНАЖА
const resultDetails = {
    "Лейла Юнусовна": {
        description: "Ты — Лейла Юнусовна! Мудрая, внимательная, любишь читать и размышлять. Твоё спокойствие и глубина вдохновляют окружающих.",
        image: "images/result_leila.jpg",
        color: "#8e44ad"
    },
    "Петр Крюков": {
        description: "Ты — Пётр Крюков! Ностальгирующий романтик, ценишь советское кино и точные науки. Любишь вспоминать прошлое и пить энергетики.",
        image: "images/result_petr.jpg",
        color: "#3498db"
    },
    "Эдуард Хаджигаджимаджибаевич": {
        description: "Ты — Эдуард Хаджигаджимаджибаевич! Харизматичный спорщик, любишь дебаты и всегда готов отстоять свою точку зрения.",
        image: "images/result_eduard.jpg",
        color: "#e67e22"
    },
    "Сергей Довбыш": {
        description: "Ты — Сергей Довбыш! Практичный и энергичный, любишь играть в слона и есть яблоки. С тобой весело и надёжно.",
        image: "images/result_sergey.jpg",
        color: "#2ecc71"
    },
    "Ярослав Скоробогатов": {
        description: "Ты — Ярослав Скоробогатов! Технарь до мозга костей, кодер, фанат программ не написанных нейросетью. Будущее уже здесь!",
        image: "images/result_yaroslav.jpg",
        color: "#f1c40f"
    },
    "Димон Лапта": {
        description: "Ты — Димон Лапта! Душа компании, обожаешь гулять с друзьями, играть в лапту и смотреть комедии. Жизнь — праздник!",
        image: "images/result_dimон.jpg",
        color: "#e74c3c"
    },
    "Роман Городницкий": {
        description: "Ты — Роман Городницкий! Интеллектуал и политический стратег. Любишь историю, придумываешь новые политические строи и читаешь новости.",
        image: "images/result_roman.jpg",
        color: "#1abc9c"
    },
    "Наталья Иванова": {
        description: "Ты — Наталья Иванова! Вы обладаете техническим сладом ума и цените своих близких.",
        image: "images/result_natalia.jpg",
        color: "#fd79a8"
    }
};

// Словарь для красивых названий вариантов в решающем вопросе
const vibeOptionMap = {
    "Лейла Юнусовна": "📚 Книги и размышления",
    "Петр Крюков": "🎬 Твердый характер и ностальгия",
    "Эдуард Хаджигаджимаджибаевич": "🗣️ Дебаты и споры",
    "Сергей Довбыш": "🎉 Лошади и яблоки",
    "Ярослав Скоробогатов": "💻 Кодинг и технологии",
    "Димон Лапта": "🏏 Лапта и активный отдых",
    "Роман Городницкий": "📰 Политика и новости",
    "Наталья Иванова": "🐾 Романтика и семья"
};

let currentQuestion = 0;
let scores = {};
let isTiebreaker = false;
let tiedVibes = [];
let dynamicTiebreaker = null;

// СОЗДАЁМ ДИНАМИЧЕСКИЙ РЕШАЮЩИЙ ВОПРОС (только для претендентов)
function createDynamicTiebreaker(tiedList) {
    const options = [];
    const vibes = [];
    
    for (let vibe of tiedList) {
        const optionText = vibeOptionMap[vibe] || `✨ ${vibe}`;
        options.push(optionText);
        vibes.push(vibe);
    }
    
    return {
        text: "🔥 Решающий вопрос! Какой вайб тебе ближе всего?",
        image: "images/tiebreaker.jpg",
        options: options,
        vibes: vibes
    };
}

// Загружаем вопрос
function loadQuestion() {
    const quizDiv = document.getElementById('quiz');
    let q;
    
    if (isTiebreaker) {
        q = dynamicTiebreaker;
    } else {
        q = questions[currentQuestion];
    }
    
    let html = `<h3>${q.text}</h3>`;
    html += `<img src="${q.image}" alt="Вопрос" class="question-image" onerror="this.src='https://via.placeholder.com/400x200?text=Картинка+не+загружена'">`;
    
    q.options.forEach((opt, idx) => {
        html += `<div class="option" onclick="selectOption(${idx})">${opt}</div>`;
    });
    
    quizDiv.innerHTML = html;
}

// Обработка выбора
function selectOption(optionIndex) {
    if (isTiebreaker) {
        const winner = dynamicTiebreaker.vibes[optionIndex];
        showFinalResult(winner);
        return;
    }
    
    const vibe = questions[currentQuestion].vibes[optionIndex];
    scores[vibe] = (scores[vibe] || 0) + 1;
    currentQuestion++;
    
    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        checkForTie();
    }
}

// Проверка на ничью
function checkForTie() {
    let maxCount = 0;
    for (let vibe in scores) {
        if (scores[vibe] > maxCount) {
            maxCount = scores[vibe];
        }
    }
    
    tiedVibes = [];
    for (let vibe in scores) {
        if (scores[vibe] === maxCount) {
            tiedVibes.push(vibe);
        }
    }
    
    if (tiedVibes.length === 1) {
        showFinalResult(tiedVibes[0]);
    } else {
        // СОЗДАЁМ ВОПРОС ТОЛЬКО ДЛЯ ПРЕТЕНДЕНТОВ
        dynamicTiebreaker = createDynamicTiebreaker(tiedVibes);
        isTiebreaker = true;
        loadQuestion();
    }
}

// Финальный результат с картинкой и описанием
function showFinalResult(winner) {
    const details = resultDetails[winner] || {
        description: "Ты уникальная личность! Твой вайб неповторим.",
        image: "images/result_default.jpg",
        color: "#764ba2"
    };
    
    localStorage.setItem('lastVibe', winner);
    localStorage.setItem('lastScores', JSON.stringify(scores));
    localStorage.setItem('lastTiedVibes', JSON.stringify(tiedVibes));
    localStorage.setItem('lastResultImage', details.image);
    localStorage.setItem('lastResultDescription', details.description);
    
    const resultDiv = document.getElementById('result');
    let tieInfo = '';
    if (tiedVibes && tiedVibes.length > 1) {
        tieInfo = `<p><small>🎭 Была ничья между: ${tiedVibes.join(', ')}. Решающий вопрос выбрал ${winner}.</small></p>`;
    }
    
    resultDiv.innerHTML = `
        <div style="background: linear-gradient(135deg, ${details.color}20, ${details.color}40); border-radius: 20px; padding: 20px; text-align: center;">
            <img src="${details.image}" alt="${winner}" style="width: 150px; height: 150px; object-fit: cover; border-radius: 50%; margin-bottom: 15px; border: 4px solid ${details.color};">
            <h2 style="color: ${details.color};">Твой вайб: ${winner}!</h2>
            <p style="font-size: 18px; margin: 15px 0;">${details.description}</p>
            ${tieInfo}
            <div style="margin-top: 20px;">
                <button onclick="resetAndRestart()" style="background: ${details.color};">✨ Пройти заново ✨</button>
                <button onclick="location.href='page2.html'">📊 Смотреть полные результаты</button>
            </div>
        </div>
    `;
    
    document.getElementById('quiz').innerHTML = '';
}

// Сброс и перезапуск
function resetAndRestart() {
    currentQuestion = 0;
    scores = {};
    isTiebreaker = false;
    tiedVibes = [];
    dynamicTiebreaker = null;
    loadQuestion();
    document.getElementById('result').innerHTML = '';
}

// Запуск
loadQuestion();

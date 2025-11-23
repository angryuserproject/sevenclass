// Данные вопросов с названиями и полными вопросами

const questions = [
    {
        id: 1,
        title: "Скорость Земли",
        question: "Земля совершает один оборот вокруг Солнца примерно за 365 дней. Расстояние от Земли до Солнца составляет около 150 млн км. Орбиту считай окружностью. С какой средней скоростью движется Земля вокруг Солнца? Ответ вырази в км/ч.",
        answer: "107 590 км/ч"    
    },
    {
        id: 2,
        title: "Вес человека на планетах",
        question: "Известно, что вес человека на Марсе составляет примерно 0,38 от его веса на Земле. Если космонавт на Марсе весит 22,8 кг, сколько он весит на Земле?",
        answer: "60"
    },
    {
        id: 3,
        title: "Время полёта",
        question: "Расстояние от Земли до Солнца составляет 150 000 000 км. Современная космическая ракета может развивать скорость около 28 000 км/ч. Сколько времени занял бы полёт к Солнцу на такой ракете? Ответ вырази в днях и округли до целых.",
        answer: "223"
    },
    {
         id: 4,
    title: "Плотность нейтронной звезды",
    question: "Нейтронная звезда имеет массу, как у Солнца (2 × 10³⁰ кг), но диаметр всего 20 км. Найдите её среднюю плотность (массу делить на объём). Объём шара V = (4/3)πR³. Сравните с плоностью воды(1000 кг/м³).",
        answer: "Средняя плотность нейтронной звезды составляет примерно 4.77 × 10¹⁷ кг/м³. Это примерно в 477 триллионов раз плотнее воды"
    },
    {
        id: 5,
        title: "Свет от Сириуса",
        question: "Свет от звезды Сириус идёт до Земли 8,6 лет. Сколько это километров, если скорость света равна 300 000 км/с? (Год считать равным 365 дням)",
        answer: "81_362_880_000_000 км"
    },
    {
        id: 6,
        title: "Ускорение свободного падения",
        question: "Ускорение свободного падения на Луне в 6 раз меньше, чем на Земле (g_земля ≈ 10 м/с²). Если на Земле человек подпрыгивает на 0,5 м, то на какую высоту он подпрыгнет на Луне при такой же силе толчка? h = v₀² / (2g)",
        answer: "Примерно 3 метра"
    },
    {
        id: 7,
        title: "Вероятность возникновения жизни на планете",
        question: "Ученые считают, что для возникновения разумной жизни нужно совпадение 5 ключевых независимых условий, вероятность каждого из которых равна 0,1. Какова общая вероятность возникновения разумной жизни?",
        answer: "0,00001"
    },
    {
        id: 8,
        title: "Превращение звезды в финальной стадии",
        question: "Известны критерии конечных стадий эволюции звёзд: Белый карлик — масса остатка менее 1,4 Массы солнца, Нейтронная звезда — масса остатка от 1,4 Массы солнца до 3 масс солнца, Чёрная дыра — масса остатка больше 3 масс солнца. Масса Солнца: 2 × 10³⁰ кг. Масса Бетельгейзе: 3.2 × 10³¹ кг. Потеря массы Бетельгейзе: 2.6 × 10³¹ кг. Чем станет Бетельгейзе в конце своего жизненного цикла и чем станет Солнце?",
        answer: "Бетельгейзе находится на пограничном значении, поэтому она сможет стать как нейтронной звездой, так и чёрной дырой(более вероятно). Солнце - белым карликом"
    },
    {
        id: 9,
        title: "Параллакс",
        question: "Параллакс — изменение видимого положения объекта относительно удалённого фона в зависимости от положения наблюдателя. D = R/p, где D-искомое расстояние, R-средний радиус орбиты Земли(равен 1 а.е. или 150_000_000 км, p-параллакс в радианах. Для перевода p(в радианах) = p(в секундах) × (π / 648000)). Найди расстояние до Альфы Центавры А, параллакс в секундах для которой равен 0,75",
        answer: "D ≈ 4.125×10¹³ км (около 4.36 световых лет)"
    },
    {
        id: 10,
        title: "Вопрос",
        question: "Условие",
        answer: "Ответ"
    },
    {
        id: 11,
        title: "Вопрос",
        question: "Условие",
        answer: "Ответ"
    },
    {
        id: 12,
        title: "Вопрос",
        question: "Условие",
        answer: "Ответ"
    },
    {
        id: 13,
        title: "Вопрос",
        question: "Условие",
        answer: "Ответ"
    },
    {
        id: 14,
        title: "Вопрос",
        question: "Условие",
        answer: "Ответ"
    },
    {
        id: 15,
        title: "Вопрос",
        question: "Условие",
        answer: "Ответ"
    }
];

// Элементы DOM
const cardsContainer = document.getElementById('cardsContainer');
const modal = document.getElementById('questionModal');
const closeModal = document.getElementById('closeModal');
const modalQuestionTitle = document.getElementById('modalQuestionTitle');
const modalQuestionText = document.getElementById('modalQuestionText');
const answerText = document.getElementById('answerText');
const showAnswerBtn = document.getElementById('showAnswerBtn');
const answerSection = document.getElementById('modalAnswer');
const correctBtn = document.getElementById('correctBtn');
const wrongBtn = document.getElementById('wrongBtn');

let currentQuestionId = null;

// Хранилище для статусов вопросов - загружаем из localStorage
const questionStatus = JSON.parse(localStorage.getItem('questionStatus')) || {};

// Создание карточек с названиями вопросов
function createCards() {
    cardsContainer.innerHTML = ''; // Очищаем контейнер
    
    questions.forEach((item) => {
        const card = document.createElement('div');
        card.className = 'card';
        card.dataset.id = item.id;
        
        // Применяем статус сразу при создании карточки
        const status = questionStatus[item.id];
        if (status) {
            card.classList.add(status);
        }
        
        card.innerHTML = `
            <div class="card-number">${item.id}</div>
            <h3>${item.title}</h3>
            <p>Нажмите, чтобы открыть вопрос</p>
            ${status ? `<div class="card-status ${status}"></div>` : '<div class="card-status"></div>'}
        `;
        
        card.addEventListener('click', () => openModal(item));
        cardsContainer.appendChild(card);
    });
}

// Открытие модального окна с вопросом
function openModal(questionData) {
    currentQuestionId = questionData.id;
    modalQuestionTitle.textContent = questionData.title;
    modalQuestionText.textContent = questionData.question;
    answerText.textContent = questionData.answer;
    
    // Сбрасываем состояние ответа
    answerSection.style.display = 'none';
    showAnswerBtn.style.display = 'block';
    showAnswerBtn.textContent = 'Показать ответ';
    
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// Показать ответ
showAnswerBtn.addEventListener('click', () => {
    answerSection.style.display = 'block';
    showAnswerBtn.style.display = 'none';
});

// Отметить как правильный
correctBtn.addEventListener('click', () => {
    if (currentQuestionId) {
        questionStatus[currentQuestionId] = 'correct';
        saveStatusToLocalStorage();
        updateCardStatus(currentQuestionId);
        closeModalFunc();
    }
});

// Отметить как неправильный
wrongBtn.addEventListener('click', () => {
    if (currentQuestionId) {
        questionStatus[currentQuestionId] = 'wrong';
        saveStatusToLocalStorage();
        updateCardStatus(currentQuestionId);
        closeModalFunc();
    }
});

// Сохранить статусы в localStorage
function saveStatusToLocalStorage() {
    localStorage.setItem('questionStatus', JSON.stringify(questionStatus));
}

// Обновить статус карточки
function updateCardStatus(questionId) {
    const card = document.querySelector(`.card[data-id="${questionId}"]`);
    if (card) {
        // Удаляем предыдущие статусы
        card.classList.remove('correct', 'wrong');
        
        // Добавляем новый статус
        const status = questionStatus[questionId];
        if (status) {
            card.classList.add(status);
            
            // Обновляем индикатор статуса
            let statusIndicator = card.querySelector('.card-status');
            if (statusIndicator) {
                statusIndicator.className = `card-status ${status}`;
            } else {
                statusIndicator = document.createElement('div');
                statusIndicator.className = `card-status ${status}`;
                card.appendChild(statusIndicator);
            }
        } else {
            // Если статуса нет, убираем индикатор
            const statusIndicator = card.querySelector('.card-status');
            if (statusIndicator) {
                statusIndicator.className = 'card-status';
            }
        }
    }
}

// Функция для сброса всех статусов (можно добавить кнопку для этого)
function resetAllStatuses() {
    Object.keys(questionStatus).forEach(key => {
        delete questionStatus[key];
    });
    saveStatusToLocalStorage();
    createCards(); // Пересоздаем карточки
}

// Закрытие модального окна
function closeModalFunc() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
    currentQuestionId = null;
}

// Закрытие модального окна при клике вне контента
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModalFunc();
    }
});

// Закрытие модального окна при нажатии Escape
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeModalFunc();
    }
});

// Инициализация
closeModal.addEventListener('click', closeModalFunc);

// Добавляем кнопку сброса статусов в интерфейс
function addResetButton() {
    const resetBtn = document.createElement('button');
    resetBtn.textContent = 'Сбросить все отметки';
    resetBtn.className = 'reset-btn';
    resetBtn.addEventListener('click', resetAllStatuses);
    
    const container = document.querySelector('.container');
    container.insertBefore(resetBtn, cardsContainer);
}

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
    createCards();
    addResetButton();

});

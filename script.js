// script.js
const animalData = {
    cat: {
        title: "Кошки",
        content: `
            <div class="modal-animal-info">
                <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%2Fid%2FOIP.kknwXl7nWKbqyv5joJyYOQHaFQ%3Fpid%3DApi&f=1&ipt=54141d519c6227e532dd82406afd6db3a0826359f25113758575e8c0ab0faf90&ipo=images" alt="Кошка" style="width:100%; border-radius:10px; margin-bottom:20px;">
                <p><strong>Продолжительность жизни:</strong> 12-18 лет</p>
                <p><strong>Особенности:</strong> Независимые, чистоплотные, отличные охотники</p>
                <p><strong>Уход:</strong> Регулярное вычесывание, чистка ушей, стрижка когтей</p>
                <p><strong>Интересный факт:</strong> Кошки спят около 16 часов в сутки!</p>
            </div>
        `
    },
    dog: {
        title: "Собаки",
        content: `
            <div class="modal-animal-info">
                <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%2Fid%2FOIP.meBx_vR1wX7ntLaq0Q7t2gHaHa%3Fpid%3DApi&f=1&ipt=bf5a2288823e2b441cd2a8eb2bceae161e4e4b76e51af376854977f9cebe7f7c&ipo=images" alt="Собака" style="width:100%; border-radius:10px; margin-bottom:20px;">
                <p><strong>Продолжительность жизни:</strong> 10-13 лет</p>
                <p><strong>Особенности:</strong> Верные, социальные, нуждаются в активности</p>
                <p><strong>Уход:</strong> Ежедневные прогулки, регулярное купание, уход за зубами</p>
                <p><strong>Интересный факт:</strong> Собаки понимают до 250 слов и жестов!</p>
            </div>
        `
    },
    rabbit: {
        title: "Кролики",
        content: `
            <div class="modal-animal-info">
                <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%2Fid%2FOIP.KQ15ZrWG0Ql2ZN6pvbBoDQHaEK%3Fpid%3DApi&f=1&ipt=650b20ec0c58abf2bdedd7698b6a8b4772f1fe8f7d4e169ee477c71eb76ac746&ipo=images" alt="Кролик" style="width:100%; border-radius:10px; margin-bottom:20px;">
                <p><strong>Продолжительность жизни:</strong> 8-12 лет</p>
                <p><strong>Особенности:</strong> Социальные, чистоплотные, могут быть приучены к лотку</p>
                <p><strong>Уход:</strong> Чистка клетки, свежее сено, овощи, пространство для движения</p>
                <p><strong>Интересный факт:</strong> Кролики могут поворачивать уши на 270 градусов!</p>
            </div>
        `
    },
    hamster: {
        title: "Хомяки",
        content: `
            <div class="modal-animal-info">
                <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%2Fid%2FOIP.ifGL58GH6CzYrRsJ8gflwQHaEo%3Fpid%3DApi&f=1&ipt=44cca75a7019d2d716d6229fef591470c5216c058eaa8358f82d6030cbfc235d&ipo=images" alt="Хомяк" style="width:100%; border-radius:10px; margin-bottom:20px;">
                <p><strong>Продолжительность жизни:</strong> 2-3 года</p>
                <p><strong>Особенности:</strong> Ночные животные, активные, любят беговые колеса</p>
                <p><strong>Уход:</strong> Просторная клетка, специальный корм, чистая вода</p>
                <p><strong>Интересный факт:</strong> Хомяки могут запасать еду в защечных мешках!</p>
            </div>
        `
    },
    fish: {
        title: "Рыбки",
        content: `
            <div class="modal-animal-info">
                <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%2Fid%2FOIP.Q2DKUPW7bJKpj8E1XybYogHaE-%3Fpid%3DApi&f=1&ipt=3d3a53e792439a9fc71d8fe701898d83ea116d644141949739e4a9c619a70ad8&ipo=images" alt="Рыбки" style="width:100%; border-radius:10px; margin-bottom:20px;">
                <p><strong>Продолжительность жизни:</strong> 3-10 лет (зависит от вида)</p>
                <p><strong>Особенности:</strong> Спокойные, красивые, не требуют много внимания</p>
                <p><strong>Уход:</strong> Чистый аквариум, фильтрация, правильная температура воды</p>
                <p><strong>Интересный факт:</strong> Некоторые рыбы могут узнавать своего хозяина!</p>
            </div>
        `
    }
};

const quizResults = {
    active: "Вам отлично подойдет собака! 🐕 Собаки любят активный образ жизни и составят вам компанию на прогулках и пробежках.",
    calm: "Идеальный питомец для вас - кошка! 🐱 Кошки независимы, чистоплотны и отлично подходят для спокойной домашней атмосферы.",
    busy: "Вам подойдут рыбки! 🐠 Они не требуют постоянного внимания, успокаивают и создают красивую атмосферу в доме.",
    family: "Отличный выбор - кролик или хомяк! 🐹 Эти питомцы безопасны для детей и учат ответственности."
};

const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const infoButtons = document.querySelectorAll('.info-btn');
const modal = document.getElementById('animalModal');
const modalTitle = document.getElementById('modalTitle');
const modalContent = document.getElementById('modalContent');
const closeBtn = document.querySelector('.close-btn');
const quizOptions = document.querySelectorAll('.quiz-option');
const quizResult = document.getElementById('quizResult');
const restartBtn = document.getElementById('restartQuiz');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

infoButtons.forEach(button => {
    button.addEventListener('click', () => {
        const animalType = button.getAttribute('data-animal');
        const data = animalData[animalType];
        
        modalTitle.textContent = data.title;
        modalContent.innerHTML = data.content;
        
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    });
});

closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
});

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});

quizOptions.forEach(option => {
    option.addEventListener('click', () => {
        const lifestyle = option.getAttribute('data-value');
        const result = quizResults[lifestyle];
        
        quizResult.innerHTML = result;
        quizResult.style.display = 'block';
        restartBtn.style.display = 'block';
        
        quizOptions.forEach(opt => opt.style.display = 'none');
    });
});

restartBtn.addEventListener('click', () => {
    quizResult.style.display = 'none';
    restartBtn.style.display = 'none';
    quizOptions.forEach(opt => opt.style.display = 'block');
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 70,
                behavior: 'smooth'
            });
        }
    });
});
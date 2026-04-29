let prevButton = document.getElementById('prev');
let nextButton = document.getElementById('next');
let container = document.querySelector('.container');
let item = container.querySelectorAll('.list .item');
let indicators = document.querySelector('.indicators');
let dots = indicators.querySelectorAll("ul li");
let list = container.querySelector('.list');

let active = 0;
let firstPosition = 0;
let lastPosition = item.length - 1;

const botao = document.getElementById('botaohome');
    botao.addEventListener('click', function () {alert('Você clicou no botão Home! 🎉');
});

const botao2 = document.getElementById('botaocarros');
botao2.addEventListener('click', function () {alert('Você clicou no botão Carros! 🚗');
});

const botao3 = document.getElementById('botaocontato');
botao3.addEventListener('click', function () {alert('Área de contato em desenvolvimento 🚧');
});

    function setSlaider() {
        let itemOld = container.querySelector('.list .item.active');
        itemOld.classList.remove('active');

        let dotOld = indicators.querySelector('ul li.active');
        dotOld.classList.remove('active');

        dots[active].classList.add('active');
        indicators.querySelector('.number').innerHTML = '0' + (active + 1);
    }

    nextButton.onclick = () => {
        list.style.setProperty('--calculation', '1');
        active = active + 1 > lastPosition ? 0 : active + 1;
        setSlaider();
        item[active].classList.add('active');
    }

    prevButton.onclick = () => {
        list.style.setProperty('--calculation', '-1');
        active = active - 1 < firstPosition ? lastPosition : active - 1;
        setSlaider();
        item[active].classList.add('active');
    }
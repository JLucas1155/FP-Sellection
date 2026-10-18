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


/*animation scroll*/
gsap.registerPlugin(ScrollTrigger);

gsap.to(".divcar", {
    x: "-100vw",

    scrollTrigger: {
        trigger: ".nova-secao",
        start: "top top",
        end: "bottom top",
        scrub: 1,
}
});

gsap.to(".nova-secao h1", {
    y: -200,

    scrollTrigger: {
        trigger: ".nova-secao",
        start: "top top",
        end: "bottom top",
        scrub: 1
    }
});

gsap.to(".nova-secao p", {
    y: 200,

    scrollTrigger: {
        trigger: ".nova-secao",
        start: "top top",
        end: "bottom top",
        scrub: 1
    }
});

// Dropdown mobile
const menuButton = document.getElementById('menuButton');
const menuMobile = document.getElementById('menuMobile');

function fecharMenuMobile() {
    menuMobile.classList.remove('ativo');
    menuButton.textContent = '☰';
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', 'Abrir menu');
}

menuButton.addEventListener('click', () => {
    const aberto = menuMobile.classList.toggle('ativo');

    menuButton.textContent = aberto ? '×' : '☰';
    menuButton.setAttribute('aria-expanded', String(aberto));
    menuButton.setAttribute(
        'aria-label',
        aberto ? 'Fechar menu' : 'Abrir menu'
    );
});

// Ações dos itens mobile
document.getElementById('botaohome-mobile').addEventListener('click', () => {
    alert('Você clicou no botão Home! 🎉');
    fecharMenuMobile();
});

document.getElementById('botaocarros-mobile').addEventListener('click', () => {
    alert('Você clicou no botão Carros! 🚗');
    fecharMenuMobile();
});

document.getElementById('botaocontato-mobile').addEventListener('click', () => {
    alert('Área de contato em desenvolvimento 🚧');
    fecharMenuMobile();
});
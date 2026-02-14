let score = 0;
const scoreEl = document.getElementById("score");
const bin = document.getElementById("bin");
const card = document.getElementById("card");
const get_btn = document.getElementById("get_btn");

const imgs = [
    'img/Apple-game.png',
    'img/banan-game.png',
    'img/banka-game.png',
    'img/bottle-game.png',
    'img/bottle2-game.png',
    'img/konserva-game.png',
];

function isIntersecting(element, bin) {

    const elementRect = element.getBoundingClientRect();
    const binRect = bin.getBoundingClientRect();

    return !(
        elementRect.right < binRect.left ||
        elementRect.left > binRect.right ||
        elementRect.bottom < binRect.top ||
        elementRect.top > binRect.bottom
    );
}


function makeGarbage() {

    const b = document.createElement('div');
    b.className = 'garbage';

    b.style.left = Math.random() * 60 + 'vw';
    b.style.top = Math.random() * 190 + 'vh';

    const size = 40 + Math.random() * 60;
    b.style.width = size + 'px';
    b.style.height = size + 'px';

    b.style.backgroundImage =
        `url(${imgs[Math.floor(Math.random() * imgs.length)]})`;

    document.body.appendChild(b);

    b.onmousedown = function(event) {

        let shiftX = event.clientX - b.getBoundingClientRect().left;
        let shiftY = event.clientY - b.getBoundingClientRect().top;

        b.style.zIndex = 1000;

        function moveAt(pageX, pageY) {
            b.style.left = pageX - shiftX + 'px';
            b.style.top = pageY - shiftY + 'px';
        }

        function onMouseMove(event) {
            moveAt(event.pageX, event.pageY);
        }

        document.addEventListener('mousemove', onMouseMove);

        b.onmouseup = function() {

            document.removeEventListener('mousemove', onMouseMove);
            b.onmouseup = null;

            if (isIntersecting(b, bin)) {
                score++;
                scoreEl.textContent = score;
                b.remove();

                if(score === 10) {
                    card.style.opacity = 1;
                }
            }

           
        };
    };

    b.ondragstart = () => false;
}



for (let i = 0; i < 10; i++) {
    makeGarbage();
}

get_btn.onclick = function() {
    card.style.opacity = 0;
};

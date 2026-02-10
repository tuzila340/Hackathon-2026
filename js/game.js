let score = 0;
const scoreEl = document.getElementById("score");
const bin = document.getElementById("bin");

const imgs = [
    '../img/tree_leaf_1.png',
    '../img/tree_leaf_2.png',
    '../img/tree_leaf_3.png',
    '../img/tree_leaf_4.png',
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

    b.style.left = Math.random() * 80 + 'vw';
    b.style.top = Math.random() * 80 + 'vh';

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
            }
        };
    };

    b.ondragstart = () => false;
}


for (let i = 0; i < 10; i++) {
    makeGarbage();
}

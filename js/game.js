let score = 0;

const imgs = [
    '../img/tree_leaf_1.png',
    '../img/tree_leaf_2.png',
    '../img/tree_leaf_3.png',
    '../img/tree_leaf_4.png',
];

const makeGarbage = () => {
    const b = document.createElement('div');
    b.className = 'garbage';
    b.style.left = Math.random() * 100 + 'vw';
    b.style.top = Math.random() * 100 + 'vh';
    b.style.width = b.style.height = (40 + Math.random() * 60) + 'px';
    document.body.appendChild(b);
    b.style.backgroundImage = `url(${imgs[Math.floor(Math.random() * imgs.length)]})`;
  };
  for (let i = 0; i < 10; i++) {
    makeGarbage();
}

let elements = document.querySelectorAll('.garbage');

elements.forEach(element => {
  element.onmousedown = function(event) {
    let shiftX = event.clientX - element.getBoundingClientRect().left;
    let shiftY = event.clientY - element.getBoundingClientRect().top;

    element.style.position = 'absolute';
    element.style.zIndex = 1000;
    document.body.append(element);

    moveAt(event.pageX, event.pageY);

    function moveAt(pageX, pageY) {
      element.style.left = pageX - shiftX + 'px';
      element.style.top = pageY - shiftY + 'px';
    }

    function onMouseMove(event) {
      moveAt(event.pageX, event.pageY);
    }

    document.addEventListener('mousemove', onMouseMove);

    element.onmouseup = function() {
      document.removeEventListener('mousemove', onMouseMove);
      element.onmouseup = null;
    };
  };

  element.ondragstart = function() {
    return false;
  };
});

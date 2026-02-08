let score = 0;

const imgs = [
    '../img/tree_leaf_1.png',
    '../img/tree_leaf_2.png',
    '../img/tree_leaf_3.png',
    '../img/tree_leaf_4.png',
];

const makeBubble = () => {
    const b = document.createElement('div');
    b.className = 'leaf';
    b.style.left = Math.random() * 100 + 'vw';
    b.style.top = Math.random() * 100 + 'vh';
    b.style.width = b.style.height = (40 + Math.random() * 60) + 'px';
    document.body.appendChild(b);
    b.style.backgroundImage = `url(${imgs[Math.floor(Math.random() * imgs.length)]})`;
  };
  for (let i = 0; i < 10; i++) {
    makeBubble();
}

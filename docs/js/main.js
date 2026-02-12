const imgs = [
    'img/tree_leaf_1.png',
    'img/tree_leaf_2.png',
    'img/tree_leaf_3.png',
];

const makeBubble = () => {
    const b = document.createElement('div');
    b.className = 'leaf';
    b.style.left = Math.random() * 100 + 'vw';
    b.style.animationDuration = (6 + Math.random() * 8) + 's';
    b.style.width = b.style.height = (40 + Math.random() * 60) + 'px';
    document.body.appendChild(b);
    b.style.backgroundImage = `url(${imgs[Math.floor(Math.random() * imgs.length)]})`;
    setTimeout(() => b.remove(), 15000);
  };
  setInterval(makeBubble, 500);



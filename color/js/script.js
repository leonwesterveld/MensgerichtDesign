const colors = [
  'red',
  'orange',
  'yellow',
  'lime',
  'aqua',
  'blue',
  'indigo',
  'violet'
];

const blocks = document.querySelectorAll('div');

setInterval(() => {
  const eersteKleur = colors.shift();
  colors.push(eersteKleur);

  blocks.forEach((block, i) => {
    const kleur1 = colors[i];
    const kleur2 = colors[(i + 1) % colors.length];
    block.style.background = `linear-gradient(to right, ${kleur1}, ${kleur2})`;
  });
}, 0);

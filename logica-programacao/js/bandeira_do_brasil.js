var canvas = document.querySelector('canvas');
var pincel = canvas.getContext('2d');

//Cor de Fundo
pincel.fillStyle = 'white';
pincel.fillRect(0, 0, 600, 400);

//Parte verde da bandeira
pincel.fillStyle = 'green';
pincel.fillRect(100, 100, 550, 350);

//Parte amarela da bandeira
pincel.fillStyle = 'yellow';
pincel.beginPath();
pincel.moveTo(350, 120);
pincel.lineTo(130, 290);
pincel.lineTo(550, 290);
pincel.fill();

pincel.beginPath();
pincel.moveTo(350, 390);
pincel.lineTo(130, 290);
pincel.lineTo(550, 290);
pincel.fill();

//Parte azul da bandeira
pincel.fillStyle = 'darkblue';
pincel.beginPath();
pincel.arc(345, 260, 80, 0, 2*Math.PI);
pincel.fill();
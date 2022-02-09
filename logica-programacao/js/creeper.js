var canvas = document.querySelector('canvas');
var pincel = canvas.getContext('2d');

//Cor do Creeper
pincel.fillStyle = 'white';
pincel.fillRect(0, 0, 600, 400);

//cabeça do creeper
pincel.fillStyle = 'darkgreen';
pincel.fillRect(100, 100, 300, 300);

//olhos do creeper
pincel.fillStyle = 'black';
pincel.fillRect(160, 200, 60, 60);
pincel.fillRect(280, 200, 60, 60);

//nariz do creeper
pincel.fillRect(220, 258, 60, 80);

//boca o creeper
pincel.fillRect(280, 300, 35, 100);
pincel.fillRect(280, 300, 35, 100);
pincel.fillRect(185, 300, 35, 100);
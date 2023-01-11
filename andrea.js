"use strict"

const btnSi = document.getElementById('si');
const btnNo = document.getElementById('no');
const container = document.getElementById('container');
const meme = document.getElementById('meme');
const cancionHot = new Audio('./src/audio-modo-hot.mp3');

cancionHot.preload = 'auto';

btnSi.onclick = () => {
  cancionHot.play();
  meme.style.height = '100%';
  container.style.display = 'none';
};

btnNo.onmouseenter = (e) => { moverRandom(e.target) };

function moverRandom(elm) {
  elm.style.position = 'absolute';
  elm.style.top = Math.random() * (window.innerHeight - elm.offsetHeight) + 'px';
  elm.style.left = Math.random() * (window.innerWidth - elm.offsetWidth) + 'px';
}
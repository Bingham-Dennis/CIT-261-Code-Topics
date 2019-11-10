const fadeBtn = document.getElementById('fadeBtn');
const rotateBtn = document.getElementById('rotateBtn');
const pulseBtn = document.getElementById('pulseBtn');

let rotateFlag = false;
let rotateId = null;
let pulsateFlag = false;
let pulsateId = null;

function animateTitle() {
  let title = document.getElementById('banner');
  banner.classList.add('slide');
}

function fade() {
  let square = document.getElementById('opaqueSquare');

  if (square.style.opacity == '0') {
    square.style.opacity = '1';
    fadeBtn.innerHTML = 'Fade Out';
  } else {
    square.style.opacity = '0';
    fadeBtn.innerHTML = 'Fade In';
    }
}

function rotate() {
  let square = document.getElementById('rotatingSquare');
  let direction = false;

  if (rotateFlag === false) {
    rotateFlag = true;
    rotateBtn.innerHTML = "Stop Rotating";
    rotateId = setInterval(() => {
      if (direction === false) {
        direction = true;
        square.style.transform = 'rotate(270deg)';
      } else {
        direction = false;
        square.style.transform = 'rotate(-270deg)';
      }
    }, 4000);
  } else {
    rotateFlag = false;
    rotateBtn.innerHTML = "Start Rotating";
    square.style.transform = 'rotate(0deg)';
    clearInterval(rotateId);
  }
}

function pulsate() {
  let square = document.getElementById('pulsatingSquare');

  if (pulsateFlag === false) {
    pulsateFlag = true;
    pulseBtn.innerHTML = 'Stop Pulsating';
    pulsateId = setInterval(() => {
      if (square.style.opacity == '0') {
        square.style.opacity = '1';
      } else {
        square.style.opacity = '0';
      }
    }, 4000);
  } else {
    clearInterval(pulsateId);
    pulsateFlag = false;
    pulseBtn.innerHTML = 'Start Pulsating';
    square.style.opacity = '1';
  }
}

fadeBtn.addEventListener('click', fade);
rotateBtn.addEventListener('click', rotate);
pulseBtn.addEventListener('click', pulsate);

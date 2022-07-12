const boneco = document.querySelector('.boneco');
const corvo = document.querySelector('corvo');

const jump = () => {
  boneco.classList.add('jump');

  setTimeout(() => {

    boneco.classList.remove('jump');


  }, 400);
  
}

document.addEventListener('keydown',jump);
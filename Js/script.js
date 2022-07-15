const boneco = document.querySelector('#mc');
const corvo = document.querySelector('#raven');
const btn = document.querySelector('#btn');
const menu = document.querySelector('#start-menu');
let CanJump = true;

function Sumiu() 
{
  setTimeout(menu.classList.add('esta-invisivel'), 300);

  CorvoAndando();
}

function CorvoAndando()
{
  corvo.classList.add('corvo-que-anda');
}


function RemoverPulo() 
{
  boneco.classList.remove('jump');
  CanJump = true;
}


function AdicionarPulo() 
{
  CanJump = false;
  boneco.classList.add('jump');
  //depois de adicionar a classe CSS jump, vai esperar 500 milisegundos para remover (tempo de execução);
  setTimeout(RemoverPulo, 600);
}

function WillJump() {
  if (CanJump == true)
  {
    AdicionarPulo();
  }
}



//game loop
document.addEventListener('keypress', WillJump);
btn.addEventListener('click', () => Sumiu());
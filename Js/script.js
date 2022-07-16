const boneco = document.querySelector('#mc');
const corvo = document.querySelector('#raven');
const btn = document.querySelector('#btn');
const menu = document.querySelector('#start-menu');
const pontuacao = document.querySelector('#score');
const btnrestart = document.querySelector('#btnrestart');
const gameoverscreen = document.querySelector('#gameover');
const finalscore = document.querySelector('#finalscore');
let CanJump = true;
let pontos = 0;
let VaiMorre = true;

let intervalo = function (func)
{
  return setInterval(func, 10);
}

function DeathCheck()
{
  let McTop = parseInt(window.getComputedStyle(boneco).getPropertyValue("top"));
  let CorvoLeft = parseInt(window.getComputedStyle(corvo).getPropertyValue("left"));

  if(VaiMorre == true && CorvoLeft < 100 && CorvoLeft > 0 && McTop > 210)
  {
    gameoverscreen.classList.remove('esta-invisivel');
    finalscore.innerHTML = `Pontuação final: ${pontos}`;
    VaiMorre = false;
  } else if(VaiMorre == true && CorvoLeft <= 1)
  {
    IncreaseScore();
  }

}

function IncreaseScore()
{
    pontos++;

    if(pontos <= 9)
    {
        pontuacao.innerHTML = "0" + pontos;
    } else
    {
        pontuacao.innerHTML = pontos;
    }
}

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
  //depois de adicionar a classe CSS jump, vai esperar 1300 milisegundos para remover (tempo de execução);
  setTimeout(RemoverPulo, 1300);
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
btnrestart.addEventListener('click', () => document.location.reload(true));
intervalo(DeathCheck);








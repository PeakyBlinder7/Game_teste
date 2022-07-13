let pontos = 0;

const pontuacao = document.querySelector('#score');

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



setInterval(IncreaseScore, 100);
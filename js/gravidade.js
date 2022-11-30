/*
V   = Velocidade
Vo  = Velocidade Inicial
a   = aceleração
t   = tempo

V = Vo + a * t
*/
if (typeof idInterval === 'undefined'){ //evitar que carregue duas vezes
    clearInterval(idInterval);
}

var bola = document.querySelector('.bola');

var a = -3 * (10 ** (-3));     //ACELERAÇÃO 300px = 1m

var getAlturaBola = () => {
    const { bottom } = getComputedStyle(bola);
    const altura = +bottom.replace('px', '');

    return altura;
};

// S = S0 + vt + 1/2 * at^2
var getPosicaoBola = (S0, v, t) => {
    return S0 + v * t + 0.5 * a * (t ** 2);
};

var v = 0;
var tempo = Date.now();

var idInterval = setInterval(() => {
    const tempoAtual = Date.now();
    const tempoIntervalo = tempoAtual - tempo;
    tempo = tempoAtual;

    const altura = getAlturaBola();
    
    v += a * tempoIntervalo;

    if (altura == 0) {
        if (v > -0.1){
            v = 0;
        } else {
            v *= -1 * 0.5;  //transformando a velocidade em negativa * -1
        }                   //simulando perda de energia * 0.5
    }

    const posicao = getPosicaoBola(altura, v, tempoIntervalo);

    bola.style.bottom = `${Math.max(posicao,0)}px`;
}, 1);

var botaoRecarregar = document.querySelector('#recarregar');
botaoRecarregar.addEventListener('click', function() { bola.style.bottom = '500px'; }, false);
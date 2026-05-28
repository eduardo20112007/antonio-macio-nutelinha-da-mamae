// Lista de frases engraçadas que combinam com o estilo dele
const frases = [
    "\"Cuidado com essa lama, vai sujar meu tênis branco!\"",
    "\"A natureza é linda, mas o repelente elétrico está ligado?\"",
    "\"Amo o canto dos pássaros, contanto que não seja antes das 10h da manhã.\"",
    "\"Vou ali colher uma fruta no pé, mas antes deixa eu passar meu protetor solar FPS 50.\"",
    "\"Adoro a vida no campo, tem uma paz incrível... e o entregador de aplicativo chega até aqui?\"",
    "\"Fogão a lenha? Prefiro pedir no delivery ou usar o micro-ondas, mais prático.\"",
    "\"A internet caiu por 5 minutos e eu quase esqueci como se respira ar puro.\""
];

// Seleção dos elementos do DOM
const fraseElemento = document.getElementById('frase-agro');
const botao = document.getElementById('btn-frase');

// Função para mudar a frase aleatoriamente
botao.addEventListener('click', () => {
    const indiceAleatorio = Math.floor(Math.random() * frases.length);
    fraseElemento.textContent = frases[indiceAleatorio];
});
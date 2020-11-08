let order = [];
let clickedOrder = [];
let score = 0;

//	0 - Verde
//	1 - Vermelho
//	2 - Amarelo
//	3 - Azul

const blue = document.querySelector('.blue');
const red = document.querySelector('.red');
const green = document.querySelector('.green');
const yellow = document.querySelector('.yellow');

// Cria ordem aleatoria de cores
let shuffleOrder = () => {
    let colorOrder = Math.floor(Math.random() * 4);
    order[order.length] = colorOrder;
    clickedOrder = [];

    for(let i in order) {
        let elementColor = createColorElement(order[i]);
        lightColor(elementColor, Number(i) + 1);
    }
}

// Acende a proxima cor
let lightColor = (element, number) => {
	number = number * 500;
	setTimeout(() => {
		element.classList.add('selected');
	}, number - 250);
	setTimeout(() => {
		element.classList.remove('selected');
	} );
}

// Compara se a ordem clicada e igual a ordem gerada
let checkOrder = () => {
	for(let i in clickedOrder) {
		if(clickedOrder[i] != order[i]) {
			gameOver();
			break;
		}
	}
	if(clickedOrder.length == order.length) {
		alert(`Pontuacao: ${score}\nVoce acertou! Inciando proximo nivel`);
		nextLevel();
	}
}

// funcao para o clique do usuario
let click = (color) => {
	clickedOrder[clickedOrder.length] = color;
	createColorElement(color).classList.add('selected');

	setTimeout(() => {
		createColorElement(color).classList.remove('selected');
		checkOrder();
	},250);
}

// criado funcao que retorna a cor
let createColorElement = (color) => {
	if (color == 0) {
		return green;
	} else if(color == 1) {
		return red;
	} else if (color == 2) {
		return yellow;
	} else if (color == 3) {
		return blue;
	}
}

// funcao para proximo nivel
let nextLevel = () => {
	score++;
	shuffleOrder();
}

//funcao para GAME OVER
let gameOver = () => {
	alert(`Pontuacao: ${score}!\nVoce perdeu!\nClique em Ok para jogar de novo`);
	order = [];
	clickedOrder = [];

	playGame();
}

// Funcao de inicio do jogo
let playGame = () => {
	alert('Bem vindo ao Genius! Iniciando novo jogo!');
	score = 0;

	nextLevel();
}

// Eventos de clique para as cores
green.onclick = () => click(0);
red.onclick = () => click(1);
yellow.onclick = () => click(2);
blue.onclick = () => click(3);


// Inicio do jogo
playGame();
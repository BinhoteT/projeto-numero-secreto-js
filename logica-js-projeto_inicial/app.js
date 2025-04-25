alert('Boas Vindas ao jogo do número secreto');
let numeroSecreto = 9;
console.log(numeroSecreto)
let chute = prompt('Escolha um número entre 1 e 30');

// se o chute for igual ao núemro secreto
if (chute == numeroSecreto ) {
    alert(`Isso ai! Você decobriu o ${numeroSecreto}`);
} else {
    alert('Você errou :(')
}
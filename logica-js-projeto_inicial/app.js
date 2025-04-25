alert('Boas Vindas ao jogo do número secreto');
let numeroSecreto = 5;
console.log(numeroSecreto)
let chute = prompt('Escolha um número entre 1 e 30');

// se o chute for igual ao núemro secreto
if (chute == numeroSecreto ) {
    alert(`Isso ai! Você decobriu o ${numeroSecreto}`);
} else {
    if (chute > numeroSecreto) {
        alert(`O número secreto é menor que ${chute}`);
    } else {
        alert(`O número secreto é maior que ${chute}`);
    }
}
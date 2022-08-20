const dt = new Date().toLocaleString();

document.getElementById("data").innerHTML = dt;


function FuncaoAviso() {
    alert('Este é apenas um painel de avisos!');
}

let tabuleiro = [0,0,0,0,0,0,0,0,0,0];

function jogar(bot) {
    if (tabuleiro[bot] == "0") {
        document.getElementById(bot).innerHTML = "X";
        tabuleiro[bot] = "X";
    } else {
        alert("Escolha outra posição!");
    }
    
}

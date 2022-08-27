const dt = new Date().toLocaleString();
const jogadas = 0;

document.getElementById("data").innerHTML = dt;


function FuncaoAviso() {
    alert('Este é apenas um painel de avisos!');
}

let tabuleiro = [0,0,0,0,0,0,0,0,0,0];

function jogar(bot) {
    if (jogadas < 10) {
        if (tabuleiro[0] != "1") {
            if (tabuleiro[bot] == "0") {
                document.getElementById(bot).innerHTML = "X";
                tabuleiro[bot] = "X";

                if (VerificaVitoria("X")) {
                    document.getElementById("data").innerHTML = "Você Ganhou!!";
                    tabuleiro[0] = "1";
                } else {
                    RoboJoga();
                    if (VerificaVitoria("O")) {
                        document.getElementById("data").innerHTML = "Você Perdeu!!";
                        tabuleiro[0] = "1";
                    }
                }


            } else {
                alert("Escolha outra posição!");
            }
        } else {
            alert("O jogo já acabou!");
        }
    } else {
        document.getElementById("data").innerHTML = "O jogo Empatou!";
        alert("O jogo empatou!");
    }
}
function VerificaVitoria(jogador) {
    if (tabuleiro[1] == jogador & tabuleiro[2] == jogador & tabuleiro[3] == jogador) {
        return true;
    } else if (tabuleiro[4] == jogador & tabuleiro[5] == jogador & tabuleiro[6] == jogador) {
        return true;
    } else if (tabuleiro[7] == jogador & tabuleiro[8] == jogador & tabuleiro[9] == jogador) {
        return true;
    } else if (tabuleiro[1] == jogador & tabuleiro[4] == jogador & tabuleiro[7] == jogador) {
        return true;
    } else if (tabuleiro[2] == jogador & tabuleiro[5] == jogador & tabuleiro[8] == jogador) {
        return true;
    } else if (tabuleiro[3] == jogador & tabuleiro[6] == jogador & tabuleiro[9] == jogador) {
        return true;
    } else if (tabuleiro[1] == jogador & tabuleiro[5] == jogador & tabuleiro[9] == jogador) {
        return true;
    } else if (tabuleiro[3] == jogador & tabuleiro[5] == jogador & tabuleiro[7] == jogador) {
        return true;
    } else {
        return false;
    }
}

function RoboJoga() {
    let val = Math.floor(Math.random() * 8) + 1;
        if (tabuleiro[val] == "0") {
            document.getElementById(val).innerHTML = "O";
            tabuleiro[val] = "O";
        } else{
            RoboJoga();
        }

  
}
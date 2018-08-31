var timerId = null; //variavel que armazena a chamada da função timeOut
function iniciar(){
    var url = window.location.search;
    var nivel = url.replace("?","");
    //1 -> 120 segundos
    //2 -> 60 segundos
    //3 -> 30 segundos
    var tempo = 0;
    if(nivel == 1){
        tempo = 120;
    }
    else if(nivel == 2){
        tempo = 60;
    }
    else{
        tempo = 30;
    }
    //inserindo segundos no span
    document.getElementById('cronometro').innerHTML = tempo;
    var qtd_baloes = 80;
    cria_baloes(qtd_baloes);
    //imprimir qtd baloes inteiros
    document.getElementById('baloes_inteiros').innerHTML = qtd_baloes;
    document.getElementById('baloes_estourados').innerHTML = 0;
    contagem_tempo(tempo);
}
function contagem_tempo(segundos){
    document.getElementById('cronometro').innerHTML = segundos;
    segundos = segundos - 1;

    if(segundos == -1){
        clearTimeout(timerId); //para a execução do setTimeout
        game_over();
        return false;
    }

    timerId = setTimeout("contagem_tempo("+segundos+")",1000);
}
function cria_baloes(qtde){
    for(var i = 1; i <= qtde; i++){
        var balao = document.createElement("img");
        balao.src = "imagens/balao_azul_pequeno.png";
        balao.style.margin = "10px";
        balao.id = 'b' + i;
        balao.onclick = function(){ estourar(this); }
        document.getElementById('cenario').appendChild(balao);
    }
}

function estourar(e){
    var id_balao = e.id;
    document.getElementById(id_balao).setAttribute("onclick","");
    document.getElementById(id_balao).src = 'imagens/balao_azul_pequeno_estourado.png'
    pontuacao(-1);
}

function pontuacao (acao){
    var baloes_inteiros = document.getElementById('baloes_inteiros').innerHTML;
    var baloes_estourados = document.getElementById('baloes_estourados').innerHTML;
    
    baloes_inteiros = parseInt(baloes_inteiros);
    baloes_estourados = parseInt(baloes_estourados);
    
    baloes_inteiros = baloes_inteiros + acao;
    baloes_estourados = baloes_estourados - acao;
    
    document.getElementById('baloes_inteiros').innerHTML = baloes_inteiros;
    document.getElementById('baloes_estourados').innerHTML = baloes_estourados;

    situacao(baloes_inteiros);
}

function game_over(){
    remove_eventos_baloes();
    alert('Fim de jogo');
}

function situacao(inteiros){
    if(inteiros == 0){
        alert ("parabains");
        parar_jogo();
    }
}

function parar_jogo(){
    clearTimeout(timerId);
}

function remove_eventos_baloes() {
    var i = 1; //contado para recuperar balões por id
    
    //percorre o lementos de acordo com o id e só irá sair do laço quando não houver correspondência com elemento
    while(document.getElementById('b'+i)) {
        //retira o evento onclick do elemnto
        document.getElementById('b'+i).onclick = '';
        i++; //faz a iteração da variávei i
    }
}

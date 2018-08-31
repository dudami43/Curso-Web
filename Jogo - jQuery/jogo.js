var rodada = 1;
var matriz_jogo = Array(3);

matriz_jogo['a'] = Array(3);
matriz_jogo['b'] = Array(3);
matriz_jogo['c'] = Array(3);

matriz_jogo['a'][1] = 0;
matriz_jogo['a'][2] = 0;
matriz_jogo['a'][3] = 0;

matriz_jogo['b'][1] = 0;
matriz_jogo['b'][2] = 0;
matriz_jogo['b'][3] = 0;

matriz_jogo['c'][1] = 0;
matriz_jogo['c'][2] = 0;
matriz_jogo['c'][3] = 0;

var velha = true;

$(document).ready(function()
{
    $('#btn-iniciar').click(function()
    {
        if($('#apelido1').val() == "" || $('#apelido2').val() == ""){
            alert ('Preencha ambos os apelidos');
            return false;
        }
        $('#jogador1').html($('#apelido1').val());
        $('#jogador2').html($('#apelido2').val());
        $('#inicio').hide();
        $('#jogo').show();
    }); 

    $('.jogada').click(function()
    {
        var id_campo_clicado = this.id;
        $('#' + id_campo_clicado).off();
        jogada(id_campo_clicado);
        if(velha())
        {
            alert ('velha');
        }
    });

    function jogada(id)
    {
        var icone = '';
        var ponto = 0;
        
        if((rodada % 2) == 1)
        {
            icone = 'url("imagens/marcacao_1.png")';
            ponto = -1;
        }
        else
        {
            icone = 'url("imagens/marcacao_2.png")';
            ponto = 1;
        }
        rodada ++;
        $('#'+id).css('background-image',icone);  
        var linha_coluna = id.split('-');
        matriz_jogo[linha_coluna[0]][linha_coluna[1]] = ponto;   
        combinacao();
    }

    function combinacao()
    {
        var pontos = 0;
        //verifica horizontal
        for(var i=1; i<=3; i++)
        {
            pontos = pontos + matriz_jogo['a'][i];
        }
        ganhador(pontos);
        pontos = 0;
        for(var i=1; i<=3; i++)
        {
            pontos = pontos + matriz_jogo['b'][i];
        }
        ganhador(pontos);
        pontos = 0;
        for(var i=1; i<=3; i++)
        {
            pontos = pontos + matriz_jogo['c'][i];
        }
        //verifica vertical
        for(var l =1; l<=3; l++)
        {
            pontos = 0;
            pontos += matriz_jogo['a'][l];
            pontos += matriz_jogo['b'][l];
            pontos += matriz_jogo['c'][l];
            ganhador(pontos);
        }
        //verifica diagonal
        pontos = 0;
        pontos = matriz_jogo['a'][1] + matriz_jogo['b'][2] + matriz_jogo['c'][3];
        ganhador(pontos);
        pontos = 0;
        pontos = matriz_jogo['a'][3] + matriz_jogo['b'][2] + matriz_jogo['c'][1];
        ganhador(pontos);
    }

    function ganhador(pontos)
    {
        if(pontos == -3)
        {
            var j1 = $('#apelido1').val();
            alert(j1 + ' venceu');
            $('.jogada').off();
        }
        else if(pontos == 3)
        {
            var j2 = $('#apelido2').val();
            alert(j2 + ' venceu');
            $('.jogada').off();
        }
    }

    function velha ()
    {
        for(var i=1; i<=3; i++)
        {
            if(matriz_jogo['a'][i] == "" || matriz_jogo['b'][i] == "" || matriz_jogo['c'][i] == "")
            {
                return false;
            }
        }
        return true;
    }
});
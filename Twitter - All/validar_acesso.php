<?php
    require_once('db.class.php');
    $user = $_POST['usuario'];
    $password = $_POST['senha'];

    $sql = "SELECT * FROM usuarios WHERE usuario = '$user' AND senha = '$senha'";

    $objDb = new db();
    $link = $objDb->conecta_mysql();

    $resultado_id = msqli_query($link, $sql);
    
    if($resultado_id)
    {
        $dados_usuario = msqli_fetch_array($resultado_id);
        if(isset($dados_usuario['usuario']))
        {
            echo 'Deu';
        }
        else
        {
            header('Location: index.php?erro=1');
        }
    }
    else
    {
        echo 'Erro na consulta, entre em contato com o admin do site';
    }
?>
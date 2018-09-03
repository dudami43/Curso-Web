<?php
    require_once('db.class.php');
    $user = $_POST['usuario'];
    $email = $_POST['email'];
    $password = $_POST['senha'];

    $objDb = new db();
    $link = $objDb->conecta_mysql();

    $sql = "INSERT INTO usuarios(usuario, email, senha) VALUES ('$user','$email','$senha')";

    if(msqli_query($link, $sql))
    {
        echo 'Usuário registrado com sucesso';
    }
    else
    {
        echo 'Erro ao registrar o usuário';
    }
?>
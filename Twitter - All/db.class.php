<?php

    class db
    {
        private $host = 'localhost';

        private $user = 'root';

        private $password = '';

        private $database = 'twitter';

        public function conecta_mysql()
        {
            $conn = mysqli_connect($this->host, $this->user, $this->password, $this->database);
            msqli_set_charset($conn,'utf8');

            if(msqli_connect_errno())
            {
                echo 'Erro ao conectar com o banco de dados: ' .msqli_connect_error();

            }
            return $con;
        }
}
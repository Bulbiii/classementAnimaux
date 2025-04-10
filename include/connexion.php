<?php
$env = parse_ini_file(".env");

define('SERVEUR_BD', $env["SERVER_DB"]);
define('LOGIN_BD', $env["LOGIN_DB"]);
define('PASS_BD', $env["PASSWORD_DB"]);
define('NOM_BD', $env["NAME_DB"]);
?>
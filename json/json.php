<?php

error_reporting(E_ALL);
ini_set('display_errors', '1');

include "../connect.php";
include "../crud.php";

$recupere = false;
$donnees = [];

if(isset($_GET['table']) && isset($_GET['type'])){
    $table = $_GET['table'];
    $type = $_GET['type'];
    
    if ($table == 'animaux') {
        if ($type == "byId" && isset($_GET['id'])) {
            $id = intval($_GET['id']);
            $donnees = [
                "options" => selectOptions($con, $id),
                "solution" => selectSolutions($con, $id),
                "photo" => selectPhoto($con, $id),
                "description" => selectDescr($con, $id)
            ];
            $recupere = true;
        }
    }
}




if($recupere){
    // Transforme le tableau associatif PHP en chaine JSON bien formé
    $donnees_str = json_encode($donnees);
    
    // Notifie la navigateur que le type de donnees est JSON
    header('Content-Type: application/json; charset=utf-8');
    
    // Ecrit les donnees au format JSON
    echo"${donnees_str}";
}else{
    $donnees_str = json_encode("erreur");//("erreur");
    header('Content-Type: application/json; charset=utf-8');
    echo"${donnees_str}";
}

include "../include/disconnect.php";
<?php

error_reporting(E_ALL);
ini_set('display_errors', '1');
?><?php
include "connect.php"; 
include "crud.php"; 

// Test de la fonction selectOptions()
$id_test = 31; 
$resultat = selectOptions($con, $id_test);
$res2 = selectPhoto($con, $id_test);
$res3 = selectSolutions($con, $id_test);
$res4 = selectDescr($con, $id_test);

echo "<pre>";
print_r($resultat); 
echo "</pre>";
echo "<pre>";
print_r($res2); 
echo "</pre>";
echo "<pre>";
print_r($res3); 
echo "</pre>";
echo "<pre>";
print_r($res4); 
echo "</pre>";


// Fermer la connexion à la base de données
mysqli_close($con);
?>

<?php

function selectOptions($con,$id){
    $result = mysqli_query($con,"SELECT choix1, choix2, choix3, choix4 from animaux WHERE id=$id");
    
    $tab=[] ; 
	while($row=mysqli_fetch_assoc($result)){
		$tab[]=$row ;	
	}
	return $tab;
}

function selectSolutions($con,$id){
    $result = mysqli_query($con,"SELECT solution from animaux WHERE id=$id");
    
    $tab=[] ; 
	while($row=mysqli_fetch_assoc($result)){
		$tab[]=$row ;	
	}
	return $tab;
}

function selectPhoto($con,$id){
    $result = mysqli_query($con,"SELECT photo from animaux WHERE id=$id");
    
    $tab=[] ; 
	while($row=mysqli_fetch_assoc($result)){
		$tab[]=$row ;	
	}
	return $tab;
}

function selectDescr($con,$id){
    $result = mysqli_query($con,"SELECT description from animaux WHERE id=$id");
    
    $tab=[] ; 
	while($row=mysqli_fetch_assoc($result)){
		$tab[]=$row ;	
	}
	return $tab;
}

function selectAllId($con){
	$result = mysqli_query($con, "SELECT id FROM animaux");

	$tab=[];
	while ($row=mysqli_fetch_assoc($result)){
		$tab[]=$row;
	}
	return $tab;
}

?>
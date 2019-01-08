<?php



/**************************************************************************

- Include this file on line #1 of the PHP page to be restricted.

- The file need not be removed while pushing the code to production.

**************************************************************************/



/********* Set these variables if required *********/

$auth_stage = true; 

$auth_prod = false; 



$domain_stage = "stage18.535e.blackmesh.com";



$valid_credentials = array(

    "preview" => "warnermusic",

    "reviewerWEA" => "Turbo777!"

);

/***************************************************/



$is_domain_stage = strpos($_SERVER['HTTP_HOST'], $domain_stage) !== false;

$is_domain_prod = !($is_domain_stage);



//if (($auth_stage && $is_domain_stage) || ($auth_prod && $is_domain_prod)) { 



	$valid_users = array_keys($valid_credentials);



	$user = $_SERVER['PHP_AUTH_USER'];

	$pass = $_SERVER['PHP_AUTH_PW'];



	$validated = (in_array($user, $valid_users)) && ($pass == $valid_credentials[$user]);



	if (!$validated) {

		header('WWW-Authenticate: Basic realm=""');

		header('HTTP/1.0 401 Unauthorized');

		die ("<h1>Not authorized</h1>");

	}

//}



?>
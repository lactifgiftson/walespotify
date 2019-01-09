<?php

	$schema = (@$_SERVER["HTTPS"] == "on") ? "https://" : "http://";
	if ($schema == "https://") {
    	$baseurl = "http://staging.weate.ch.stage18.535e.blackmesh.com/wbr/walePlaylist/";
	}else{
		$baseurl = "http://localhost/gitwork/walespotify/";
	}

?>
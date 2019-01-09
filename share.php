<?php
include('site-guard.php');
$pid = $_GET["pid"];
?>
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<meta name="description" content="">
		<meta name="author" content="">
		
		<!--script src="lib/bootstrap.min.js"></script>
		<script src="lib/underscore-min.js"></script-->
		<!--link type="text/css" href="css/style.css?d" rel="stylesheet" /-->
		<link type="text/css" href="css/style2.css?sdf" rel="stylesheet" />
		
		<title>Wale Spotify Playlist Gen</title>
		<script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.js"></script>
		<script src="https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js"></script>
		<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.css"/>
		<script src="js/jquery.ui.touch-punch.min.js"></script>
		<!--link rel="stylesheet" href="https://code.getmdl.io/1.3.0/material.orange-red.min.css" /-->
		<link href="https://fonts.googleapis.com/css?family=Oswald:300,400,700" rel="stylesheet">
		<!-- Custom styles for this template -->
		<!-- HTML5 shim and Respond.js IE8 support of HTML5 elements and media queries -->
		<!--[if lt IE 9]>
		<script src="https://oss.maxcd	n.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
		<script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
		<![endif]-->
	</head>
	<body class="page4">
		<div id="content-wrapper">
			<div class="full-wrapper">
						
				
				<div id="page4">
					<div class="left-wrapper">
						<div class="leftimage-wrapper"><img src="./images/leftimage.png" />
						</div>
					</div>
					<div class="right-wrapper">
						<div class="logo-wrapper"><img src="./images/walelogo.png" />
						</div>
						<div class="pagedesc">
							<div class="line1">
								HERE ARE MY TOP RACHET ANTHEMS
							</div>
							<div class="line2">
								
							</div>
						</div>
						<div class="playlistIframe">
							<div class="playlistContainerWrap">

								<div id="playlist-container">
									<iframe src="https://embed.spotify.com/?uri=spotify:playlist:<?php echo $pid ?>" width="100%" height="532" frameborder="0" allowtransparency="true"></iframe>
								</div>

								<div class="createwrapper">
									<div class="createplaylistbtn">
										<a href="http://staging.weate.ch.stage18.535e.blackmesh.com/wbr/walePlaylist/" id="createplaylist"><span>create your own here</span></a>
									</div>
								</div>
							</div>
						</div>

					</div>
				</div>
			</div>

			<div class="footer-wrapper">

				<div class="copyright-content">

					<span>© 2019 WARNER BROS. RECORDS AND WALE</span>
					<span class="seperator mob">|</span>
					<span class="contact-content"> <a href="http://www.warnerbrosrecords.com/privacy-policy" class="privacy-policy" target="_blank" title="Privacy-Policy">privacy policy</a><span class="seperator">|</span><a href="http://www.warnerbrosrecords.com/terms-of-use" class="terms-of-use" target="_blank" title="Terms-Of-use">terms of service</a><span class="seperator">|</span><a href="http://www.warnerbrosrecords.com/privacy-policy#adchoices" class="ad-choices" target="_blank" title="Ad-Choices">ad choices</a> </span>

				</div>

			</div>
		</div>

	</body>
	<script src="js/scripts1.js?s5s"></script>
</html>

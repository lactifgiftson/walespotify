<?php
include('site-guard.php');
?>
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<meta name="description" content="">
		<meta name="author" content="">
		
		<meta property="og:url" content="http://staging.weate.ch.stage18.535e.blackmesh.com/wbr/walePlaylist/" />
		<meta property="og:type" content="website" />
		<meta property="og:image" content="https://staging.weate.ch.stage18.535e.blackmesh.com/wbr/walePlaylist/images/walelogo.png" />
		<meta property="og:title" content="Wale playlist generator"/>
		<meta property="og:description" content="Create your own Wale playlist generator" />
		
		<meta name="twitter:card" content="summary">
        <meta name="twitter:site" content="@wale">
        <meta name="twitter:description" content="Create your own Wale playlist generator">
        <meta name="twitter:text:title" content="Wale playlist generator">
        <meta name="twitter:image" content="https://staging.weate.ch.stage18.535e.blackmesh.com/wbr/walePlaylist/images/walelogo.png">
		
		
		<!--script src="lib/bootstrap.min.js"></script>
		<script src="lib/underscore-min.js"></script-->
		<!--link type="text/css" href="css/style.css?d" rel="stylesheet" /-->
		<link type="text/css" href="css/style2.css?d" rel="stylesheet" />
		
		<title>Wale Spotify Playlist Gen</title>
		<script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.js"></script>
		<script src="https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js"></script>
		<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.css"/>
		<script src="http://setlist.brycevine.com/js/jquery.ui.touch-punch.min.js"></script>
		<!--link rel="stylesheet" href="https://code.getmdl.io/1.3.0/material.orange-red.min.css" /-->
		<link href="https://fonts.googleapis.com/css?family=Oswald:300,400,700" rel="stylesheet">
		<!-- Custom styles for this template -->
		<!-- HTML5 shim and Respond.js IE8 support of HTML5 elements and media queries -->
		<!--[if lt IE 9]>
		<script src="https://oss.maxcd	n.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
		<script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
		<![endif]-->
	</head>
	<body class="page1">
		<div id="content-wrapper">
			<div class="full-wrapper">
				<div id="page1">
					<div class="left-wrapper">
						<div class="leftimage-wrapper"><img src="./images/leftimage.png" />
						</div>
					</div>
					<div class="right-wrapper">
						<div class="logo-wrapper"><img src="./images/walelogo.png" />
						</div>
						<div class='' id='login-form'>
							<div class="line1">
								WE ALL GOT OUR GO-TO
							</div>
							<div class="line2">
								RATCHET ANTHEMS.
							</div>
							<div class="line3">
								WALE WANTS TO KNOW
							</div>
							<div class="line4">
								YOUR TOP 10.
							</div>
							<div class="loginbtn">
								<a href="javascript:void(0)" id="spotifyconnect" class="icon-spotify"><span>connect to spotify</span></a>
							</div>
							<div class="description">
								<p class="line1">
									*You will automatically follow Wale when you connect on
								</p>
								<p class="line2">
									Spotify, and agree to receive email updates from Wale.
								</p>
							</div>
						</div>
					</div>
				</div>

				<div id="page2" style="display:none;">
					<div class="left-wrapper">
						<div class="leftimage-wrapper"><img src="./images/leftimage.png" />
						</div>
					</div>
					<div class="right-wrapper">
						<div class="logo-wrapper"><img src="./images/walelogo.png" />
						</div>
						<div class="pagedesc">
							BUILD THE MOST LIT PLAYLIST
						</div>
						<div class="audioWrap">

							<div id="audio-wrapper" class="audio-wrapper">

								<audio id="audio-player" src="https://p.scdn.co/mp3-preview/c5bda3a0b14fa9971975cc544600a219b297a56a?cid=8d28f00ceedf421293be30737f212223"></audio>

								<div class="auido-controls">
									<div class="prev">
										<i class="icons-backward2"></i>
									</div>
									<div class="play-pause">
										<i class="icon-play2" style="display: inline;"></i>
										<i class="icon-pause" style="display: none;"></i>
									</div>
									<div class="next">
										<i class="icons-forward3"></i>
									</div>
								</div>
							</div>
							<div id="seekObjContainer">
								<div id="timeline">
									<div id="seekObj" class="playhead" style=""></div>
								</div>
								<!--small class="start-time">0:23</small><small class="end-time">0:30</small-->
							</div>
						</div>
						<div class="search-wrapper">
							<div class="searchbox">
								<div class="dummy">
									<input class="search" placeholder="Search">
									<a href="javascript:void(0)"></a>
								</div>

							</div>
						</div>
						<div class="playlist-wrapper">
							<div class="playlist">
								<div class="menuicon">
									<img src="./images/menubtn.png" class="menubtn" />
									<img src="./images/shufflebtn.png" class="shufflebtn" style="display:none;"/>
								</div>
								<div class="playlist-content">
									<div class="title">
										pole dancer
									</div>
									<div class="artistname">
										wale
									</div>
								</div>
							</div>
							<div class="playlist">
								<div class="menuicon">
									<img src="./images/menubtn.png" class="menubtn" />
									<img src="./images/shufflebtn.png" class="shufflebtn" style="display:none;"/>
								</div>
								<div class="playlist-content">
									<div class="title">
										pole dancer
									</div>
									<div class="artistname">
										wale
									</div>
								</div>
							</div>
						</div>
						<div class="savewrapper">
							<div class="saveplaylistbtn">
								<a href="javascript:void(0)" id="saveplaylist"><span>save playlist</span></a>
							</div>
						</div>
					</div>

				</div>
				<div id="page3" style="display:none;">
					<div class="left-wrapper">
						<div class="leftimage-wrapper"><img src="./images/leftimage.png" />
						</div>
					</div>
					<div class="right-wrapper">
						<div class="logo-wrapper"><img src="./images/walelogo.png" />
						</div>
						<div class="pagedesc">
							<div class="line1">
								SHARE YOUR PLAYLIST AND IMAGE
							</div>
							<div class="line2">
								TO SEE IF YOUR FRIENDS AGREE
							</div>
						</div>
						<div class="playlistIframe">
							<div class="playlistContainerWrap">

								<div id="playlist-container">
									<iframe src="https://embed.spotify.com/?uri=spotify:user:abinll:playlist:2kDCTALPxrao9IXYNOgnXh" width="100%" height="532" frameborder="0" allowtransparency="true"></iframe>
								</div>

								<div class="socialWrap">
									<div class="download-wrapper">
										<div class="title">DOWNLOAD</div>
									</div>
									<div class="share-wrapper">
										<div class="title">SHARE</div>
										
										<a href="javascript:void(0)" class="fb" onclick="postfeed(event);" title="Facebook-Share-Button"><i class="icon-facebook"></i></a>
										<a href="https://twitter.com/intent/tweet?text=Create%20your%20own%20perfect%20Bryce%20Vine%20setlist.&amp;url=http%3A%2F%2Fsetlist.brycevine.com%2Fshare.php%3Fq%3Dabinll%2C2kDCTALPxrao9IXYNOgnXh" class="tw"><i class="icon-twitter" title="Twitter-Share-Button"></i></a>
									</div>
								</div>
							</div>
						</div>

					</div>
				</div>
				<div id="page4" style="display:none;">
					<div class="left-wrapper">
						<div class="leftimage-wrapper"><img src="./images/leftimage.png" />
						</div>
					</div>
					<div class="right-wrapper">
						<div class="logo-wrapper"><img src="./images/walelogo.png" />
						</div>
						<div class="pagedesc">
							<div class="line1">
								HERE ARE THE TOP RACHET ANTHEMS
							</div>
							<div class="line2">
								
							</div>
						</div>
						<div class="playlistIframe">
							<div class="playlistContainerWrap">

								<div id="playlist-container">
									<iframe src="https://embed.spotify.com/?uri=spotify:user:abinll:playlist:2kDCTALPxrao9IXYNOgnXh" width="100%" height="532" frameborder="0" allowtransparency="true"></iframe>
								</div>

								<div class="createwrapper">
									<div class="createplaylistbtn">
										<a href="javascript:void(0)" id="createplaylist"><span>create your own here</span></a>
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
	<script src="js/scripts1.js?s7s"></script>
</html>

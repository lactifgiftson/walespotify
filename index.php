<?php

include ('site-guard.php');
?>
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<meta name="description" content="">
		<meta name="author" content="">

		<script src="lib/jquery-1.11.1.min.js"></script>
		<script src="lib/bootstrap.min.js"></script>
		<script src="lib/underscore-min.js"></script>

		
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
		<link type="text/css" href="css/style2.css?s11d" rel="stylesheet" />

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
		<script src="https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js"></script>
		<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.css"/>
		<script src="js/jquery.ui.touch-punch.min.js"></script>
		<link href="css/jquery.flexdatalist.min.css" rel="stylesheet" type="text/css">
		<script src="js/jquery.flexdatalist.min.js"></script>
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
								<div id="song-playing" class="song-playing"></div>
								<small class="start-time">0:00</small><small class="end-time">0:00</small>
								<!--small class="start-time">0:23</small><small class="end-time">0:30</small-->
							</div>
						</div>
						<div class="search-wrapper">
							<div class="searchbox">
								<div class="dummy">
									<input id="" type='text'
									value = "4ZiwTg2KE4ejWWQRFg0u3U"
									placeholder=""
									class='flexdatalist mdl-textfield mdl-js-textfield mdl-textfield--floating-label search'
									data-min-length='1'
									multiple='multiple'
									list='myplaylist'
									name='language12'>

									<a href="javascript:void(0)"></a>
								</div>
								<datalist id="myplaylist">

								</datalist>
								<script>
									$('.flexdatalist').flexdatalist({
										minLength : 0,
										limitOfValues : 9,
										valueProperty : 'value',
										searchContain : true
									});
								</script>
							</div>
						</div><h3 id='info' class="h1 text-center"></h3>
						<div class="playlist-wrapper" id="data-table-wrapper1">
							<div class="playlist note" rel="https://i.scdn.co/image/318980cd1f2af273e611fdaae3f08bb35a09e9fc" id="4ZiwTg2KE4ejWWQRFg0u3U">
								<div class="menuicon"><img src="./images/menubtn.png" class="menubtn">
								</div>

								<div rel="https://p.scdn.co/mp3-preview/c7afdbecb043894c8afeeaa565e4173022f5edfc?cid=3db31354b1754d139fa4e2dc4d52aab9" class="song-wrapper playlist-content">
									<div class="song-details-wrap">
										<div class="song-title" data-album-name="Strip Club Musik">
											<span class="title">Hennessy Wit No Draws</span>
											<span class="close-list" id="4ZiwTg2KE4ejWWQRFg0u3U">Delete</span>
										</div>
										<div class="artist-name">
											Dopetrackz
										</div>
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
										<div class="title">
											DOWNLOAD
										</div>
										<canvas id="myCanvas" width="300" height="300"></canvas>
									</div>
									<div class="share-wrapper">
										<div class="title">
											SHARE
										</div>

										<a href="javascript:void(0)" class="fb" onclick="postfeed(event);" title="Facebook-Share-Button"><i class="icon-facebook"></i></a>
										<a href="#" class="tw"><i class="icon-twitter" title="Twitter-Share-Button"></i></a>
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
		<div class="officialrules_wrapper">
			<div class="officialrules">
				<button class="button-small button-cross" style="position: absolute;top: -11px;right: -11px;"></button>
				Also, by clicking submit, I agree to receive to receive personalized updates and marketing messages about Wale Music and about similar artists, products and offers, based on my information, interests, activities, website visits, and device data and in accordance with the <a href="http://www.warnerbrosrecords.com/privacy-policy" target="_blank" class="external-link" rel="nofollow" title="Follow link">Privacy&nbsp;Policy</a>. I understand I can opt-out at any time by emailing <a href="mailto:privacypolicy@wmg.com" target="_blank">privacypolicy@wmg.com</a>
				<span class="buttons"> <a href="javascript:void(0);" class="submitButton">Submit</a> </span>
			</div>
		</div>
	</body>
	<script src="js/scripts1.js?s9s"></script>
</html>

/** share scripts **/
var baseURL = "http://staging.weate.ch.stage18.535e.blackmesh.com/wbr/walePlaylist/";

window.fbAsyncInit = function() {
		// init the FB JS SDK
		FB.init({
			appId : '407045793367858',                      // App ID from the app dashboard
			status : true, // Check Facebook Login status
			xfbml : true // Look for social plugins on the page
		});

		// Additional initialization code such as adding Event Listeners goes here
	};

	// Load the SDK asynchronously
	( function(d, s, id) {
			var js,
			    fjs = d.getElementsByTagName(s)[0];
			if (d.getElementById(id)) {
				return;
			}
			js = d.createElement(s);
			js.id = id;
			js.src = "//connect.facebook.net/en_US/all.js";
			fjs.parentNode.insertBefore(js, fjs);
		}(document, 'script', 'facebook-jssdk')); 
		
function postfeed() {
		event.preventDefault();
		//var path = window.location;
		//var fullPath = path.origin + path.pathname;
		//console.log(fullPath);
        var customtitle = "Create a new Wale Playlist";
        var ogimg = baseURL+"images/walelogo.png";
        var obj = {
			app_id : "407045793367858",
            method: "feed",
			picture : ogimg,
			link: baseURL+"share.php?cache", 
			name: customtitle,
            description: customtitle,
			display: "popup"  
        };

        FB.ui(obj);

        return false;
}

! function (d, s, id) {

    var js,

        fjs = d.getElementsByTagName(s)[0],

        p = /^http:/.test(d.location) ? 'http' : 'https';

    if (!d.getElementById(id)) {

        js = d.createElement(s);

        js.id = id;

        js.src = p + '://platform.twitter.com/widgets.js?12';

        fjs.parentNode.insertBefore(js, fjs);

    }

}(document, 'script', 'twitter-wjs');

/*var customtitle = '';

    var twitterURL = 'https://twitter.com/intent/tweet?original_referer=walemusic.com&text=' + encodeURIComponent(customtitle);

    jQuery('#page3 .socialWrap a.tw').attr('href', twitterURL);*/

TwshareURL = baseURL + "share.php?cache"
twitterShare();
function twitterShare() {
    var href = 'https://twitter.com/intent/tweet?text=' + encodeURIComponent("Create your own perfect wale Playlist.") + '&url=' + encodeURIComponent(TwshareURL);
    jQuery("#page3 .socialWrap a.tw").attr("href", href);
}
/** common scripts **/

document.getElementById("spotifyconnect").addEventListener("click", function(){
  	jQuery("#page1,#page3,#page4").fadeOut();
	jQuery("#page2").fadeIn();
	document.getElementsByTagName("body")[0].classList.add("page2");
});

document.getElementById("saveplaylist").addEventListener("click", function(){
	document.getElementsByTagName("body")[0].removeAttribute("class");
  	jQuery("#page1,#page2,#page4").fadeOut();
	jQuery("#page3").fadeIn();
	document.getElementsByTagName("body")[0].classList.add("page3");
});
/*document.getElementById("spotifyconnect").addEventListener("click", function(){
	document.getElementsByTagName("body")[0].removeAttribute("class");
  	jQuery("#page1,#page2,#page3").fadeOut();
	jQuery("#page4").fadeIn();
	document.getElementsByTagName("body")[0].classList.add("page4");
});*/

jQuery(document).ready(function(){
	
	jQuery(".icon-play2").click(function(){
		jQuery(this).hide();
		jQuery(".icon-pause").show();
	});
	jQuery(".icon-pause").click(function(){
		jQuery(this).hide();
		jQuery(".icon-play2").show();
	});
	
});
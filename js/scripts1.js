var credentials = null;

var MaxTracks = 10;

var wholeTrackData = {};

var pid = "";

var TwshareURL = "";

var FBshareURL = "";

var FBshareURL1 = "";

wholeTrackData["4ZiwTg2KE4ejWWQRFg0u3U"] = {

    "albumname": "Strip Club Musik",

    "artist": "Dopetrackz",

    "id": "4ZiwTg2KE4ejWWQRFg0u3U",

    "name": "Hennessy Wit No Draws",

    "preview_url": "https://p.scdn.co/mp3-preview/c7afdbecb043894c8afeeaa565e4173022f5edfc?cid=3db31354b1754d139fa4e2dc4d52aab9",

    "track_number": 8

}

var finalTraclList = [];

/** share scripts **/

var baseURL = "http://staging.weate.ch.stage18.535e.blackmesh.com/wbr/walePlaylist/";

window.fbAsyncInit = function() {

    // init the FB JS SDK

    FB.init({

        appId: '407045793367858', // App ID from the app dashboard

        status: true, // Check Facebook Login status

        xfbml: true // Look for social plugins on the page

    });

    // Additional initialization code such as adding Event Listeners goes here

};

function getTime() {

    return Math.round(new Date().getTime() / 1000);

}

function callSpotify(url, data) {

    return $.ajax(url, {

        dataType: 'json',

        data: data,

        headers: {

            'Authorization': 'Bearer ' + credentials.token

        }

    });

}

// Load the SDK asynchronously

(function(d, s, id) {

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

function postfeed(pid) {

    // event.preventDefault();

    //var path = window.location;

    //var fullPath = path.origin + path.pathname;

    //console.log(fullPath);

    var customtitle = "Create a new Wale Playlist";

    var ogimg = baseURL + "images/walelogo.png";

    var obj = {

        app_id: "407045793367858",

        method: "feed",

        picture: ogimg,

        link: FBshareURL,

        name: customtitle,

        description: customtitle,

        display: "popup"

    };

}

function millisToMinutesAndSeconds(millis) {

    var minutes = Math.floor(millis / 60000);

    var seconds = ((millis % 60000) / 1000).toFixed(0);

    return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;

}

var updateValueView = function($target) {

    $target.each(function() {

        $(this).parent().find('.input-value span').html('<code>' + $(this).val() + '</code>');

    });

    $("#data-table-wrapper1").sortable({

        items: '> div:not(.note)',

        start: function(e, ui) {

            $(this).attr('data-previndex', ui.item.index());

        },

        stop: function(e, ui) {

            var newIndex = ui.item.index();

            var oldIndex = $(this).attr('data-previndex');

            //alert('old position = '+oldIndex+' new position = '+newIndex);

            //finalTraclList.swap( oldIndex, newIndex );

            var item_to_be_moved = finalTraclList[oldIndex];

            console.log(item_to_be_moved);

            finalTraclList.splice(oldIndex, 1);

            console.log(finalTraclList);

            finalTraclList.splice(newIndex, 0, item_to_be_moved);

            //console.log(finalTraclList);

            /*finalTraclList[oldIndex] = finalTraclList.splice(newIndex, 1, finalTraclList[oldIndex])[0];*/

            $(this).removeAttr('data-previndex');

        }
    });

};

function addItem() {

    var my_json;

    $.ajax({

        dataType: "json",

        url: "http://staging.weate.ch.stage18.535e.blackmesh.com/wbr/wale/middletier/wale/results.json?sdf",

        success: function(item) {

            jQuery.each(item, function(i, item) {

                if (item.preview_url != null) {

                    var appendHTML = $("<option rel=" + item.album.name + " value='" + item.uri.split(":")[2] + "'>" + item.name + "</option>");

                    var title = $("<td>").append($("<a>").attr('href', item.uri).text(item.name));

                    var tracks = $("<td>").text(millisToMinutesAndSeconds(item.duration_ms));

                    var who = $("<td>").text(item.album.name);

                    $("#myplaylist").append(appendHTML);

                    for (var l = 0; l < MaxTracks; l++) {

                        wholeTrackData[item.id] = {};

                        wholeTrackData[item.id]["id"] = item.id;

                        wholeTrackData[item.id]["artist"] = item.artists[0].name;

                        wholeTrackData[item.id]["albumname"] = item.album.name;

                        wholeTrackData[item.id]["name"] = item.name;

                        wholeTrackData[item.id]["preview_url"] = item.preview_url;

                        wholeTrackData[item.id]["track_number"] = item.track_number;

                        wholeTrackData[item.id]["image_url"] = item.album.images[1].url;

                        //generateHTML(item.id, item.name, item.artists[0].name, item.album.name);

                    }

                }

            });

        }
    });

}

// Load the SDK asynchronously

(function(d, s, id) {

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

function postfeed(pid) {

    //event.preventDefault();

    var path = window.location;

    var fullPath = path.origin + path.pathname;

    console.log(fullPath);

    var customtitle = "Create a new Wale Playlist";

    var ogimg = fullPath + "/playlist-share/" + pid + ".png";

    var obj = {

        app_id: "407045793367858",

        method: "feed",

        picture: ogimg,

        link: FBshareURL,

        name: customtitle,

        description: customtitle,

        display: "popup"

    };

    FB.ui(obj);

    return false;

}! function(d, s, id) {

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

function twitterShare() {

    var href = 'https://twitter.com/intent/tweet?text=' + encodeURIComponent("Create your own perfect Wale Music playlist.") + '&url=' + encodeURIComponent(TwshareURL);

    jQuery("a.tw").attr("href", href);

    var href = 'https://twitter.com/intent/tweet?text=' + encodeURIComponent("Create your own perfect Wale Music Playlist.") + '&url=' + encodeURIComponent(TwshareURL);

    jQuery("#page3 .socialWrap a.tw").attr("href", href);

}

/** common scripts **/

document.getElementById("saveplaylist").addEventListener("click", function() {

});

/*document.getElementById("spotifyconnect").addEventListener("click", function(){

 document.getElementsByTagName("body")[0].removeAttribute("class");

 jQuery("#page1,#page2,#page3").fadeOut();

 jQuery("#page4").fadeIn();

 document.getElementsByTagName("body")[0].classList.add("page4");

 });*/

function loginWithSpotify() {

    var client_id = '3db31354b1754d139fa4e2dc4d52aab9';

    var redirect_uri = 'http://staging.weate.ch.stage18.535e.blackmesh.com/wbr/walePlaylist/index.php';

    var scopes = 'user-read-private user-read-email user-follow-modify playlist-modify-public ugc-image-upload  playlist-modify-private';

    if (document.location.hostname == 'localhost') {

        redirect_uri = 'http://localhost/gitwork/walespotify/index.php';

    }

    var url = 'https://accounts.spotify.com/authorize?client_id=' + client_id + '&response_type=token' + '&scope=' + encodeURIComponent(scopes) + '&redirect_uri=' + encodeURIComponent(redirect_uri);

    document.location = url;

}

function generateHTML(trackId) {

    id = wholeTrackData[trackId]["id"];

    songTitle = wholeTrackData[trackId]["name"];

    sungBy = wholeTrackData[trackId]["artist"];

    albumName = wholeTrackData[trackId]["albumname"];

    preview = wholeTrackData[trackId]["preview_url"];

    imageURL = wholeTrackData[trackId]["image_url"];

    var htmlDOM = "<div class='playlist' rel='" + imageURL + "' id='" + trackId + "'><div class='menuicon'><img src='./images/menubtn.png' class='menubtn' /></div><div rel='" + preview + "' class='song-wrapper playlist-content'><div class='song-details-wrap'><div class='song-title' data-album-name='" + albumName + "'><span class='title'>" + songTitle + "</span><span class='close-list' id='" + trackId + "'>X</span></div><div class='artist-name'>" + sungBy + "</div></div></div></div>"

    var songPlaying = jQuery(".playlist-wrapper div.playlist:first .song-details-wrap").html();

    jQuery(htmlDOM).appendTo(".playlist-wrapper");

    // jQuery(".playlist-button").appendTo(".playlist-wrapper");

    jQuery("div#data-table,.audio-wrapper").show();

    if (!jQuery('#song-playing').html()) {

        jQuery(".song-playing").append(songPlaying);

    }

    jQuery('span.close-list').click(function() {

        jQuery(this).parents("div.playlist").remove();

        if ($("#data-table-wrapper1 div.playlist").length < 10) {

            $(".flexdatalist-multiple li.input-container").addClass("showit");
            setTimeout(function() { $(".flexdatalist-multiple li.input-container,.searchbox .dummy").show(); }, 300);


        } else {

            $(".flexdatalist-multiple li.input-container").removeClass("showit");

        }

        console.info(jQuery(this).parents("li").find("span.text").text());

        jQuery('ul.flexdatalist-multiple li:contains("' + jQuery(this).parents("li").find("span.title").text() + '")').find(".fdl-remove").click();

    });

}

function playSongOnTitleClick(selectedtitleIndex) {

    var titleIndex = selectedtitleIndex;

    if (!jQuery("#data-table-wrapper1 div.playlist").eq(titleIndex).hasClass("active")) {

        jQuery("#data-table-wrapper1 div.playlist").removeClass("active");

        jQuery("#data-table-wrapper1 div.playlist").eq(titleIndex).addClass("active");

        var currentTitle = jQuery("#data-table-wrapper1 div.playlist").eq(titleIndex).find('.song-title').text();

        var songId1 = jQuery("#data-table-wrapper1 div.playlist").eq(titleIndex).attr("id");

        playSong(titleIndex, songId1);

    }

} /*Play Next Song*/

function registerForEmail(email, dSrc) {

    //jQuery('#webform-client-form-21491 #ajaxLoader').show();

    var signupURL = 'https://signup.wmg.com/register';

    var newsletterID = '7882400';

    var EntryType = "SpotifyEntry";

    var dataSource = "Wale_PlaylistGenerator_FollowButton_Spotify";

    var ext = 'A7349441-0B11-4DFF-B52D-49DE9991E92D:6011002';

    var signUpRequestUrl = signupURL + '?geoip=true&email=' + email + '&newsletterId=' + newsletterID + '&Datasource=' + dataSource + '&autoreply=no&jsonp=webformCallback&jsoncallback=?';

    var script = document.createElement('script');

    script.type = 'text/javascript';

    var src = signUpRequestUrl;

    script.src = src;

    try {

        jQuery('body').append(script);

    } catch (err) {

        // Skip error as this will be take care by the alertTimeoutError method.

        // alert(err);

        setTimeout("alertTimeoutError()", 10000);

        // wait for 10 seconds

    }

}

function performAuthDance() {

    // if we already have a token and it hasn't expired, use it,

    if ('credentials' in localStorage) {

        credentials = JSON.parse(localStorage.credentials);

    }

    if (credentials && credentials.expires > getTime()) {

        $.ajax({

            url: 'https://api.spotify.com/v1/me',

            headers: {

                'Authorization': 'Bearer ' + credentials.token

            },

            success: function(response) {

                userEmail = response.email;

                //alert("follow");

                $.ajax({

                    url: 'https://api.spotify.com/v1/me/following?type=artist&ids=67nwj3Y5sZQLl72VNUHEYE',

                    type: 'PUT',

                    async: false,

                    headers: {

                        'Authorization': 'Bearer ' + credentials.token,

                        'Content-Type': 'application/json'

                    },

                    success: function(r) {

                        console.log(r);

                        registerForEmail(userEmail, "test");

                    }
                });

                $('#login').hide();

                $('#loggedin').show();

                console.log("After login");

            }
        });

        jQuery("#page1,#page3,#page4").fadeOut();

        jQuery("#page2").fadeIn();

        document.getElementsByTagName("body")[0].classList.add("page2");

        jQuery('.officialrules_wrapper').fadeOut();

        addItem();

    } else {

        // we have a token as a hash parameter in the url

        // so parse hash

        var hash = location.hash.replace(/#/g, '');

        var all = hash.split('&');

        var args = {};

        all.forEach(function(keyvalue) {

            var idx = keyvalue.indexOf('=');

            var key = keyvalue.substring(0, idx);

            var val = keyvalue.substring(idx + 1);

            args[key] = val;

        });

        if (typeof(args['access_token']) != 'undefined') {

            var g_access_token = args['access_token'];

            var expiresAt = getTime() + 3600;

            if (typeof(args['expires_in']) != 'undefined') {

                var expires = parseInt(args['expires_in']);

                expiresAt = expires + getTime();

            }

            credentials = {

                token: g_access_token,

                expires: expiresAt

            }

            callSpotify('https://api.spotify.com/v1/me').then(function(user) {

                credentials.user_id = encodeURIComponent(user.id);

                localStorage['credentials'] = JSON.stringify(credentials);

                location.hash = '';

                jQuery("#page1,#page3,#page4").fadeOut();

                jQuery("#page2").fadeIn();

                $.ajax({

                    url: 'https://api.spotify.com/v1/me',

                    headers: {

                        'Authorization': 'Bearer ' + credentials.token

                    },

                    success: function(response) {

                        userEmail = response.email;

                        $.ajax({

                            url: 'https://api.spotify.com/v1/me',

                            headers: {

                                'Authorization': 'Bearer ' + credentials.token

                            },

                            success: function(response) {

                                userEmail = response.email;

                                //alert("follow");

                                $.ajax({

                                    url: 'https://api.spotify.com/v1/me/following?type=artist&ids=67nwj3Y5sZQLl72VNUHEYE',

                                    type: 'PUT',

                                    async: false,

                                    headers: {

                                        'Authorization': 'Bearer ' + credentials.token,

                                        'Content-Type': 'application/json'

                                    },

                                    success: function(r) {

                                        console.log(r);

                                        registerForEmail(userEmail, "test");

                                    }
                                });

                                $('#login').hide();

                                $('#loggedin').show();

                                console.log("After login");

                            }
                        });

                        $('#login').hide();

                        $('#loggedin').show();

                        console.log("After login");

                    }
                });

                document.getElementsByTagName("body")[0].classList.add("page2");

                addItem();

            }, function() {

                error("Can't get user info");

            });

        } else {

            // otherwise, got to spotify to get auth

            $("#login-form").show();

        }

    }

}

function calculateTotalValue(length) {

    var minutes = Math.floor(length / 60);

    var seconds_int = length - minutes * 60;

    if (seconds_int < 10) {

        seconds_int = "0" + seconds_int;

    }

    var seconds_str = seconds_int.toString();

    var seconds = seconds_str.substr(0, 2);

    var time = minutes + ':' + seconds;

    return time;

}

function timeCal() {

    var width = jQuery("#timeline").width();

    var length = audioElement.duration;

    var current_time = audioElement.currentTime;

    var totalLength = calculateTotalValue(length);

    if (totalLength == "NaN:Na") {

        jQuery(".end-time").html("0:00");

    } else {

        jQuery(".end-time").html(totalLength);

    }

    var currentTime = calculateCurrentValue(current_time);

    jQuery(".start-time").html(currentTime);

    var progressbar = document.getElementById("seekObj");

    progressbar.style.marginLeft = width * (audioElement.currentTime / audioElement.duration) + "px";

}

function playPauseSong() {

    var activeIndex;

    if (!jQuery("#data-table-wrapper1 div.playlist").hasClass("active")) {

        jQuery("#data-table-wrapper1 div.playlist").first().addClass("active");

        var songId8 = jQuery("#data-table-wrapper1 div.playlist").eq(jQuery("#data-table-wrapper1 div.playlist").first().index()).attr("id");

        playSong(jQuery("#data-table-wrapper1 div.playlist").first().index(), songId8);

        //CallOmniture('Wale Music: Spotify Playlist Generator:Landing:Step 2:Play Song (player) Click');

    } else {

        jQuery("#data-table-wrapper1 div.playlist").each(function() {

            if (jQuery(this).hasClass("active")) {

                activeIndex = jQuery(this).index();

            }

        });

        //playSong(activeIndex);

        audioElement.play();

        showPauseicon();

        //CallOmniture('Wale Music: Friends Spotify Playlist Generator:Landing:Step 2:Play Song (player) Click');

    }

    if (!audioElement.paused && !isPause) {

        audioElement.pause();

        showPlayicon();

    }

    if (audioElement.paused && !isPlaying) {

        audioElement.play();

        showPauseicon();

    }

}

/*Play Next Song*/

function playNextSong() {

    var nextIndex;

    if (jQuery("#data-table-wrapper1 div.playlist").hasClass("active")) {

        jQuery("#data-table-wrapper1 div.playlist").each(function() {

            if (jQuery(this).hasClass("active")) {

                nextIndex = jQuery(this).index();

                jQuery(this).removeClass("active");

            }

        });

        if (nextIndex == (jQuery("#data-table-wrapper1 div.playlist").length - 1)) {

            jQuery("#data-table-wrapper1 div.playlist").eq(jQuery("#data-table-wrapper1 div.playlist").first().index()).addClass("active");

            var songId4 = jQuery("#data-table-wrapper1 div.playlist").eq(jQuery("#data-table-wrapper1 div.playlist").first().index()).attr("id");

            playSong(jQuery("#data-table-wrapper1 div.playlist").first().index(), songId4);

        } else {

            nextIndex += 1;

            jQuery("#data-table-wrapper1 div.playlist").eq(nextIndex).addClass("active");

            var songId5 = jQuery("#data-table-wrapper1 div.playlist").eq(nextIndex).attr("id");

            playSong(nextIndex, songId5);

        }

    } else {

        jQuery("#data-table-wrapper1 div.playlist").first().addClass("active");

        var songId6 = jQuery("#data-table-wrapper1 div.playlist").eq(jQuery("#data-table-wrapper1 div.playlist").first().index()).attr("id");

        playSong(jQuery("#data-table-wrapper1 div.playlist").first().index(), songId6);

    }

} /*Play prev Song*/

function playPrevSong() {

    var prevIndex;

    if (jQuery("#data-table-wrapper1 div.playlist").hasClass("active")) {

        jQuery("#data-table-wrapper1 div.playlist").each(function() {

            if (jQuery(this).hasClass("active")) {

                prevIndex = jQuery(this).index();

                jQuery(this).removeClass("active");

            }

        });

        if (prevIndex == 0) {

            jQuery("#data-table-wrapper1 div.playlist").eq(jQuery("#data-table-wrapper1 div.playlist").last().index()).addClass("active");

            var songId7 = jQuery("#data-table-wrapper1 div.playlist").eq(jQuery("#data-table-wrapper1 div").last().index()).attr("id");

            playSong(jQuery("#data-table-wrapper1 div.playlist").last().index(), songId7);

        } else {

            prevIndex -= 1;

            jQuery("#data-table-wrapper1 div.playlist").eq(prevIndex).addClass("active");

            var songId8 = jQuery("#data-table-wrapper1 div.playlist").eq(prevIndex).attr("id");

            playSong(prevIndex, songId8);

        }

    } else {

        jQuery("#data-table-wrapper1 div.playlist").first().addClass("active");

        var songId2 = jQuery("#data-table-wrapper1 div.playlist").eq(jQuery("#data-table-wrapper1 div.playlist").first().index()).attr("id");

        playSong(jQuery("#data-table-wrapper1 div.playlist").first().index(), songId2);

        var songId3 = jQuery("#data-table-wrapper1 div.playlist").eq(prevIndex).attr("id");

        playSong(prevIndex, songId3);

    }

} /*Show Playicon*/

function playSong(songIndex, songId) {

    var selectedSong = wholeTrackData[songId];

    var selectedSongHTML = jQuery("#data-table-wrapper1 div.playlist#" + songId + " .song-details-wrap").html();

    jQuery(".song-playing").empty();

    if ((selectedSong.preview_url == "") || (selectedSong.preview_url == null) || (selectedSong.preview_url == " ") || (selectedSong.preview_url == "null")) {

        jQuery('#preview_error').text('No preview available for this track.');

        jQuery('#preview_error').addClass('previewHide');

        jQuery('#audio-wrapper').hide();

        jQuery('#seekObjContainer').hide();

        jQuery('#song-playing').hide();

        audioElement.setAttribute("src", "");

        //audioElement.pause();

    } else {

        jQuery('#preview_error').text('');

        jQuery('#preview_error').removeClass('previewHide');

        jQuery('#audio-wrapper').show();

        jQuery('#seekObjContainer').show();

        jQuery('#song-playing').show();

        if (wholeTrackData[songId]["track_number"]) {

            trackURL = $("div#" + songId + " .song-wrapper").attr("rel");

        } else {

            trackURL = $("=div#" + songId + " .song-wrapper").attr("rel");

        }

        audioElement.setAttribute("src", trackURL);

        audioElement.play();

        showPauseicon();

    }

    jQuery(".song-playing").append(selectedSongHTML);

    $("body, html").animate({

        scrollTop: $(".audioWrap").offset().top

    }, 500);

} /*Play Pasue Song*/

/*Show Pauseicon*/

function showPauseicon() {

    jQuery("i.icon-play2").hide();

    jQuery("i.icon-pause").show();

}

function info(s) {

    $("#info").text(s);

}

function toDataURL(url, callback) {

    var xhr = new XMLHttpRequest();

    xhr.onload = function() {

        var reader = new FileReader();

        reader.onloadend = function() {

            callback(reader.result);

        }

        reader.readAsDataURL(xhr.response);

    };

    xhr.open('GET', url);

    xhr.responseType = 'blob';

    xhr.send();

}

function postSpotifyImage(typeOfAjax, playlist, url, json, callback) {

    var dataUrl = document.getElementById("myCanvas").toDataURL('image/jpeg', 1.0).split(',')[1];
    var imgURL = document.getElementById("myCanvasLarge").toDataURL('image/jpeg', 1.0);

    $('.navbar').append('<img src="' + imgURL + '" /><br/><br/>');

    //var downloadSrc =  canvas.toDataURL();

    $("#download-final-image").attr("href", imgURL);

    console.log(imgURL);

    $.ajax(url, {

        type: "PUT",

        data: dataUrl,

        dataType: typeOfAjax,

        headers: {

            'Authorization': 'Bearer ' + credentials.token,

            'Content-Type': 'image/jpeg'

        },

        body: dataUrl,

        success: function(r) {

            callback(true, r);

        },

        error: function(r) {

            // 2XX status codes are good, but some have no

            // response data which triggers the error handler

            // convert it to goodness.

            if (r.status >= 200 && r.status < 300) {

                callback(true, r);

            } else {

                callback(false, r);

            }

        }
    })

}

function postSpotify(type, url, json, callback) {

    $.ajax(url, {

        type: "POST",

        data: JSON.stringify(json),

        dataType: type,

        headers: {

            'Authorization': 'Bearer ' + credentials.token,

            'Content-Type': 'application/json'

        },

        success: function(r) {

            callback(true, r);

        },

        error: function(r) {

            // 2XX status codes are good, but some have no

            // response data which triggers the error handler

            // convert it to goodness.

            if (r.status >= 200 && r.status < 300) {

                callback(true, r);

            } else {

                callback(false, r);

            }

        }
    });

}

function showPlayicon() {

    //jQuery("i.icons-play3").show();

    // jQuery("i.icons-pause2").hide();

    jQuery("i.icon-play2").show();

    jQuery("i.icon-pause").hide();

} /*Show Pauseicon*/

function calculateCurrentValue(currentTime) {

    var current_hour = parseInt(currentTime / 3600) % 24,

        current_minute = parseInt(currentTime / 60) % 60,

        current_seconds_long = currentTime % 60,

        current_seconds = current_seconds_long.toFixed(),

        current_time = (current_minute) + ":" + (current_seconds < 10 ? "0" + current_seconds : current_seconds);

    return current_time;

} /*Copy clipboard Call*/

function saveTidsToPlaylist(playlist, tids) {

    var url = "https://api.spotify.com/v1/playlists/" + playlist.id + "/tracks";

    postSpotify("json", url, {

        uris: tids

    }, function(ok, data) {

        if (ok) {

            info("Playlist saved");

            $("#ready-to-save").hide(100);

            $("#playlist-name").attr('href', playlist.uri);

        } else {

            error("Trouble saving to the playlist");

        }

    });

}

function saveImage(pid, image) {
    var renderedImg = image;
    $.ajax({
        type: "POST",
        url: "save.php",
        data: {
            base64Img: renderedImg,
            pid: pid
        }
    }).done(function(o) {
        console.log("saved")
        console.log(renderedImg);
    })
}

function savePlaylist() {

    var title = getPlaylistTitle();

    var tids = [];

    var topTracks = [];

    //topTracks = $("input[name ='language12']").val().split(",");

    $("#data-table-wrapper1 div.playlist").each(function() {

        if ($(this).attr("id") != "")

            topTracks += $(this).attr("id") + ",";

    });

    topTracks = topTracks.split(",");

    _.each(topTracks, function(track, i) {

        if (topTracks[i] != "")

            tids.push("spotify:track:" + track);

        //console.log("tids" + tids);

    });

    var url = "https://api.spotify.com/v1/users/" + credentials.user_id + "/playlists";

    var json = {

        name: title

    };

    postSpotify("json", url, json, function(ok, playlist) {

        if (ok) {
            generateCoverArt(playlist);
            generateCoverArtLarge(playlist, "myCanvasLarge", 800);


            saveTidsToPlaylist(playlist, tids);

            $(".container-fluid.work").hide();

            //jQuery('#audio-wrapper').remove();

            //$("#page-three").css("visibility", "hidden");

            $(".ajax-loader").show();

            setTimeout(function() {

                pid = playlist.id;

                jQuery(".share-wrapper").attr("rel", pid);

                TwshareURL = baseURL + "share.php?pid=" + jQuery(".share-wrapper").attr("rel");

                FBshareURL = baseURL + "share.php?pid=" + jQuery(".share-wrapper").attr("rel"),

                    FBshareURL1 = "share.php?pid=" + jQuery(".share-wrapper").attr("rel");

                twitterShare();

                $("#page3 #playlist-container iframe").attr("src", "https://open.spotify.com/embed/playlist/" + playlist.id);

            }, 5000);

            setTimeout(function() {

                document.getElementsByTagName("body")[0].removeAttribute("class");

                jQuery("#page1,#page2,#page4").fadeOut();

                $(".audioWrap").remove();
                $(".ajax-loader").hide();
                jQuery("#page3").fadeIn(function() {

                });

                document.getElementsByTagName("body")[0].classList.add("page3");

            }, 8000);

        } else {

            error("Can't create the new playlist");

        }

    });

}

function getPlaylistTitle() {

    return "THE MOST LIT PLAYLIST";

}

function generateCoverArt(playlist) {


    var canvas = document.getElementById("myCanvas");

    var context = canvas.getContext("2d");

    var imageObj = new Image();

    imageObj.src = "template1.jpg";

    imageObj.onload = function() {

        //context.drawImage(imageObj, 0, 0, 1080, 2200, 0, 0, 300, 300);

        //context.drawImage(imageObj, 0, 0, imageObj.width, imageObj.height, 0, 0, 300, 300);

        //ontext.drawImage(imageObj, 0, 0, imageObj.width, imageObj.height, 0, 0, 300, 300);

        //context.drawImage(imageObj, 0, 0, imageObj.width, imageObj.height, 0, 0, 300, 300);

        context.font = "10pt Oswald";

        var MAX_WIDTH = 300;

        var MAX_HEIGHT = 300;

        var iw = imageObj.width;

        var ih = imageObj.height;

        var scale = Math.min((MAX_WIDTH / iw), (MAX_HEIGHT / ih));

        var sw = iw * scale;

        var sh = ih * scale;

        context.drawImage(imageObj, 0, 0, iw, ih, (canvas.width - sw) / 2, (canvas.height - sh) / 2, iw * scale, ih * scale);

        context.drawImage(imageObj, 0, 0, iw, ih, (canvas.width - sw) / 2, (canvas.height - sh) / 2, iw * scale, ih * scale);

        context.drawImage(imageObj, 0, 0, iw, ih, (canvas.width - sw) / 2, (canvas.height - sh) / 2, iw * scale, ih * scale);

        context.drawImage(imageObj, 0, 0, iw, ih, (canvas.width - sw) / 2, (canvas.height - sh) / 2, iw * scale, ih * scale);

        for (var i = 4; i >= 0; i--) {

            context.fillStyle = 'white';

            context.fillText($("#data-table-wrapper1 div.playlist").eq(i).find(".title").text().toUpperCase(), 10, 200 + (15 * i));

            context.fillText($("#data-table-wrapper1 div.playlist").eq(i).find(".title").text().toUpperCase(), 10, 200 + (15 * i));

            context.fillText($("#data-table-wrapper1 div.playlist").eq(i).find(".title").text().toUpperCase(), 10, 200 + (15 * i));

        }

        var url1 = "https://api.spotify.com/v1/users/" + playlist.owner.id + "/playlists/" + playlist.id + "/images";

        postSpotifyImage("image/jpeg", playlist, url1, {

            uris: ""

        }, function(ok, data) {

            if (ok) {

                info("Playlist saved");

                $("#ready-to-save").hide(100);

                $("#playlist-name").attr('href', playlist.uri);
                setTimeout(function() {
                    saveImage(playlist.id, document.getElementById("myCanvasLarge").toDataURL('image/jpeg', 1.0).split(',')[1]);
                }, 10000);
            } else {

                error("Trouble saving to the playlist");

            }

        });

    };

    var canvas = document.getElementById("myCanvas");

    var context = canvas.getContext("2d");

    var imageObj = new Image();

    imageObj.onload = function() {

        context.drawImage(imageObj, 0, 0, imageObj.width, imageObj.height, 0, 0, 300, 300);

        context.drawImage(imageObj, 0, 0, imageObj.width, imageObj.height, 0, 0, 300, 300);

        context.drawImage(imageObj, 0, 0, imageObj.width, imageObj.height, 0, 0, 300, 300);

        context.drawImage(imageObj, 0, 0, imageObj.width, imageObj.height, 0, 0, 300, 300);

        context.font = "10pt Oswald";

        for (var i = 4; i >= 0; i--) { //alert(i);

            context.fillStyle = 'white';

            context.fillText($("#data-table-wrapper1 div.playlist").eq(i).find(".title").text().toUpperCase(), 10, 200 + (15 * i));

            context.fillText($("#data-table-wrapper1 div.playlist").eq(i).find(".title").text().toUpperCase(), 10, 200 + (15 * i));

            context.fillText($("#data-table-wrapper1 div.playlist").eq(i).find(".title").text().toUpperCase(), 10, 200 + (15 * i));

        }

        //context.restore();

    };

    // var downloadSrc =  canvas.toDataURL();

    // $("#download-final-image").attr("href", downloadSrc);

    imageObj.src = "template1.jpg";

}


jQuery(document).ready(function() {

    $("#saveplaylist").on('click', function() {

        if ($("input.flexdatalist").val().split(",").length < 5) {

            info("Please select a minimum of 5 tracks to generate the playlist");

            $("body, html").animate({

                scrollTop: $("#info").offset().top

            }, 500);

            return false;

        } else {

            savePlaylist();

        }

    });

    $("#save-button").on('click', function() {

        if ($("input.flexdatalist").val().split(",").length < 5) {

            info("Please select a minimum of 5 tracks to generate the playlist");

            $("body, html").animate({

                scrollTop: $("#info").offset().top

            }, 500);

            return false;

        } else {

            savePlaylist();

        }

    });

    jQuery("#spotifyconnect").click(function() {

        jQuery('.officialrules_wrapper').fadeIn();

    });

    jQuery('.button-cross').click(function() {

        jQuery('.officialrules_wrapper').fadeOut();

    });

    jQuery('.submitButton').click(function() {

        loginWithSpotify();

    });

    jQuery(".icon-play2").click(function() {

        jQuery(this).hide();

        jQuery(".icon-pause").show();

    });

    jQuery(".icon-pause").click(function() {

        jQuery(this).hide();

        jQuery(".icon-play2").show();

    });

    performAuthDance();

    var $input = $('.flexdatalist');

    $input.on('select:flexdatalist', function() {

    }).on('change:flexdatalist', function(e, set) {

        //if(typeof set.value != undefined){

        generateHTML(set.value);
        shuffler();

        //}

        if ($("input.flexdatalist").val().split(",").length >= 5) {

            $("#info").text("");

        }

        if ($(".flexdatalist-multiple li").length >= 10) {

            $(".flexdatalist-multiple li.input-container,.searchbox .dummy ").hide();

            $(".flexdatalist-multiple li.input-container").removeClass("showit");

        } else if ($(".flexdatalist-multiple li").length < 10) {

            $(".flexdatalist-multiple li.input-container").addClass("showit");

            $(".flexdatalist-multiple li.input-container,.searchbox .dummy").show();

        } else {

            $(".flexdatalist-multiple li.input-container").removeClass("showit");

        }

        updateValueView($(this));

    }).on('before:flexdatalist.remove', function(e) {

    });

    audioElement = document.getElementById("audio-player");

    audioElement.addEventListener("timeupdate", timeCal);

    audioElement.onplaying = function() {

        isPlaying = true;

        isPause = false;

    };

    audioElement.onpause = function() {

        isPlaying = false;

        isPause = true;

    };

    audioElement.onended = function() {

        isPlaying = false;

        isPause = true;

        showPlayicon();

        playNextSong();

    }

    jQuery(".play-pause").on("click", function() {

        playPauseSong();

    });

    jQuery("body").on("click", ".song-title .title,.letter", function() {

        var currentTitleIndex = jQuery(this).parents("div.playlist").index();

        var currenTitle = jQuery(this).text();

        playSongOnTitleClick(currentTitleIndex);

    });

    jQuery(".prev").on("click", function(e) {

        e.stopPropagation();

        if (!audioElement.paused && !isPause) {

            audioElement.pause();

            showPlayicon();

        }

        //CallOmniture('WaleMusic: Spotify Playlist Generator:Landing:Step 2:Previous Song (player) Click');

        playPrevSong();

    });

    jQuery(".next").on("click", function(e) {

        e.stopPropagation();

        if (!audioElement.paused && !isPause) {

            audioElement.pause();

            showPlayicon();

        }

        //CallOmniture('WaleMusic: Spotify Playlist Generator:Landing:Step 2:Next Song (player) Click');

        playNextSong();

    });

    jQuery(".playlist-button a").on("click", function() {

        jQuery(".ajax-loader").show();

        audioElement.pause();

        CallOmniture('Wale Music:Spotify Playlist Generator Email Signup:Landing:Step 2:Save Playlist Click');

        generatePlaylistForSpotify();

        savePlaylistToSpotify();

    });

});

function shuffler() {
    $("#page2 .playlist-wrapper .playlist:not(:first-child) .menuicon").hover(function() {
        $(this).find("img").attr("src", "./images/shufflebtn.png");
    }, function() {
        $(this).find("img").attr("src", "./images/menubtn.png");
    });

}
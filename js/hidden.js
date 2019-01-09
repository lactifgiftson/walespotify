function generateCoverArtLarge(playlist,itemid,canvasSize) {

	var canvas = document.getElementById(itemid);

	var context = canvas.getContext("2d");

	var imageObj = new Image();

	imageObj.src = "template800.jpg";

	imageObj.onload = function() {

		//context.drawImage(imageObj, 0, 0, 1080, 2200, 0, 0, canvasSize, canvasSize);

		//context.drawImage(imageObj, 0, 0, imageObj.width, imageObj.height, 0, 0, canvasSize, canvasSize);

		//ontext.drawImage(imageObj, 0, 0, imageObj.width, imageObj.height, 0, 0, canvasSize, canvasSize);

		//context.drawImage(imageObj, 0, 0, imageObj.width, imageObj.height, 0, 0, canvasSize, canvasSize);

		context.font = "22pt Oswald";

		var MAX_WIDTH = canvasSize;

		var MAX_HEIGHT = canvasSize;

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

			context.fillText($("#data-table-wrapper1 div.playlist").eq(i).find(".title").text().toUpperCase(), 30, 600 + (40 * i));

			context.fillText($("#data-table-wrapper1 div.playlist").eq(i).find(".title").text().toUpperCase(), 30, 600 + (40 * i));

			context.fillText($("#data-table-wrapper1 div.playlist").eq(i).find(".title").text().toUpperCase(), 30, 600 + (40 * i));

		}

		var url1 = "https://api.spotify.com/v1/users/" + playlist.owner.id + "/playlists/" + playlist.id + "/images";

		postSpotifyImage("image/jpeg", url1, {

			uris : ""

		}, function(ok, data) {

			if (ok) {

				info("Playlist saved");

				$("#ready-to-save").hide(100);

				$("#playlist-name").attr('href', playlist.uri);

			} else {

				error("Trouble saving to the playlist");

			}

		});

	};

	var canvas = document.getElementById(itemid);

	var context = canvas.getContext("2d");

	var imageObj = new Image();

	imageObj.onload = function() {

		context.drawImage(imageObj, 0, 0, imageObj.width, imageObj.height, 0, 0, canvasSize, canvasSize);

		context.drawImage(imageObj, 0, 0, imageObj.width, imageObj.height, 0, 0, canvasSize, canvasSize);

		context.drawImage(imageObj, 0, 0, imageObj.width, imageObj.height, 0, 0, canvasSize, canvasSize);

		context.drawImage(imageObj, 0, 0, imageObj.width, imageObj.height, 0, 0, canvasSize, canvasSize);

		context.font = "22pt Oswald";

		for (var i = 4; i >= 0; i--) {//alert(i);

			context.fillStyle = 'white';

			context.fillText($("#data-table-wrapper1 div.playlist").eq(i).find(".title").text().toUpperCase(), 10, 85 + (35 * i));

			//context.fillText($("#data-table-wrapper1 div.playlist").eq(i).find(".title").text().toUpperCase(), 10, 50-(35 * i));

			//context.fillText($("#data-table-wrapper1 div.playlist").eq(i).find(".title").text().toUpperCase(), 10, 50-(35 * i));

		}

		//context.restore();

	};

	// var downloadSrc =  canvas.toDataURL();

	// $("#download-final-image").attr("href", downloadSrc);

	imageObj.src = "template800.jpg";

}
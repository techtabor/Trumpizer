// Changing the background
var backgroundUrl = "chrome-extension://" + chrome.runtime.id + "/images/make_america_great_again.jpg";
console.log('Background URL: ' + backgroundUrl);
var backgroundStyle = "background-image: url(" + backgroundUrl  + ")";
document.body.style = backgroundStyle;

// Changing images
var images =document.images;
for (var imageIndex = 0; imageIndex < images.length; ++imageIndex)
{
    var image = images[imageIndex];
	image.src = chrome.extension.getURL('images/trump.jpg');
	image.srcset = "";
}

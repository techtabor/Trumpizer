var bgURL = "chrome-extension://" + chrome.runtime.id + "/images/make_america_great_again.jpg";
console.log(bgURL);
var st = "background-image: url(" + bgURL  + ")";
document.body.style = st;
/*var divs = document.getElementsByTagName("div");
for (i = 0; i < divs.length; ++i)
{
	divs[i].style = st;
}*/
var im=document.images;
for (i = 0; i < im.length; ++i)
{
	im[i].src=chrome.extension.getURL('images/trump.jpg');
	im[i].srcset="";
}

addHeader();
addNav();
addFooter();
addVideoControls();
$( document ).ready(function(){
	$(".button-collapse").sideNav();
})
function addHeader(){
	document.querySelector ('header').innerHTML =
	'<h1>Gyrth McMulin</h1>'+
	'<h3>Programmer.</h3>'+
	'<hr></hr>';
}
function addNav() {
	document.getElementById("navigator").innerHTML =
	'<nav>'+
		'<div class="nav-wrapper">'+
	      '<a href="#" data-activates="mobile-demo" class="button-collapse"><i class="material-icons">menu</i></a>'+
			'<ul class="left hide-on-med-and-down">'+
				'<li><a href="index.html">Main Page</a></li>'+
				'<li><a href="overgrowth.html">Overgrowth</a></li>'+
				'<li><a href="projects.html">Projects</a></li>'+
				'<li><a href="apps.html">Apps</a></li>'+
			'</ul>'+
			'<ul class="right hide-on-med-and-down">'+
				'<li><a href="https://www.youtube.com/channel/UCS_9m_pTohKCh2kyKfk6xXw"><div class="right soc-med"><img src="images/youtube.png"></div></a></li>'+
				'<li><a href="https://twitter.com/GyrthMcMulin"><div class="right soc-med"><img src="images/twitter.png"></div></a></li>'+
	        '</ul>'+
			'<ul class="side-nav" id="mobile-demo">'+
				'<li><a href="index.html">Main Page</a></li>'+
				'<li><a href="overgrowth.html">Overgrowth</a></li>'+
				'<li><a href="projects.html">Projects</a></li>'+
				'<li><a href="apps.html">Apps</a></li>'+
				'<li><a href="https://www.youtube.com/channel/UCS_9m_pTohKCh2kyKfk6xXw">YouTube<div class="right soc-med"><img src="images/youtube.png"></div></a></li>'+
				'<li><a href="https://twitter.com/GyrthMcMulin">Twitter<div class="right soc-med"><img src="images/twitter.png"></div></a></li>'+
		    '</ul>'+
		'<div>'+
	'</nav>';
}
function addFooter(){
	document.querySelector ('footer').innerHTML =
	'<p>Made by Gyrth McMulin.</p>'+
	'<p><small>Hosted on GitHub Pages<br>Theme by <a href="https://github.com/orderedlist">orderedlist</a></small></p>';
}
function addVideoControls(){
	var divs = document.querySelectorAll('video').forEach(function(video) {
		video.addEventListener('click touchstart',function(){
    		if (video.paused)
            	video.play();
        	else
            	video.pause();
    	},false);
	});
}

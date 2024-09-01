
function nextHtml_content(file){
	fetch(file)
		.then(
			response => {
				if (!response.ok) {
					throw new Error(`HTTP error! Status: ${response.status}`);
				}
				return response.text();
			}
		)
		.then(
			data => {
				document.getElementById('content_pane').innerHTML = data;
			}
		)
		.catch(
			error => {
				console.error('Error loading content:', error);
                document.getElementById('content_pane').innerHTML = '<p align="center">Error loading content. Please try again later.</p>';
			}
		);
}
function toHome(){
	nextHtml_content('home.html');
}
function toDiscover(){
	nextHtml_content('discover.html');
}
function toAbout(){
	nextHtml_content('about.html');
}
function toContactUs(){
	nextHtml_content('contactUs.html');
}

document.addEventListener("DOMContentLoaded", function(){
	const home_btn      = document.getElementById("home");
	const discover_btn  = document.getElementById("discover");
	const about_btn     = document.getElementById("about");
	const contactUs_btn = document.getElementById("contactUs");
	
	home_btn.addEventListener("click", function(){
		toHome();
	});
	discover_btn.addEventListener("click", function(){
		toDiscover();
	});
	about_btn.addEventListener("click", function(){
		toAbout();
	});
	contactUs_btn.addEventListener("click", function(){
		toContactUs();
	});
});

window.onload = function(){
	nextHtml_content('home.html');
}

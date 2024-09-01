
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

const home_btn      = document.getElementById("home");
const discover_btn  = document.getElementById("discover");
const about_btn     = document.getElementById("about");
const contactUs_btn = document.getElementById("contactUs");

document.addEventListener("DOMContentLoaded", function(){
	
	home_btn.addEventListener("click", function(){
		toHome();
		togleMenuButton(home_btn);
	});
	discover_btn.addEventListener("click", function(){
		toDiscover();
		togleMenuButton(discover_btn);
	});
	about_btn.addEventListener("click", function(){
		toAbout();
		togleMenuButton(about_btn);
	});
	contactUs_btn.addEventListener("click", function(){
		toContactUs();
		togleMenuButton(contactUs_btn);
	});
	
	home_btn.addEventListener("click", function(){
		
	});
	discover_btn.addEventListener("click", function(){
		
	});
	about_btn.addEventListener("click", function(){
		
	});
	contactUs_btn.addEventListener("click", function(){
		
	});
});
function togleMenuButton(menu_button){
	home_btn.style.backgroundColor = 'white';
	home_btn.style.color = 'blick';
	discover_btn.style.backgroundColor = 'white';
	discover_btn.style.color = 'blick';
	about_btn.style.backgroundColor = 'white';
	about_btn.style.color = 'blick';
	contactUs_btn.style.backgroundColor = 'white';
	contactUs_btn.style.color = 'blick';
	
	menu_button.style.backgroundColor = '#326B45';
	menu_button.style.color = 'white';
}

window.onload = function(){
	nextHtml_content('home.html');
}

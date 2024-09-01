const home_btn      = document.getElementById("home");
const discover_btn  = document.getElementById("discover");
const about_btn     = document.getElementById("about");
const contactUs_btn = document.getElementById("contactUs");

function nextHtml_content(file, n){
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
				if(n == 1){
					console.log("load_locomotive_list");
					load_locomotive_list();
				}	
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
	nextHtml_content('https://dex4short.github.io/All_About_Trains/home.html', 0);
}
function toDiscover(){
	console.log("to discover");
	nextHtml_content('https://dex4short.github.io/All_About_Trains/discover.html', 1);
}
function toAbout(){
	nextHtml_content('https://dex4short.github.io/All_About_Trains/about.html', 2);
}
function toContactUs(){
	nextHtml_content('https://dex4short.github.io/All_About_Trains/contactUs.html', 3);
}
function togleMenuButton(menu_button){
	home_btn.style.backgroundColor = 'white';
	home_btn.style.color = 'black';
	discover_btn.style.backgroundColor = 'white';
	discover_btn.style.color = 'black';
	about_btn.style.backgroundColor = 'white';
	about_btn.style.color = 'black';
	contactUs_btn.style.backgroundColor = 'white';
	contactUs_btn.style.color = 'black';
	
	menu_button.style.backgroundColor = '#326B45';
	menu_button.style.color = 'white';
}

document.addEventListener("DOMContentLoaded", function(){
	home_btn.addEventListener('click', function(){
		toHome();
		togleMenuButton(home_btn);
	});
	discover_btn.addEventListener('click', function(){
		toDiscover();
		togleMenuButton(discover_btn);
	});
	about_btn.addEventListener('click', function(){
		toAbout();
		togleMenuButton(about_btn);
	});
	contactUs_btn.addEventListener('click', function(){
		toContactUs();
		togleMenuButton(contactUs_btn);
	});
});

window.onload = function(){
	nextHtml_content('https://dex4short.github.io/All_About_Trains/home.html');
}

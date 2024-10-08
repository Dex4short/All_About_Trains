const search_bar    = document.getElementById("search_bar");
const search_btn    = document.getElementById("search_btn");

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
				switch(n){
				case 1:
					const key_word = search_bar.value.toLowerCase();
					load_locomotive_list(key_word);
					break
				}	
			}
		)
		.catch(
			error => {
				console.error('Error loading content:', error);
                		document.getElementById('content_pane').innerHTML = '<p align="center">Error loading content. Please connect to the internet.</p>';
			}
		);
}
function toHome(){
	nextHtml_content('https://dex4short.github.io/All_About_Trains/home.html', 0);
}
function toDiscover(){
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
	search_btn.addEventListener('click', function() {
		toDiscover();
		togleMenuButton(discover_btn);
	});
	
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
		
	home_btn.addEventListener('mouseover', function(){
		home_btn.style.borderBottom = '5px solid #E0A329';
	});
	discover_btn.addEventListener('mouseover', function(){
		discover_btn.style.borderBottom = '5px solid #E0A329';
	});
	about_btn.addEventListener('mouseover', function(){
		about_btn.style.borderBottom = '5px solid #E0A329';
	});
	contactUs_btn.addEventListener('mouseover', function(){
		contactUs_btn.style.borderBottom = '5px solid #E0A329';
	});

	home_btn.addEventListener('mouseout', function(){	
		home_btn.style.borderBottom = '0px solid white';
	});
	discover_btn.addEventListener('mouseout', function(){
		discover_btn.style.borderBottom = '0px solid white';
	});
	about_btn.addEventListener('mouseout', function(){
		about_btn.style.borderBottom = '0px solid white';
	});
	contactUs_btn.addEventListener('mouseout', function(){
		contactUs_btn.style.borderBottom = '0px solid white';
	});
});

window.onload = function(){
	nextHtml_content('https://dex4short.github.io/All_About_Trains/home.html');
}

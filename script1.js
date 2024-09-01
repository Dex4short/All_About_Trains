
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

window.onload = function(){
	nextHtml_content('home.html');
}

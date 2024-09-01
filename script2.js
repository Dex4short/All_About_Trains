const locomotives = [
	[
		"https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Union_Pacific_Big_Boy_No._4014_in_Pine_Bluffs%2C_Wyoming_July_2023.png/300px-Union_Pacific_Big_Boy_No._4014_in_Pine_Bluffs%2C_Wyoming_July_2023.png",
		"Union Pacific Big Boy",
		"The Union Pacific Big Boy is a type of simple articulated 4-8-8-4 steam locomotive manufactured by the American Locomotive Company (ALCO) between 1941 and 1944 and operated by the Union Pacific Railroad in revenue service until 1962.",
		"https://en.wikipedia.org/wiki/Union_Pacific_Big_Boy"
	]
];

function load_locomotive_list(){
	console.log("executing...");
	const tableBody = document.getElementById('locomotive_list');
	const image_src=0, model_name=1, model_description=2, source_link=3;
	let item_list = '';

	console.log("for each...");
	for(let i=0; i<locomotives.length; i++){
		console.log(i);
		item_list += 	'<tr>' +
			            '<td><!--gap--></td>' +
			            '<td width="240px">' +
			                '<img src="' + locomotives[i][image_src] + '" width="240px" height="180px">' +
			            '</td>' +
			            '<td width="500px" style="padding:20px; background-color:#F6F6F6;">' +
			                '<p>' +
			                    '<b>' + locomotives[i][model_name] + '</b>' +
			                '</p>' +
			                '<p>' +
			                    locomotives[i][model_description] +
			                '</p>' +
			                '<a href="' + locomotives[i][source_link] + '">' +
			                    locomotives[i][source_link] +
			                '</a>' +
			            '</td>' +
			            '<td><!--gap--></td>' +
			        '</tr>';
	}
	tableBody.innerHTML = item_list;
}

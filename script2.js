const locomotives = [
	[
		"https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Union_Pacific_Big_Boy_No._4014_in_Pine_Bluffs%2C_Wyoming_July_2023.png/300px-Union_Pacific_Big_Boy_No._4014_in_Pine_Bluffs%2C_Wyoming_July_2023.png",
		"Union Pacific Big Boy",
		"The Union Pacific Big Boy is a type of simple articulated 4-8-8-4 steam locomotive manufactured by the American Locomotive Company (ALCO) between 1941 and 1944 and operated by the Union Pacific Railroad in revenue service until 1962.",
		"https://en.wikipedia.org/wiki/Union_Pacific_Big_Boy"
	],
	[
		"https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/GWR_4079_Pendennis_Castle_Didcot_Railway_Centre_4th_March_2023.jpg/300px-GWR_4079_Pendennis_Castle_Didcot_Railway_Centre_4th_March_2023.jpg",
		"GWR 4073 Class",
		"The 4073 or Castle Class are 4-6-0 steam locomotives of the Great Western Railway, built between 1923 and 1950.[2] They were designed by the railway's Chief Mechanical Engineer, Charles Collett, for working the company's express passenger trains. They could reach speeds of up to 100 mph (160 km/h).[3]",
		"https://en.wikipedia.org/wiki/GWR_4073_Class"
	],
	[
		"https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Shropshire_Scotsman.jpg/300px-Shropshire_Scotsman.jpg",
		"LNER Class A3 4472 Flying Scotsman",
		"No. 4472 Flying Scotsman is a LNER Class A3 4-6-2 "Pacific" steam locomotive built in 1923 for the London and North Eastern Railway (LNER) at Doncaster Works to a design of Nigel Gresley. It was employed on long-distance express passenger trains on the East Coast Main Line by LNER and its successors, British Railways' Eastern and North Eastern Regions, notably on The Flying Scotsman service between London King's Cross and Edinburgh Waverley after which it was named.",
		"https://en.wikipedia.org/wiki/LNER_Class_A3_4472_Flying_Scotsman"
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

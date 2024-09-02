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
		"No. 4472 Flying Scotsman is a LNER Class A3 4-6-2 'Pacific' steam locomotive built in 1923 for the London and North Eastern Railway (LNER) at Doncaster Works to a design of Nigel Gresley. It was employed on long-distance express passenger trains on the East Coast Main Line by LNER and its successors, British Railways' Eastern and North Eastern Regions, notably on The Flying Scotsman service between London King's Cross and Edinburgh Waverley after which it was named.",
		"https://en.wikipedia.org/wiki/LNER_Class_A3_4472_Flying_Scotsman"
	],
	[
		"https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/LNER_Gresley_Class_%22A4%22_4-6-2_No.60007_-_5371152920.jpg/300px-LNER_Gresley_Class_%22A4%22_4-6-2_No.60007_-_5371152920.jpg",
		"LNER Class A4 4498 Sir Nigel Gresley",
		"60007 Sir Nigel Gresley is an LNER Class A4 4-6-2 ('Pacific') steam locomotive built to a design of Sir Nigel Gresley in 1937 at Doncaster Works for operation on the London and North Eastern Railway (LNER). The locomotive holds the post-war speed record for steam locomotives on British Railways. The locomotive was withdrawn from service in 1966 and purchased for preservation the same year; it is one of six A4s to be preserved.",
		"https://en.wikipedia.org/wiki/LNER_Class_A4"
	],
	[
		"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Grand_Trunk_Western_No._6039.png/300px-Grand_Trunk_Western_No._6039.png",
		"Grand Trunk Western 6039",
		"Grand Trunk Western No. 6039 is a preserved class 'U-1-c' 4-8-2 'Mountain type' steam locomotive built in June 1925 by Baldwin.[1] It served the Grand Trunk Western Railroad by pulling fast passenger and freight trains throughout the Lower Peninsula of Michigan, until the railroad decided to dieselize their locomotive fleet.",
		"https://en.wikipedia.org/wiki/Grand_Trunk_Western_6039"
	],
	[
		"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/P8_Kranichstein.jpg/300px-P8_Kranichstein.jpg",
		"Prussian P 8 DRG Class 38.10–40",
		"The Prussian Class P 8 of the Prussian state railways (DRG Class 38.10-40 of the Deutsche Reichsbahn) was a 4-6-0 steam locomotive built from 1906 to 1923 by the Berliner Maschinenbau (previously Schwartzkopff) and twelve other German factories. The design was created by Robert Garbe. It was intended as a successor to the Prussian P 6, which was regarded as unsatisfactory.",
		"https://en.wikipedia.org/wiki/Prussian_P_8"
	],
	[
		"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsyuhjn2LSN667_HC6fqWDYzlnc8jFMgR4ydfCVlzptDgwDLCKRCfIXWuOsjgdWLnYNzE&usqp=CAU",
		"Pennsylvania Railroad K4 class",
		"The Pennsylvania Railroad K4 was a class of 425 4-6-2 steam locomotives built between 1914 and 1928 for the PRR, where they served as the primary main line passenger steam locomotives on the entire PRR system until late 1957.",
		"https://en.wikipedia.org/wiki/Pennsylvania_Railroad_K4_class"
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

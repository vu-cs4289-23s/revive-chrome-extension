const options = {
	method: 'GET',
	headers: {
		'Accept-Encoding': 'gzip, deflate',
		'X-RapidAPI-Key': '30605509ffmsh263977ad5bbbe7fp114143jsn78e720c99d65',
		'X-RapidAPI-Host': 'poshmark.p.rapidapi.com'
	}
};

fetch('https://poshmark.p.rapidapi.com/search?query=Mens%20Better%20Sweater%20Fleece%20Jacket%20medium', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));
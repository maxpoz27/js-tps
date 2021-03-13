var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0');
var yyyy = today.getFullYear();
today = yyyy + '-' + dd + '-' + mm;

var url = 'http://newsapi.org/v2/everything?q=minecraft&from='+ today +'&sortBy=publishedAt&apiKey=9b4e42c6404c48cab0f04cb200654d6c&pageSize=5';


$.ajax({
	url: url,
	method: 'GET'
})
.done(function(data, textStatus, xhr) {
	if(xhr.status >= 300 && xhr.status < 400){
		console.log('Attention redirection');
    console.log(xhr);
	  console.log(xhr.status);
	  console.log(textStatus);
	  console.log(data); //JSON
	  console.log(data.headers); //JSON
  }
})
.fail(function(xhr, textStatus, error) {
	console.log(xhr.status);
	console.log(textStatus);
	throw new Error(error);
});

/*
$.get({ url: "https://httpbin.org/get" })
.done(function(data, textStatus, xhr){
	console.log(xhr.status);
	console.log(textStatus);
	console.log(data.headers); //JSON
})
.fail(function(xhr, textStatus, error){
	console.log(xhr.status);
	console.log(textStatus);
	console.log(error);
});
*/

iterate();

let h1 = $('h1');
logMessageWithDate(h1.html());

let titleNews = $('#titleNews');
logMessageWithDate(titleNews.html());

 $('.title').each(function(i,val){
		logMessageWithDate($(val).html());
});

let button = $(':input[name="addNewsBtn"]')[0];
bindButton(button);

let articles = JSON.parse(ALLNEWSJSON);
$.each(articles,function(i,element){

	let a = new Article(element.id, element.title, element.description);
	a.addArticle();
});

let buttons = $('button');
$.each(buttons,function(i,btn){
	btn.onclick = viewdetailClick;
});
changementOnglet('recherche');
<!--changementOngletJQ('recherche') existe aussi au cas ou -->

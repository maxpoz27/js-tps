class Article {
    id;
    title;
    description;

    constructor(id, title, description){
        this.id = id;
        this.title = title;
        this.description = description;
    }

    createArticleHtml() {
        let newArticle = $('<article></article>');
        let h3 = $('<h3></h3>');
        let p = $('<p></p>');
        let button = $('<button></button>');
        let news = $('#news');

        h3.html(this.title);
        p.html(this.description);
        button.html('View detail');
        this.bindButtonViewdetail(button, viewdetailClick);
        h3.addClass('title');
        newArticle.attr('id', this.id);

        newArticle.append(h3);
        newArticle.append(p);
        newArticle.append(button);
        news.append(newArticle);
    }

    checkArticleUnicity() {
        let h3s = $('.title');

        for (let i = 0; i < h3s.length; i++) {
            if ($(h3s[i]).html().toLowerCase().trim() === this.title.toLowerCase().trim()) {
                addError('Erreur article deja existant', $('#addNewsForm'));

                return false;
            }  
        }

        return true;
    }

    checkValue() {
        if (this.title === '') {
            let form = $('#addNewsForm');
            addError('Title vide', form);
            return false;
        }

        if (this.description === '') {
            let form = $('#addNewsForm');
            addError('Description vide', form);
            return false;
        }

        return true;
    }

    addArticle() {  
        clearErrors();

        if (!this.checkValue()) {
            return false;
        }

        if (!this.checkArticleUnicity()) {
            return false;
        }
        
        this.createArticleHtml();
        return true;
    }

    bindButtonViewdetail(button, callback){
        button.click(callback);
    }

    static getNextId(){
        let article = $('article:last');

        if(article.length == 0)
            return 1;

        return article.attr('id') + 1;
    }
}
const ROUGE = '#FF0000'; //écrire en MAJ par convention
const BLEU = '#0000FF';
const VERT = '#008000';

const ALLNEWSJSON = `[
						{"id": "1", "title": "News 1", "description": "Ma super news 1"},
						{"id": "2", "title": "News 2", "description": "Ma super news 2"},
						{"id": "3", "title": "News 3", "description": "Ma super news 3"},
						{"id": "4", "title": "News 4", "description": "Ma super news 4"},
						{"id": "5", "title": "News 5", "description": "Ma super news 5"}
					]`;

function bindButton(button){
	button.click(function(event){
		event.preventDefault();
    	let title = $('input[name="titleToAdd"]');
        let description = $('textarea[name="descriptionToAdd"]');
		
        let article = new Article(0, title.val(), description.val());
		if(article.addArticle()){
			title.val('');
            description.val('');
        }

		return false;
	});
}

function clearErrors(){
	let errors = $('.error');

    if(errors){
        while(errors.length > 0){
            errors[0].remove();
        }        
    }
}

function addError(message, parent){
	let error = $('<p></p>');
    error.html(message);
    error.css('color', ROUGE);
    error.addClass('error');

    parent.prepend(error);
}

function viewdetailClick(){
    let p = $(this).parent().find('p');

    logMessageWithDate(p.html());
}

function switchTab(){
    $('.onglet').hide(); //on cache tous les éléments

    $($(this).data('target')).show(); //on affiche uniquement le tab que l'on veut
}
function logMessageWithDate(message){
	let today = new Date();
	console.log(today.toLocaleString() + ' : ' + message );
}
let tabs = $('.tab');
tabs.each(function(){
	$(this).click(switchTab);
});
let button = $('input[name="addNewsBtn"]');
bindButton(button);
/*
iterate();

let h1 = $('h1');
logMessageWithDate(h1.html());

let titleNews = $('#titleNews');
logMessageWithDate(titleNews.html());

let titles = $('.title');
titles.each(function(){
	logMessageWithDate($(this).html())
});



let buttons = $('article button');
buttons.each(function(){
	$(this).click(viewdetailClick);
});


let articles = JSON.parse(ALLNEWSJSON);
articles.forEach(function(element){ //on parcours un élément JSON ici donc pas besoin de conversir en JQuery
	console.log(element);

	let a = new Article(element.id, element.title, element.description);
	a.addArticle();
});

$.ajax({
	url: "https://newsapi.org/v2/top-headlines?country=fr&apiKey=9b4e42c6404c48cab0f04cb200654d6c",
  	method: "GET",
    dataType: 'jsonp',
    cors: true,
    contentType:'application/json',
    secure: true,
    headers: {
        'Access-Control-Allow-Origin': '*',
      },
      beforeSend: function (xhr) {
        xhr.setRequestHeader ("Authorization", "Basic " + btoa(""));
      },
      success: function (data){
        console.log(data);
      }
})
.done(function(data, textStatus, xhr) {
	if(xhr.status >= 300 && xhr.status < 400)
		console.log('Attention redirection');

	console.log(data);

	data.articles.forEach(article => function(){
		let a = new Article(Article.getNextId(), article.title, article.description);
		a.addArticle();
	});
})
.fail(function(xhr, textStatus, error) {
	console.log(xhr.status);
	throw new Error(error);
});*/

function iterate(){
	for (let i = 0; i < 5; i++) {
		logMessageWithDate(i);
		
		if (i === 0) 
			logMessageWithDate(VERT); 
		else if (i % 2 === 0) 
			logMessageWithDate(ROUGE); 
		else 
			logMessageWithDate(BLEU); 
	}
}
const nw=`<article>
              <h3 class="title">{{ article.title }}</h3>
              <p>{{article.description}}</p>
              <button @click="details(article.description)">View Details</button>
            </article>`;

const Newsnew = {
  data() {
    let news = JSON.parse(ALLNEWSJSON);
    return {
      articles : news,
      taille: news.length,
      text: 'articles'
    };
  }
};

let appArtilces=Vue.createApp(Newsnew);
appArtilces.component('news',{
  props: ['article'],
  template : nw,
  methods: {
    details : logMessageWithDate
  }
});
appArtilces.mount('#news');

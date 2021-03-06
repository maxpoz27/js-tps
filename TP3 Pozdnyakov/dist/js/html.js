function bindButton(button){
	button.onclick = function(event){
		event.preventDefault();
    let title = $('input[name="titleToAdd"]');
    let description = $('textarea[name="descriptionToAdd"]');
    let article = new Article(0, title.val(), description.val());
		if(article.addArticle()){
			title.val('');
      description.val('');
    }
		return false;
	};
}


function clearErrors(){
	let errors = $('.error');

    if(errors){
        while(errors.length > 0 && errors[0].parentNode != null){
					errors[0].remove(errors[0]);
      	}
    }
}

function addError(message, parent){
	let error = $('<p/>');
    error.html(message);
    error.css("color", ROUGE);
    error.attr('class','error');
    parent.prepend(error);
}



function viewdetailClick(){
    let p = $(this).parent().children('p');
    logMessageWithDate(p.html());
}


function changementOnglet(nameClass){
	switch(nameClass.toLowerCase().trim()){
		case 'recherche':
		document.querySelector('.AjoutArticle').hidden=true;
		document.querySelector('div.Recherche').hidden=false;
		break;
		case 'ajoutarticle':
		document.querySelector('.Recherche').hidden=true;
		document.querySelector('div.AjoutArticle').hidden=false;
		break;
	}
}
// !!!!!!!!!!!!!!!! Changement d'onglet avec Jquery
function changementOngletJQ(nameClass){
	switch(nameClass.toLowerCase().trim()){
		case 'recherche':
			$('.AjoutArticle').hide();
			$('.Recherche').show();
			break;
		case 'ajoutarticle':
			$('.Recherche').hide();
			$('.AjoutArticle').show();
			break;
	}
}

function recherche(button){
	button.onclick = function(event){
		event.preventDefault();
		let texte = $('input[name="textToAdd"]').val();
		if(window.find(texte,false,false,true,false)){
			$(button).val('Prochain');
		};
	}
}

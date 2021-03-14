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
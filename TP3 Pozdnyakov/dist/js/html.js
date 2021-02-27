function bindButton(button){
	button.onclick = function(event){
		event.preventDefault();
    let title = $('input[name="titleToAdd"]');
    let description = $('textarea[name="descriptionToAdd"]');
    let article = new Article(0, title.value, description.value);
		if(article.addArticle()){
			title.attr('value', '');
            description.attr('value', '');
        }

		return false;
	};
}

function clearErrors(){
	let errors = $('.error');
    if(errors){
        while(errors.length > 0 && errors[0].parentNode != null){
            errors[0].parentNode.removeChild(errors[0]);
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

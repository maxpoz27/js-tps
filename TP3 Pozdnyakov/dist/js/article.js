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
        let newArticle = $('<article/>');
        let h3 = $('<h3/>');
        let p = $('<p/>');
        let button = $('<button/>');
        let news = $('#news');

        h3.html(this.title);
        p.html(this.description);
        button.html('View detail');
        h3.attr('class','title');
        this.bindButtonViewdetail(button, viewdetailClick);
        newArticle.attr('id',this.id);

        news.append(newArticle);
        newArticle.append(h3);
        newArticle.append(p);
        newArticle.append(button);
        return this;
    }

    checkArticleUnicity() {
        let h3s = $('.title');
        h3s.each(function(i,val){
          if ($(val).html().toLowerCase().trim() === $(this).attr('title').toLowerCase().trim()) {
            console.log($(val).html().toLowerCase().trim() === $(this).attr('title').toLowerCase().trim());
            addError('Erreur article deja existant', form);
            return false;
          }
        });
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
        button.onclick = callback;
    }
}

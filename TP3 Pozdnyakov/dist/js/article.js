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

        h3.html(this.title);//|| h3.html($(this).attr('title'));
        p.html(this.description);//|| p.html($(this).attr('description'));
        button.html('View detail');
        h3.attr('class','title');
        this.bindButtonViewdetail(button[0], viewdetailClick);

        newArticle.attr('id',this.id);// newArticle.attr('id',$(this).attr('id'));
        newArticle.append(h3);
        newArticle.append(p);
        newArticle.append(button);
        news.append(newArticle);
        changementOnglet('recherche');
        return this;
    }
    checkArticleUnicity() {
        let h3s = $('h3.title');
        let form = $('#addNewsForm');
        for (let i = 0; i < h3s.length; i++) {
          if ($(h3s[i]).html().toLowerCase().trim() === this.title.toLowerCase().trim()) {
            addError('Erreur article deja existant', form);
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

        this.createArticleHtml().ajoutIdArticle();
        return true;
    }

    bindButtonViewdetail(button, callback){
        button.onclick = callback;
        return this;
    }
    ajoutIdArticle(){
      let articles = $('article');
      let i=1;
      articles.each(function(compteur,article) {
        $(article).attr('id', i);
        i=i+1;
      });
      return this;
    }
}

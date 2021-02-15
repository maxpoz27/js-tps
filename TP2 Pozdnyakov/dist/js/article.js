class Article{
  id = null;
  titre = null;
  description = null;

  constructor(id,titre,description) {
    this.id = id;
    this.titre = titre;
    this.description = description;
  }

  createArticle() {
        let newArticle = document.createElement('article');
        let h3 = document.createElement('h3');
        let news = document.querySelector('#news');
        let description = document.createElement('p');
        let button = document.createElement('button');
        description.innerHTML= this.description;
        button.innerHTML= "View Detail";
        button.onclick= RecupParent;
        newArticle.id = this.id;
        h3.innerHTML = this.titre;
        h3.classList.add('title');
        newArticle.append(h3);
        newArticle.append(description);
        newArticle.append(button);
        news.append(newArticle);
        return this;
  }

  checkArticleUnicity() {

      let h3s = document.querySelectorAll('.title');
      let ids = document.querySelectorAll('article');

      for (let i = 0; i < h3s.length; i++) {
        console.log(this.titre.toLowerCase().trim());
        console.log(h3s[i].innerHTML.toLowerCase().trim());
          if (h3s[i].innerHTML.toLowerCase().trim() === this.titre.toLowerCase().trim() || ids[i].id === this.id) {
              let error = document.createElement('p');
              error.innerHTML = 'Erreur article deja existant';
              error.style.color = ROUGE;
              error.classList.add('error');
              let form = document.querySelector('#addNewsForm');
              form.prepend(error);
              return false;
          }
      }
      return true;
  }
  addArticle() {
      let errors = document.querySelectorAll('.error');

      if(errors){
          while(errors.length > 0){
              errors[0].parentNode.removeChild(errors[0]);
          }
      }

      if (!this.checkArticleUnicity()) {
          return;
      }

      this.createArticle();
      this.ajoutIdArticle();
      return this;
  }
  ajoutIdArticle(){
    let articles = document.querySelectorAll('article');
    let i=1;
    articles.forEach( article => {
      article.id = i;
      i=i+1;
    });
    return this;
  }
  onClickDetail(){
    let buttons = document.querySelectorAll('button');
    buttons.forEach( button => {
      button.onclick= RecupParent;
    });
    return this;
  }

  RecupParent(){
    let p =this.parentNode.querySelector('p').innerHTML;
    logMessageWithDate(p);
    return this;
  }
}

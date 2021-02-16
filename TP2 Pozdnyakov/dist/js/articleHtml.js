function createArticle(title) {
    let newArticle = document.createElement('article');
    let h3 = document.createElement('h3');
    let news = document.querySelector('#news');
    h3.innerHTML = title;
    h3.classList.add('title');
    newArticle.append(h3);
    news.append(newArticle);
}

function CreerNews(){
let button =document.querySelector('#submitNews');
button.onclick = createArticleClick;
function createArticleClick(){
  let h3 = document.createElement('h3');
  h3.className="title";
  h3.innerHTML=document.querySelector('input[name="titleToAdd"]').value;

  if(!verifExist(h3.innerHTML)){
    let article = document.createElement('article');
    let section = document.querySelector('section');
    article.appendChild(h3);
    section.appendChild(article);
  }
    return false;
  }
}

function checkArticleUnicity(title) {
    let h3s = document.querySelectorAll('.title');

    for (let i = 0; i < h3s.length; i++) {
        if (h3s[i].innerHTML.toLowerCase().trim() === title.toLowerCase().trim()) {
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

function addArticle(title) {
    let errors = document.querySelectorAll('.error');

    if(errors){
        while(errors.length > 0){
            errors[0].parentNode.removeChild(errors[0]);
        }
    }

    if (!checkArticleUnicity(title)) {
        return;
    }

    createArticle(title);
    return false;
}

function ajoutIdArticle(){
  let articles = document.querySelectorAll('article');
  let i =1;
  articles.forEach( article => {
    article.id = i;
    i=i+1;
  });

}

function onClickDetail(){
  let buttons = document.querySelectorAll('button');
  buttons.forEach( button => {
    button.onclick= RecupParent;
  });
}

function RecupParent(){
  let p =this.parentNode.querySelector('p');
  logMessageWithDate(p.innerHTML);
}

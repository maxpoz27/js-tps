function CreerNews(){
let button =document.querySelector('#submitNews');
button.onclick = createArticleClick;
function createArticleClick(){
  let h3 = document.createElement('h3');
  h3.className="title";
  h3.innerHTML=document.querySelector('#addNews').value;
  if(!verifExist(h3.innerHTML)){
    let article = document.createElement('article');
    let section = document.querySelector('section');
    article.appendChild(h3);
    section.appendChild(article);
  }
    return false;
  }
}
function verifExist(nomArticle){
  let arr=[];
  document.querySelectorAll("h3.title").forEach(title => arr.push(title.innerHTML));
  if (arr.indexOf(nomArticle)>-1) {
    let erreur=document.createElement('p');
    erreur.innerHTML=`Erreur article ${nomArticle} existe deja, question bonus`;
    erreur.style.color="red";
    let form=document.querySelector('#addNewsForm');
    form.insertBefore(erreur,form.firstChild);
    return true;
  }
  return false;
}

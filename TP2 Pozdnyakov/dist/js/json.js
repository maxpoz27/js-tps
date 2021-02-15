function articleDeJson(){

  let json= JSON.parse(ALLNEWSJSON);
  json.forEach( article =>{
    let articleHtml = new Article(article.id,article.titre,article.description);
    articleHtml.addArticle();
    logMessageWithDate(articleHtml);
    console.log(" c'est la meme chose que la ligne d'apres juste que avec logMessageWithDate affiche objet et pas Article");
    console.log(articleHtml);
  });
}

function addArticleForm(){
  let button = document.querySelector('input[name="addNewsBtn"]');
  button.onclick= addArt;
  return false;
}

function addArt(){
  let titre = document.querySelector('input[name="titleToAdd"]');
  let desc = document.querySelector('input[name="descToAdd"]');
  let articleAdd = new Article("",titre.value,desc.value);
  articleAdd.addArticle();
  return false;
}

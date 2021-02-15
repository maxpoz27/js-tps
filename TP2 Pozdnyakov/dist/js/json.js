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

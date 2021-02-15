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

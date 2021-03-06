function changementOnglet(nameClass){
    let onglet;
    switch(nameClass){
      case 'Recherche':
        onglet= document.querySelector('.AjoutArticle');
        onglet.hidden=true;
        document.querySelector('div.Recherche').hidden=false;
        break;
      case 'AjoutArticle':
        onglet=document.querySelector('.Recherche');
        onglet.hidden=true;
        document.querySelector('div.AjoutArticle').hidden=false;
        break;
    }
}

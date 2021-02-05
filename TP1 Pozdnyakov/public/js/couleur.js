let rouge =	'#FF0000';
let vert = '#00FF00';
let bleu = '#0000FF';

function forColeur(){
  let couleur;
  for (let i = 0; i < 5; i++ ) {
    if (i == 0) couleur = vert;
    else if(i % 2 == 0) couleur = rouge;
    else couleur = bleu;
    logMessageConsole("l'index :" + i + " Code couleur:" + couleur);
  }
}

let rouge=	'#FF0000';
let vert=	'#00FF00';
let bleu=	'#0000FF';
let i;
let couleur;
for (i = 0; i < 5;i++) {
  if (i == 0)couleur = vert;
  else if(i % 2== 0) couleur = rouge;
  else couleur=bleu;
  console.log("%cl'index :"+i+" Code couleur:" +couleur,`color:${couleur}`);
}

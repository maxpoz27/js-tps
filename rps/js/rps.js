var ch,nbWinsC=0, nbTies=0,nbWinsU=0;

function setUserChoice(userInput){
  switch (userInput) {
      case 'pierre':
          console.log(userInput);
          ch = 'pierre';
      break;
      case 'feuille':
          console.log(userInput);
          ch = 'feuille';
      break;
      case 'ciseaux':
          console.log(userInput);
          ch = 'ciseaux';
      break;
      default:
      console.log('nope');
  }
}


const getComputerChoice=()=>{
   const choice=Math.floor(Math.random()*3);
  switch (choice){
    case 0:
      return 'pierre';
      break;
    case 1:
      return 'feuille';
      break;
    case 2:
      return 'ciseaux';
      break;
  }
}

const determineWinner=(userChoice,computerChoice)=>{
  if(userChoice===computerChoice){
      return "It's a tie!";
  }
  if (userChoice==='pierre'){
    if(computerChoice==='feuille')return 'Ordinateur gagne';
    else if(computerChoice==='ciseaux')return 'Utilisateur gagne';
  }
  if(userChoice==='feuille'){
    if(computerChoice==='ciseaux')return 'Ordinateur gagne';
    else return 'Utilisateur gagne';
  }
  if(userChoice==='ciseaux'){
    if(computerChoice==='pierre')return 'Ordinateur gagne';
    else return 'Utilisateur gagne';
  }
}


function playGame() {
  let computerChoice = getComputerChoice();
  let userChoice= ch;
  document.querySelector('#choice').innerHTML=userChoice+'  '+computerChoice;
  document.querySelector('#gm').innerHTML=determineWinner(userChoice,computerChoice);
  if (determineWinner(userChoice,computerChoice)==='Ordinateur gagne')nbWinsC+=1;
  else if(determineWinner(userChoice,computerChoice)==='Utilisateur gagne')nbWinsU+=1;
  else if(determineWinner(userChoice,computerChoice)==="It's a tie!")nbTies+=1;
  document.querySelector('#score').innerHTML=`Computer:${nbWinsC}    Ties:${nbTies}    User:${nbWinsU}`;
}

let h1 = document.querySelector('h1').innerHTML;
let h2 = document.querySelector('h2#titleNews').innerHTML;
let tabH3 = document.querySelectorAll('h3.title');

function logDesH(){
  logMessageConsole(h1);
  logMessageConsole(h2);
  displayMessageFromNodeList(tabH3);
}

function displayMessageFromArray(array){
	array.forEach(element => logMessageConsole(element));
}


function displayMessageFromNodeList(list){
	list.forEach(element => logMessageConsole(element.innerHTML));
}


function logMessageConsole(message){
  console.log(getMessageFormatted(message));
}

function getMessageFormatted(message){
  let messageFormatted = "Message : " + message;

  return messageFormatted;
}

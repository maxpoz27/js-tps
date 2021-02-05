function logDate(message){
  console.log(new Date().toLocaleString().replace(",","")+ ` ${message}`);
}

logDate("question bonus");

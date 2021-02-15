function iterate(){
	for (let i = 0; i < 5; i++) {
		logMessageWithDate(i);
		
		if (i === 0) 
			logMessageWithDate(vert); 
		else if (i % 2 === 0) 
			logMessageWithDate(rouge); 
		else 
			logMessageWithDate(bleu); 
	}
}
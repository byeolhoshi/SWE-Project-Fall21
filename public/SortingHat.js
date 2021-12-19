
function ListSorter(x, answers, clubAnswers, solutions){
	
	let temp=0;

	for (let y =0; y < clubAnswers[0].length; y++)
	{
		if(answers[y]==clubAnswers[x][y])
		{
			temp++;

		}
	}
	solutions[x]=temp;
	return;
}

exports.findClub = function(answers, clubAnswers) {
	let solutions = [];
	let output = 0;
	
	if (clubAnswers == null || answers == null){return output;}

	for(let x =0; x < clubAnswers.length; x++)
	{
		ListSorter(x, answers, clubAnswers, solutions);

	}

	let max=0;
	for(let c=0; c<solutions.length;c++)
	{
		if(solutions[c] > solutions[max])
		{max=c;}
	}
	output=max;

	return output;
};

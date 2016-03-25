/* Problem Set #6 */

var x = 0;
//-----------

/*Write a function secondGreatLow that takes a single array of numbers and returns the second lowest and second greatest numbers, respectively, separated by a space. For example: if the array contains [7, 7, 12, 98, 106,82] the output should be "12 98". The array will not be empty and will contain at least 2 numbers. */

function secondGreatLow (numArray) {
	//sort the array by numeric value at each position
	numArray = numArray.sort(function(a,b){
    		return a > b;
  	});
  	//find unique values
	numArray = numArray.reduce(function(a,b){
    if (a.slice(-1)[0] !== b) 
    	a.push(b); 
    return a;
  	},[]); 
    //make sure the data makes sense
    if (numArray.length<=2){
    	return ("Not enough numbers or value spread in intial array.")
    }
    return([numArray[1],numArray[(numArray.length)-2]]);
}


console.log(++x,"-----------------");
console.log(secondGreatLow([9,7,7,12,98,106,82,9]));
console.log(secondGreatLow([9,7,7,9,18]));
console.log(secondGreatLow([9,7]));


/*Write a function timeConvert that takes a number parameter and returns the number of hours and minutes the parameter converts to (ie. if num = 63 then the output should be 1:3). Separate the number of hours and minutes with a colon. */

function timeConvert (number) {
	var hours = 0;
	while (number >=60){
		number-=60;
		hours+=1;
	}
	
	return ({[hours]:number});
}

console.log(timeConvert(68));









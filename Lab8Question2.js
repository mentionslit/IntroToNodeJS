console.log('Lab8Question2');

//Step 1: Define input variables
let numbers = [70, 72, 74, 76, 78, 80, 82, 84, 86, 88, 90, 92, 94, 96, 98, 100];

var results = numbers;
//Step 2: Calculations
for (let counter = 0; counter < 16; counter++){

	if (counter <= 6)
		console.log(numbers[counter] + ': Below Average');
	else if (counter <= 8)
		console.log(numbers[counter] + ': Grade B');
	else if (counter <= 12)
		console.log(numbers[counter] + ': Grade AB');
	else if (counter >= 12)
		console.log(numbers[counter] + ': Grade A');
}
if (numbers >= 93){
	results = numbers + ': Grade A';
}
else if (numbers = 87 < 93){
	results = numbers + ': Grade AB';
}
else if (numbers = 83 < 87){
	results = numbers + ': Grade B';
}
else if (numbers < 83){
	results = numbers + ': Below Average';
}
//Step 3: Results

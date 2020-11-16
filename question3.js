console.log('Question3');

//Step 1: Define input variables

var email = 'vanleb24@uwosh.edu';
var password = 'samplepassword';
var confirmpassword = 'samplepassword';

var results = '"Welcome!"';
//Step 2: Calculations
var emailcheck = email.includes ("@uwosh.edu");

if (email = null){
	results = 'Please fill in remaining fields';
}
else if (password = null){
	results = 'Please fill in remaining fields';
}
else if (confirmpassword = null){
	results = 'Please fill in remaining fields';
}
else if (password > 6){
	results = 'Password must be at least 6 characters';
}

else if (password != confirmpassword) {
	results = 'Password does not match Confirm Password';
}
//Step 3: Results
console.log(results);

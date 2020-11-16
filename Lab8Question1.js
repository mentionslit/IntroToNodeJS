console.log('Lab8Question1');

//Step 1: Define input variables
let programminglanguages = ['Python', 'JAVA', 'PHP', 'C#', 'C++', 'SQL'];
let databaseTechnologies = ['MySQL', 'SQL', 'SQLite', 'Oracle', 'DB2', 'SQL Server'];

programminglanguages.forEach(programmingItem =>
{
	databaseTechnologies.forEach(databaseItem =>
	{
	//conditional
	if (databaseItem == programmingItem){
			console.log(databaseItem)
	}	
 });
});
//Step 2: Calculations

//Step 3: Results

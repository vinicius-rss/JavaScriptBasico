function lifeInWeeks(age) {
    
    /************Don't change the code above************/    
        
        //Write your code here.
        const targetAge = 90; // Maximum age
        const yearsLeft = targetAge - age; // Calculate remaining years
    
        const daysLeft = yearsLeft * 365; // Days in a year
        const weeksLeft = yearsLeft * 52; // Weeks in a year
        const monthsLeft = yearsLeft * 12; // Months in a year
    
        console.log(`You have ${daysLeft} days, ${weeksLeft} weeks, and ${monthsLeft} months left.`);
        
    /*************Don't change the code below**********/
    }
    
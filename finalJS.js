let form = document.getElementById("myForm"); // Form element for the submit button
const DaysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]; // List to display Days of the week as h3 elements

form.addEventListener("submit", function(event) {
    event.preventDefault();  // Prevent form from submitting and refreshing the page

    
    let breakfast = document.getElementById("Bfast").value;
    let Snack1 = document.getElementById("Snack1").value;
    let Lunch = document.getElementById("Lunch").value;
    let Snack2 = document.getElementById("Snack2").value;
    let Dinner = document.getElementById("Dinner").value;

    const Meals = [breakfast, Snack1, Lunch, Snack2, Dinner];

    // Open a new window
    var myWindow = window.open("DisplayMealPlan.html", "MsgWindow", "width=1000,height=550");



    // Add content after the window is ready
    myWindow.onload = function() {
        let display = myWindow.document.createElement("div");

        // Loop through the days of the week and create a div for each day
        for (let i = 0; i < DaysOfWeek.length; i++) {
            let dayDiv = myWindow.document.createElement('div');
            let dayHeader = myWindow.document.createElement('h3');
            dayHeader.textContent = DaysOfWeek[i];
            dayDiv.appendChild(dayHeader);

            // For each day, loop through the meals and add them
            for (let r = 0; r < Meals.length; r++) {
                let mealDiv = myWindow.document.createElement('div');
                mealDiv.textContent = `${["Breakfast", "Snack 1", "Lunch", "Snack 2", "Dinner"][r]}: ${Meals[r]}`;
                dayDiv.appendChild(mealDiv);
            }

            // Append the day's div to the main display div
            display.appendChild(dayDiv);
        }

        // Append the display div to the body of the new window
        myWindow.document.body.appendChild(display);
        
        let printButton = myWindow.document.createElement("button");
        printButton.textContent = "Print Meal Plan";
        
        // Add an event listener to the print button
        printButton.addEventListener("click", function() {
            myWindow.print();  // This opens the print dialog
        });

        // Append the print button to the body of the new window
        myWindow.document.body.appendChild(printButton);
    };
    let name = document.getElementById("myInput").value;
    document.write(`<h1 style="text-align: center">Thank You ${name}, For Choosing Us As Your Meal Plan!</h1>`)
});

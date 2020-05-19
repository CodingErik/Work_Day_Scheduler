// setting up a moment object variable 
let m = moment();

// current day, month, day, year, time
$('#currentDay').text(m.format("dddd, MMMM Do YYYY, h:mm a"));


// plugin in the times for the planner

// check for the current time
    // set the class according to the current time of the day 

// save button is able to save to the local storage when clicked



$('saveBtn').on('click', function(event) {
    console.log('hello')
})
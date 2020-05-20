// setting up a moment object variable 
let m = moment();

// current day, month, day, year, time
$('#currentDay').text(m.format("dddd, MMMM Do YYYY, h:mm a"));


let toDos =  ['','','','','','','','','','']
// plugin in the times for the planner

// check for the current time
    // set the class according to the current time of the day
    
    
for (let i = 0; i < toDos.length; i++) {
    
    $('#time' + i ).text(moment({ hour: 8 + i }).format('hA'));








// save button is able to save to the local storage when clicked
$('.saveBtn').on('click', function(event) {
    console.log(event.target.value);
})

};








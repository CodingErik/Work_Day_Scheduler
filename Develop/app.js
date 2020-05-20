// setting up a moment object variable 
let m = moment();

// current day, month, day, year, time time running the seconds
$("#currentDay").text(moment().format("MMMM Do YYYY hh:mm:ss A"));

setInterval(function () {
    $("#currentDay").text(moment().format("MMMM Do YYYY hh:mm:ss A"));
}, 1000);


let toDos = ['', '', '', '', '', '', '', '', '', '']
// plugin in the times for the planner

// check for the current time
// set the class according to the current time of the day




for (let i = 0; i < toDos.length; i++) {
    let workHours = moment({ hour: 8 + i })
    let currentHour = moment().hour();
    $('#time' + i).text(workHours.format('hA'));

    // test variable to make sure the if conditional if else statements are working 
    // let test = moment({ hour: 12}).hour();



    if (workHours.hour() < currentHour) {
        $('#toDos' + i).addClass('past');
        $('#toDos' + i).attr("placeholder", "time has passed already");
    } else if (workHours.hour() > currentHour) {
        $('#toDos' + i).addClass('future');
        $('#toDos' + i).attr("placeholder", "plan now!");
    } else {
        $('#toDos' + i).addClass('present');
    }


    // save button is able to save to the local storage when clicked
    $('.saveBtn').on('click', function (event) {

        
        console.log($('#toDos9'+i));

        
       




    })

};








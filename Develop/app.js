// setting up a moment object variable 
let m = moment();

// current day, month, day, year, time time running the seconds
$("#currentDay").text(moment().format("MMMM Do YYYY hh:mm:ss A"));

setInterval(function () {
    $("#currentDay").text(moment().format("MMMM Do YYYY hh:mm:ss A"));
}, 1000);


// store the to dos from the list 
let toDosList = ['', '', '', '', '', '', '', '', '', '']


// display the time and set the conditions 
for (let i = 0; i < toDosList.length; i++) {
    
    let workHours = moment({ hour: 8 + i })
    let currentHour = moment().hour();
    // test variable to make sure the if conditional if else statements are working 
    // let test = moment({ hour: 12}).hour();

    // adding the times to the html
    $('#time' + i).text(workHours.format('hA'));

    
    // conditional statements to switch the classes of the description boxes
    if (workHours.hour() < currentHour) {
        $('#toDos' + i).addClass('past');
        $('#toDos' + i).attr("placeholder", "time has passed already");
    } else if (workHours.hour() > currentHour) {
        $('#toDos' + i).addClass('future');
        $('#toDos' + i).attr("placeholder", "plan now!");
    } else {
        $('#toDos' + i).addClass('present');
    }



};


$('.saveBtn').on('click', function (event) {

    let index = event.target.value;

    // testing the index
    console.log(index);

    // toDosList[index] = $('#toDos' + index)

    // localStorage.setItem('arr', JSON.stringify(toDos));


});











// let arr = [23,6,3,6,3,6,8,4,];

// localStorage.setItem('myNumbers', JSON.stringify(arr));


// console.log(JSON.parse(localStorage.getItem('myNumbers')))





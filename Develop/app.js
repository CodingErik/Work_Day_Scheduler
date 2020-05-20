// current day, month, day, year, time time running the seconds
$("#currentDay").text(moment().format("MMMM Do YYYY hh:mm:ss A"));

setInterval(function () {
    $("#currentDay").text(moment().format("MMMM Do YYYY hh:mm:ss A"));
}, 1000);


// store the to dos from the list 
let toDosList = ['', '', '', '', '', '', '', '', '', '']



// calling the function so if there is any persisted we can repopulate it
persist();


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
        $('#toDos' + i).prev().css('color', 'gray');
    } else if (workHours.hour() > currentHour) {
        $('#toDos' + i).addClass('future');
        $('#toDos' + i).attr("placeholder", "plan now!");
        $('#toDos' + i).prev().css('color', 'lightgreen');
    } else {
        $('#toDos' + i).addClass('present');
        $('#toDos' + i).prev().css('color', 'red');
    }

    $("#toDos" + i).val(toDosList[i]);


};


$('.saveBtn').on('click', function (event) {

    // this is linked directly to the buttons 
    let index = event.target.value;

    // testing the index
    // console.log(index);

    // assign the value to the array so we can then persist the data
    toDosList[index] = $('#toDos' + index).val();

    // persist the data 
    localStorage.setItem('toDosList', JSON.stringify(toDosList));

});



// this function get us the data that has been persisted 
function persist() {
    let list = JSON.parse(localStorage.getItem('toDosList'));
    if (list !== null) {
        toDosList = list;
    } else {
        return list;
    }
};



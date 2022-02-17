// =================================================
// Step 01 => Selecting elements
// ------------------------------
// selecting elements for showing output
const dd = document.getElementById("day");
const hh = document.getElementById("hour");
const mm = document.getElementById("minute");
const ss = document.getElementById("second");

// selecting elements for getting input
const inputDays = document.querySelector(".days");
const inputHours = document.querySelector(".hours");
const inputMinutes = document.querySelector(".minutes");
const inputSeconds = document.querySelector(".seconds");

let counterBtn = document.querySelector(".btn");

let days, hours, minutes, seconds;

// ===================================================
// Step 05: Reset Counter & Input Values
// --------------------------------------
// function for reset countdown values
function resetCoutDownValues() {
    // reset counter values
    days = '00';
    hours = '00';
    minutes = '00';
    seconds = '00';

    // reset input values
    inputDays.value = null;
    inputHours.value = null;
    inputMinutes.value = null;
    inputSeconds.value = null;
}

// ============================================================
// Step 04: Set properties for reset button and function call 
//          for reset counter and input values
// -------------------------------------------------------
// function for reset properties
function reset() {
    // set properties for start button
    counterBtn.innerText = "Start";
    counterBtn.style.backgroundColor = "teal";
    counterBtn.setAttribute('onclick', 'countDown()');

    // reset countdown values
    resetCoutDownValues();
}

// =============================================================
// Step 03: Countdown function and display countdown time
// -------------------------------------------------------
// function for start countdown
function startCountDown(day, hour, minute, second) {
    // time constants
    let dayConst = 86400;
    let hourConst = 3600;
    let minuteConst = 60;

    // calculate total seconds
    let totalSeconds = day * dayConst + hour * hourConst + minute * minuteConst + second * 1;

    let timeCount = setInterval(() => {

        let totalTime = totalSeconds--;

        // distribute total seconds to days, hours, minutes and seconds
        days = Math.floor(totalTime / dayConst);
        totalTime = totalTime % dayConst;

        hours = Math.floor(totalTime / hourConst);
        totalTime = totalTime % hourConst;

        minutes = Math.floor(totalTime / minuteConst);
        totalTime = totalTime % minuteConst;

        seconds = Math.floor(totalTime);

        // fix single number output
        if (days < 10) {
            days = '0' + days;
        }

        if (hours < 10) {
            hours = '0' + hours;
        }

        if (minutes < 10) {
            minutes = '0' + minutes;
        }

        if (seconds < 10) {
            seconds = '0' + seconds;
        }

        // reset countdown
        if (totalTime < 0) {
            clearInterval(timeCount);
            reset();
        }

        // reset countdown
        if (counterBtn.getAttribute('onclick') === 'countDown()') {
            clearInterval(timeCount);
            reset();
        }

        // display output
        dd.textContent = days;
        hh.textContent = hours;
        mm.textContent = minutes;
        ss.textContent = seconds;

    }, 1000);

}

// ========================================================
// Step 02 => Call function to Start Countdown
// --------------------------------------------
// When 'Start' button clicked, this function will call
function countDown() {

    // taking input values
    let getDays = inputDays.value;
    let getHours = inputHours.value;
    let getMinutes = inputMinutes.value;
    let getSeconds = inputSeconds.value;

    if (getDays === '' && getHours === '' && getMinutes === '' && getSeconds === '') {
        // if input area is empty then show alert
        alert('Please input time for start countdown');
    } else {
        // set properties for reset button
        counterBtn.innerText = "Reset";
        counterBtn.style.backgroundColor = "orangered";
        counterBtn.setAttribute('onclick', 'reset()');

        // function call for start countdown
        startCountDown(getDays, getHours, getMinutes, getSeconds);
    }

}
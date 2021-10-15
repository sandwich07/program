function isThisYearALeapYear() {
    var year = document.getElementById('input').value;
        if(year % 400 == 0) {
            document.getElementById('resultOne').innerHTML=('This is a leap year');
        }
        else if (year % 100 == 0) {
            document.getElementById('resultOne').innerHTML=('This is not a leap year');
        }
        else if (year % 4 == 0) {
            document.getElementById('resultOne').innerHTML=('This is a leap year');
        }
        else {
            document.getElementById('resultOne').innerHTML=('This is not a leap year');
        }
    }
    
    function getAllLeapYearsBetweenTwoYears() {
    var startYear = document.getElementById('inputStart').value;
    var end = document.getElementById('inputEnd').value;
    var numberOfLeapYears = 0;
    for(let i = startYear; i<=end; i++) {
        if(isThisYearALeapYear(i) ==true) {
            numberOfLeapYears++;
        }
        document.getElementById('resultTwo').innerHTML=('At year '+i+' we had a total of '+numberOfLeapYears+' leap years');
        }
    }
    
    function printLeapYear(year) {
        console.log(isThisYearALeapYear(year));
    }

        
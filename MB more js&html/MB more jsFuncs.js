function BMICalc(){
    var userHeight = prompt("What is your height in meters");
    while(isNaN(userHeight) === true || userHeight === null) {
        userHeight = prompt("Invalid input! Please enter a Number. What is your height in meters")
    }
    var userWeight = prompt("What is your weight in Kg");
    while(isNaN(userWeight) === true || userWeight === null) {
        userWeight = prompt("Invalid input! Please enter a Number. What is your weight in Kg")
    }
    var BMI = Math.round((userWeight) / (userHeight * userHeight));
    alert("Your Body Mass Index is " + BMI + "!");
    if (BMI < 19 && 0 < BMI) {
        alert("You need to gain more weight.")
    } else if( BMI <= 24 && 19 <= BMI){
        alert("This is good! Keep it up.")
    } else if (BMI <= 29 && 24 < BMI){
        alert("Damn! You need to watch your weight.")
    } else if (BMI > 29 ){
        alert("Damn! Hell NO. You're OBESE")
    } else {
        alert("Invalid Inputs! Try again")
    }
}
function loveMatch() {
    document.getElementById("demo1").classList.remove("demo1Animate")
    document.getElementById("demo1").innerHTML="We're about to Find out what your supposed crush think of you";
    /*
    
    */
    setTimeout( LMBegins, 2200);
    function LMBegins() {
        let userName = prompt("State Your Name").toUpperCase();
        let userLoverName = prompt("State Your Crush's Name").toUpperCase();
        let match = 0;
        let Emotion = ["A Friend", "A Lover", "An Admirer", "A Marriage Candidate", "An Enemy", "Cat and Rat"]//console.log(userName.length)
        
        for (let i = 0; i < userName.length; i++) {
            if (userLoverName.includes(userName[i]) === true) { //var x = userName[i]; console.log(x);
                match++ ;
                let toPop = userLoverName.indexOf(userName[i]); //console.log(toPop);
                userLoverName = userLoverName.replace(userLoverName.charAt(toPop), "1");
            } else {
                console.log(userLoverName)
            }
        }
        console.log(match);
        match = 2 * match;
        console.log(userName.length + userLoverName.length - (match));
        let indexOfEmotion = (userName.length + userLoverName.length - (match)) % 6; //console.log(indexOfEmotion)
        if (indexOfEmotion === 0) {
            document.getElementById("demo1").innerHTML="  Your supposed crush think of you as " + Emotion[Emotion.length - 1] + "  ";
            document.getElementById("demo1").classList.add("demo1Animate")
        } else {
            document.getElementById("demo1").innerHTML="  Your supposed crush think of you as " + Emotion[indexOfEmotion - 1] + "  ";
            document.getElementById("demo1").classList.add("demo1Animate")
        }
    }
}
function leapYear() {
    var year = prompt("State the year");
    while(isNaN(year) === true || year === null) {
        year = prompt("Invalid input! Please enter a Number.")
    }
    if (year % 4 === 0) {
        if (year % 100 === 0) {
            if (year % 400 === 0) {
                alert(year + " is a leap year")
            } else {
                alert(year + " is not a leap year")
            }
        } else {
            alert(year + " is a leap year")
        }
    } else {
        alert(year + " is not a leap year")
    }
}
function fizzBuzz(){
    var fbArray = [];
    let x = 0;
    while (x <= 30) {
        if (x % 5 === 0 & x % 3 === 0){
            fbArray.push("fizzbuzz"); 
        } else if (x % 3 === 0) {
            fbArray.push("fizz"); 
        } else if (x % 5 === 0){
            fbArray.push("buzz");
        } else {
            fbArray.push(x);
        }
        x++ ;
        console.log(fbArray)
    }
}

//to get  current date and time
const timeNowEl = document.querySelector('.time-now');
const dateNowEl = document.querySelector('.date-now');

const date = new Date();
const day = date.getDay();
const currentHours = date.getHours();
const currentMins = date.getMinutes();

const getCurrentTime = currentHours >= 12 ? `${currentHours} : ${currentMins} PM` : `${currentHours} : ${currentMins} AM`;

timeNowEl.innerHTML = getCurrentTime;

const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

for (let i = 0; i <= days.length; i++) {
  if (day === i) {
    // console.log(days[i]);
    dateNowEl.innerHTML = `Today is: ${days[i]}`;
  }
}
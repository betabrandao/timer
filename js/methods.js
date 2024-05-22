// metodos timer
//
// criado por Beta Brandao

var clear = false;

function disableButtonsById(id, value) {
  document.getElementById(id).disabled = value;
}

function textTitle(value) {
    document.getElementById("text-title").innerHTML = value;
}

function updateElementById(id, increment) {
  let value = parseInt(document.getElementById(id).value);
  if (increment) { value++; } else { value--;}
  if (value < 0) {value = 0;}

  document.getElementById(id).value = value;
  checkStates();
}

function parseVal(val) {
  if (val<10) {
    return "0" + val;
  }
  else {
    return val;
  }
}

function eventButton() {
  let button =  document.getElementById("buttonStart");

  if (button.textContent == "Start") {
    let hou = parseInt(document.getElementById("inputHour").value);
    let min = parseInt(document.getElementById("inputMinute").value);
    let sec = parseInt(document.getElementById("inputSecond").value);
    sec++;
    document.getElementById("timer").innerHTML = parseVal(hou) + ":" + parseVal(min) + ":00";
    countdown(hou, min, sec);
    timerVisibility(true);
    button.textContent = "Stop";
  } else {
    clear = true;
    timerVisibility(false);
    button.textContent = "Start";
  }
}

function checkStates() {
  let hou = parseInt(document.getElementById("inputHour").value);
  let min = parseInt(document.getElementById("inputMinute").value);
  let sec = parseInt(document.getElementById("inputSecond").value);
  let tot = hou+min+sec;
  if (tot != 0) {
    disableButtonsById("buttonStart", false)
  } else {
    disableButtonsById("buttonStart", true)
  }
}

function clearF() {
  document.getElementById("inputHour").value = 0;
  document.getElementById("inputMinute").value = 0;
  document.getElementById("inputSecond").value = 0;
}

function timerVisibility(type) {
  if (!type) {
    document.getElementById("container").className = "container";  
    document.getElementById("timeDiv").className = "hiddenAll";
  } else {  
    document.getElementById("container").className = "hiddenAll";  
    document.getElementById("timeDiv").className = "timeDiv";  
  }

}

function countdown(phour, pminute, psecond) {
  // Set the date we're counting down to
    clear = false;
    let d = new Date();
    let countDownDate = d.setHours(d.getHours() + phour, d.getMinutes() + pminute ,d.getSeconds() + psecond,0);
  
    // Update the count down every 1 second
    let x = setInterval(function() {
    // Get today's date and time
    let now = new Date().getTime();
  
    // Find the distance between now and the count down date
     distance = countDownDate - now;
   // if (phour == 0 && pminute == 0 && psecond==0) {
   //   clear
   // }
  
    // Time calculations for days, hours, minutes and seconds
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
    // Display the result in the element with id="Timer"
    
    document.getElementById("timer").innerHTML = parseVal(hours) + ":" + parseVal(minutes) + ":" + parseVal(seconds);
  
    // If the count down is finished, write some text
    if (distance < 0 || clear != false) {
      clearInterval(x);
      document.getElementById("timer").innerHTML = "00:00:00";   //clearF();
      timerVisibility(false);
      document.getElementById("buttonStart").textContent = "Start";
    }
  }, 1000);
  }

  // metodos de imagem
"use strict";

function changeTheme(param) {

  let style = [
    'body-effect-01',
    'body-effect-02',
    'body-effect-03',
    'body-effect-04',
    'body-effect-05',
    'body-effect-06',
    'body-effect-07',
  ];

  document.body.setAttribute('class', (style[param] || style[0]));
  //document.body.setAttribute('style', color[param]);
   return true;
}

const fileDataURL = file => new Promise((resolve,reject) => {
  let fr = new FileReader();
  fr.onload = () => resolve( fr.result);
  fr.onerror = reject;
  fr.readAsDataURL(file)
});

function showResult(file) {
  fileDataURL(file)
  .then( data => (
    document.body.style.backgroundImage = "url('" + data + "')"
  )).catch(err => console.log(err));
}

// Init Script;    
checkStates();
//changeColor(0);

//Inputs
const inputHeight = document.getElementById('height');
const inputWeight = document.getElementById('weight');

//BMI
const bmi = document.querySelectorAll('.BMI');
const bmiText = document.querySelectorAll('.BMItext');
const bmiClassification = document.querySelectorAll('.classification');
const bmiRange = document.querySelectorAll('.range');


//Buttons - 1
const buttonMetric = document.getElementById('buttonMetric');
const buttonImperial = document.getElementById('buttonImperial');
const frameImperial = document.querySelector('.frameImperial');

function button() {
    if (buttonImperial.classList.contains('imperialOff')) {
        buttonMetric.classList.remove('metricOn');
        buttonMetric.classList.add('metricOff');
        buttonImperial.classList.remove('imperialOff');
        buttonImperial.classList.add('imperialOn');
        frameImperial.style.display = 'block';
        units()
    } else {
        buttonImperial.classList.remove('imperialOn');
        buttonImperial.classList.add('imperialOff');
        buttonMetric.classList.remove('metricOff');
        buttonMetric.classList.add('metricOn');
        frameImperial.style.display = 'none';
        units()
    }
};

//Units
const unitHeight = document.querySelector('.unitHeight');
const unitWeight = document.querySelector('.unitWeight');
var frame = document.getElementById('frame1');

function units() {
    if(buttonImperial.classList.contains('imperialOn')) {
        unitHeight.innerHTML= 'ft';
        unitWeight.innerHTML= 'st';
    } else {
        unitHeight.innerHTML= 'cm';
        unitWeight.innerHTML= 'kg';
    }
}


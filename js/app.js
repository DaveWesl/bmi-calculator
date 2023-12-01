//Buttons
const buttonMetric = document.getElementById('buttonMetric');
const buttonImperial = document.getElementById('buttonImperial');
const frameImperial = document.querySelectorAll('.frameImperial');

function button() {
    if (buttonImperial.classList.contains('imperialOff')) {
        buttonMetric.classList.remove('metricOn');
        buttonMetric.classList.add('metricOff');
        buttonImperial.classList.remove('imperialOff');
        buttonImperial.classList.add('imperialOn');
        frameImperial.forEach(element => {
            element.style.display = 'block';
        });
        units()
    } else {
        buttonImperial.classList.remove('imperialOn');
        buttonImperial.classList.add('imperialOff');
        buttonMetric.classList.remove('metricOff');
        buttonMetric.classList.add('metricOn');
        frameImperial.forEach(element => {
            element.style.display = 'none';
        });
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
};

//Inputs
const inputHeight = document.getElementById('height');
const inputWeight = document.getElementById('weight');
const inputHeightImp = document.getElementById('heightImperial');
const inputWeightImp = document.getElementById('weightImperial');

var bmiNumber = document.querySelector('.BMI');
const bmiText = document.querySelector('.BMItext');
const bmiClassification = document.querySelector('.classification');
const bmiRange = document.querySelector('.range');
const frameStart = document.querySelector('.frame-1-1');
const frameBmi = document.querySelector('.frame-1');
const suggest = document.querySelector('.suggest');


inputHeight.addEventListener('input', function() {
    inputHeight.value = inputHeight.value.replace(/[^0-9]/g, '');
    inputHeight.style.color = 'rgba(37, 51, 71, 1)';
    console.log('Wert:', inputHeight.value);
    calcBmi(inputHeight.value, inputWeight.value, inputHeightImp.value, inputWeightImp.value);
});

inputHeightImp.addEventListener('input', function() {
    inputHeightImp.value = inputHeightImp.value.replace(/[^0-9]/g, '');
    inputHeightImp.style.color = 'rgba(37, 51, 71, 1)';
    console.log('Wert:', inputHeightImp.value);
    calcBmi(inputHeight.value, inputWeight.value, inputHeightImp.value, inputWeightImp.value);
});

inputWeight.addEventListener('input', function() {
    inputWeight.value = inputWeight.value.replace(/[^0-9]/g, '');
    inputWeight.style.color = 'rgba(37, 51, 71, 1)';
    console.log('Wert:', inputWeight.value);
    calcBmi(inputHeight.value, inputWeight.value, inputHeightImp.value, inputWeightImp.value);
});

inputWeightImp.addEventListener('input', function() {
    inputWeightImp.value = inputWeightImp.value.replace(/[^0-9]/g, '');
    inputWeightImp.style.color = 'rgba(37, 51, 71, 1)';
    console.log('Wert:', inputWeightImp.value);
    calcBmi(inputHeight.value, inputWeight.value, inputHeightImp.value, inputWeightImp.value);
});

function calcBmi(inputHeightValue, inputWeightValue, inputHeightValue2, inputWeightValue2){
    frameStart.style.display = 'none';
    frameBmi.style.display = 'grid';
    if(buttonMetric.classList.contains('metricOn')){
        const heightInMeter = inputHeightValue / 100; 
        const bmi = inputWeightValue / (heightInMeter ** 2);
        const bmiRounded = bmi.toFixed(1);
        const bmiIdeal1 = 18.5 * (heightInMeter ** 2);
        const bmiIdeal2 = 24.9 * (heightInMeter ** 2);
        if (bmi <= 99 && bmi >= 1) {
            bmiNumber.innerHTML = bmiRounded;
        
            if (bmiRounded < 18.5) {
                bmiClassification.innerHTML = 'a Underweight';
            } else if (bmiRounded <= 24.9) {
                bmiClassification.innerHTML = 'a Healthy weight';
            } else if (bmiRounded <= 29.9) {
                bmiClassification.innerHTML = 'a Overweight';
            } else {
                bmiClassification.innerHTML = 'Obese';
            }
        
            suggest.style.display = 'block';
            bmiRange.innerHTML = `${bmiIdeal1.toFixed(1)}kg - ${bmiIdeal2.toFixed(1)}kg`;
        } else {
            bmiNumber.innerHTML = '0';
        }

    } else {
        const heightInMeter = (inputHeightValue * 0.3048) + (inputHeightValue2 * 0.0254);
        const kilogramsLbs = inputWeightValue * 6.35029;
        const kilogramsSt = inputWeightValue2 * 0.453592;
        const kilogramSum = kilogramsLbs + kilogramsSt;
        const bmi = kilogramSum / (heightInMeter ** 2);
        const roundedBMI = Math.round(bmi * 10) / 10;

        const bmiIdeal1 = 18.5 * (heightInMeter ** 2);
        const weightLbs = bmiIdeal1 * 2.20462;
        const weightSt = Math.floor(weightLbs / 14);
        const remainingLbs = weightLbs % 14;
        
        const bmiIdeal2 = 24.9 * (heightInMeter ** 2);
        const weightLbs2 = bmiIdeal2 * 2.20462;
        const weightSt2 = Math.floor(weightLbs2 / 14);
        const remainingLbs2 = weightLbs2 % 14;
        if (bmi < 99 && bmi >= 1) {
            bmiNumber.innerHTML = roundedBMI;
            if (roundedBMI >= 30){
                bmiClassification.innerHTML = 'Obese';
            }
            if (roundedBMI >= 25 && bmi <= 29.9) {
                bmiClassification.innerHTML = 'a Overweight';
            }
            if (roundedBMI >=18.5 && bmi <= 24.9 ) {
                bmiClassification.innerHTML = 'a Healthy weight';                
            }
            if (roundedBMI < 18.5){
                bmiClassification.innerHTML = 'a Underweight';
            };
            suggest.style.display = 'block';
            bmiRange.innerHTML = `${Math.round(weightSt)}st ${Math.round(remainingLbs)}lbs - ${Math.round(weightSt2)}st ${Math.round(remainingLbs2)}lbs`;


        } else {
            bmiNumber.innerHTML = '0';
        }
}};

//Animation Logos-third-section

document.addEventListener("DOMContentLoaded", function() {
    // Ziel-Divs auswählen
    var einfliegenDivs = document.querySelectorAll('.einfliegen');
  
    // Funktion für das Einfliegen, die vom IntersectionObserver aufgerufen wird
    function handleIntersection(entries, observer) {
      entries.forEach(entry => {
        console.log(entry.isIntersecting);
        if (entry.isIntersecting) {
          // Iteriere durch jedes Element in der NodeList
          einfliegenDivs.forEach(div => {
            div.classList.add('eingeblendet');
          });
  
          // Observer entfernt das Ziel-Element automatisch nach dem Eintritt
          // Wenn das Element erneut beobachtet werden soll, füge es hier wieder hinzu
          observer.unobserve(entry.target);
        }
      });
    }
  
    // IntersectionObserver erstellen
    var observer = new IntersectionObserver(handleIntersection, { threshold: 0.5 });
  
    // Ziel-Div dem Observer hinzufügen
    var thirdSection = document.querySelector('.third-section');
    observer.observe(thirdSection);
  });
  
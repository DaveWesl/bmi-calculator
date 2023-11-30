


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


inputHeight.addEventListener('input', function() {
    inputWeight.value = inputWeight.value.replace(/[^0-9]/g, '');
    console.log('Wert:', inputHeight.value);
    calcBmi(inputHeight.value, inputWeight.value, inputHeightImp.value, inputWeightImp.value);
});

inputHeightImp.addEventListener('input', function() {
    inputWeight.value = inputWeight.value.replace(/[^0-9]/g, '');
    console.log('Wert:', inputHeightImp.value);
    calcBmi(inputHeight.value, inputWeight.value, inputHeightImp.value, inputWeightImp.value);
});

inputWeight.addEventListener('input', function() {
    inputWeight.value = inputWeight.value.replace(/[^0-9]/g, '');
    console.log('Wert:', inputWeight.value);
    calcBmi(inputHeight.value, inputWeight.value, inputHeightImp.value, inputWeightImp.value);
});

inputWeightImp.addEventListener('input', function() {
    inputWeight.value = inputWeight.value.replace(/[^0-9]/g, '');
    console.log('Wert:', inputWeightImp.value);
    calcBmi(inputHeight.value, inputWeight.value, inputHeightImp.value, inputWeightImp.value);
});

function calcBmi(inputHeightValue, inputWeightValue, inputHeightValue2, inputWeightValue2){
    if(buttonMetric.classList.contains('metricOn')){
        const heightInMeter = inputHeightValue / 100; 
        bmi = inputWeightValue / (heightInMeter ** 2);
        bmiIdeal1 = 18.5 * (heightInMeter ** 2);
        bmiIdeal2 = 24.9 * (heightInMeter ** 2);
        if(bmi <= 99 && bmi >= 1){
            bmiNumber.innerHTML = `${bmi.toFixed(1)}`;
        } else {
            bmiNumber.innerHTML = '0';
        }

        if(bmi < 18.5 && bmi >= 1){
            bmiClassification.innerHTML = 'Underweight';
            bmiRange.innerHTML = `${bmiIdeal1.toFixed(1)}kg - ${bmiIdeal2.toFixed(1)}kg`;
        } if(bmi >= 18.5 && bmi <= 24.9){
            bmiClassification.innerHTML = 'Healthy weight';
            bmiRange.innerHTML = `${bmiIdeal1.toFixed(1)}kg - ${bmiIdeal2.toFixed(1)}kg`;
        } if(bmi >= 25 && bmi <= 29.9){
            bmiClassification.innerHTML = 'Overweight';
            bmiRange.innerHTML = `${bmiIdeal1.toFixed(1)}kg - ${bmiIdeal2.toFixed(1)}kg`;
        } if(bmi >= 30 && bmi <= 99){
            bmiClassification.innerHTML = 'Obese';
            bmiRange.innerHTML = `${bmiIdeal1.toFixed(1)}kg - ${bmiIdeal2.toFixed(1)}kg`;
        } 

    } else {
        const heightInMeter = (inputHeightValue * 0.3048) + (inputHeightValue2 * 0.0254);
        const kilograms1 = inputWeightValue * 6.35029;
        const kilograms2 = inputWeightValue2 * 0.453592;
        const kilogramsSum = kilograms1 + kilograms2;
       // bmi = kilogramsSum / (heightInMeter ** 2);
        bmiIdeal1 = 18.5 * (heightInMeter ** 2);
        bmiIdeal2 = 24.9 * (heightInMeter ** 2);
        if(bmi <= 99 && bmi >= 1){
            bmiNumber.innerHTML = `${bmi.toFixed(1)}`;
        } else {
            bmiNumber.innerHTML = '0';
    }   
}};

/*- Underweight: BMI less than 18.5
- Classifaction: Healthy weight: Range: BMI 18.5 to 24.9
- Overweight: BMI 25 to 29.9
- Obese: BMI 30 or greater 

function calcBmi(inputHeightValue, inputWeightValue, inputHeightValue2, inputWeightValue2){
    if(buttonMetric.classList.contains('metricOn')){
        const heightInMeter = inputHeightValue / 100; 
        bmi = inputWeightValue / (heightInMeter ** 2);
        if(bmi <= 99 && bmi >= 1){
            bmiNumber.innerHTML = `${bmi.toFixed(1)}`;
        } else {
            bmiNumber.innerHTML = '0';
        }
    } else {
        const heightInMeter = (inputHeightValue * 0.3048) + (inputHeightValue2 * 0.0254);
        const kilograms1 = inputWeightValue * 6.35029;
        const kilograms2 = inputWeightValue2 * 0.453592;
        bmi = (kilograms1 + kilograms2) / (heightInMeter ** 2);
        if(bmi <= 99 && bmi >= 1){
            bmiNumber.innerHTML = `${bmi.toFixed(1)}`;
        } else {
            bmiNumber.innerHTML = '0';
        console.log(`${bmi}`);
    }   
}};

*/
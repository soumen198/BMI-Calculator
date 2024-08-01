window.onload = () => {
    const button = document.querySelector('#btn');
    button.addEventListener('click', calculateBmi)
}

function calculateBmi() {

    const height = document.querySelector('#height').value;
    const weight = document.querySelector('#weight').value;
    const result = document.querySelector('#result');
   
    if (!height || isNaN(height) || height < 0) {
        result.innerText = "Please provide a valid height";
        return;
    } else if (!weight || isNaN(weight) || weight < 0) {
        result.innerText = "Please provide a valid weight";
        return;
    }

    const bmi = (weight / ((height * height) / 10000)).toFixed(2);

    if (bmi < 18.5) {
        result.innerText = `You Are Under Weight And Your BMI is: ${bmi}`;
    } else if (bmi >= 18.5 && bmi < 24.9) {
        result.innerText = `Your Weight Is Normal And Your BMI is: ${bmi}`;
    } else if (bmi >= 25 && bmi < 29.9) {
        result.innerText = `You Are Over Weight And Your BMI is: ${bmi}`;
    }
    else {
        result.innerText = `Extreme Obesity! Your BMI Is: ${ bmi } `;

    }
}
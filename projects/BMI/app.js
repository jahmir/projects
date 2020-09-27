const calculateBtn = document.querySelector('#calculate_bmi');
const bmiResult = document.querySelector('#bmi_result');
const form = document.querySelector('form')

calculateBtn.addEventListener('click', (event) => {
    const weight = document.querySelector('#weightField').value;
    const height = document.querySelector('#heightField').value;

    if(weight == '' || height == ''){
        return alert("Please enter valid values");
    }

    const result = weight / (height * height);

    let bmiMsg;
    let msgcolor = 'text-danger';

    if(result < 18.5){
        bmiMsg = 'Thinness';
    }
    else if(result >= 18.5 && result <= 25){
        bmiMsg = 'Normal';
        msgcolor = 'text-success';
    }
    else if(result > 25 && result <= 30){
        bmiMsg = 'Overweight';
    }
    else if(result > 30){
        bmiMsg = 'Obese';
    }

    bmiResult.innerHTML = `BMI = <b>${Math.round(result * 100)/100}</b>(<span class="${msgcolor}"><b>${bmiMsg}</b></span>)`;
});

form.addEventListener('submit', e => {
    e.preventDefault()
})
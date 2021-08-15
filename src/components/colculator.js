
const gend = document.querySelector('#gender');
const activity = document.querySelector('.calculating__choose_big');
const showCalculator = document.querySelector('#show_calc');
const calculator = document.querySelector('.calculating__field');

const calculateCalories = () => {
    const gender = document.querySelector('.calculating__choose-item_active').dataset.gender;
    const height = document.querySelector('#height');
    const weight = document.querySelector('#weight');
    const age = document.querySelector('#age');
    const active = document.getElementsByClassName('calculating__choose-item_active')[1].dataset.active;
    const result = document.querySelector('.calculating__result').firstElementChild;
    const sum = Number(gender) + Number(height.value) + Number(weight.value) + Number(age.value) + Number(active);
    result.textContent = `${sum}00`;
};

const calculateActive = (event,parEl) => {
        const target = event.target;
        const actGend = parEl.querySelector('.calculating__choose-item_active');

        if (target.className === 'calculating__choose-item') {
            actGend.classList.remove('calculating__choose-item_active');
            target.classList.add('calculating__choose-item_active');
        }
        calculateCalories();
};


const parameters = () => {
    const param = document.querySelector('.calculating__choose_medium').childNodes;
    param.forEach(inp => {
        inp.addEventListener('change', () => {
            calculateCalories();
        });
    });
   
};

export {
    calculateActive,
    calculateCalories,
    parameters,
    gend,
    activity,
    showCalculator,
    calculator
};

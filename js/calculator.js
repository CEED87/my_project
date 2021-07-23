const calculateCalories = () => {
    const gender = document.querySelector('.calculating__choose-item_active').dataset.gender;
    const height = document.querySelector('#height');
    const weight = document.querySelector('#weight');
    const age = document.querySelector('#age');
    const active = document.getElementsByClassName('calculating__choose-item_active')[1].dataset.active;
    const result = document.querySelector('.calculating__result');
    console.log(result)
}

calculateCalories();


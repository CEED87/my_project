
const arrows = document.querySelector('.offer__slider-counter');
const arrowRight = document.querySelector('img[alt="next"]');
const arrowLeft = document.querySelector('img[alt="prev"]');
const total = arrows.querySelector('#total');

function setCount(par,par2) {
    if (par < 10) {
        par2.textContent = `0${par}`;
    } else {
        par2.textContent = `${par}`;
    }
}

export {setCount,arrows,arrowRight,arrowLeft,total};

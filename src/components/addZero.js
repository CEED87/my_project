

 const arrows = document.querySelector('.offer__slider-counter');
const arrowRight = document.querySelector('img[alt="next"]');
const arrowLeft = document.querySelector('img[alt="prev"]');
const total = arrows.querySelector('#total');
const imgSlide = document.querySelector('.mini').children;
const offerSlide = document.querySelector('.offer__slide').firstElementChild;
const current = arrows.querySelector('#current');
const tabheaderItem = document.querySelector('.tabheader__items');
const tabContent = document.querySelector('.tabcontent');
function setCount(par,par2) {
    if (par < 10) {
        par2.textContent = `0${par}`;
    } else {
        par2.textContent = `${par}`;
    }
}

export {setCount,
    arrows,
    arrowRight,
    arrowLeft,
    total,
    imgSlide,
    offerSlide,
    current,
    tabheaderItem,
    tabContent
};

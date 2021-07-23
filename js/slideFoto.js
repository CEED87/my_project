// Tabe_menu && slider

const tabheaderItem = document.querySelector('.tabheader__items');
const tabContent = document.querySelector('.tabcontent');


tabheaderItem.addEventListener('click', (event) => {
    const tab = event.target;
    const actvTabe = tabheaderItem.querySelector('.active__item');
    const imgTab = document.querySelectorAll('div[data-img]');
     
    if (tab.className === 'tabheader__item') {
        actvTabe.classList.remove('active__item');
        tab.classList.add('active__item');

        imgTab.forEach(el => {
            if (el.dataset.img === tab.dataset.tabe) {
                let atrValue = el.firstElementChild.getAttribute('src');
                let content = el.lastElementChild.textContent;
                tabContent.firstElementChild.setAttribute('src',atrValue);
                tabContent.lastElementChild.textContent = content;
            }
        });
    } 
});

// Slider MiniFoto

const arrows = document.querySelector('.offer__slider-counter');
const arrowRight = document.querySelector('img[alt="next"]');
const arrowLeft = document.querySelector('img[alt="prev"]');
const imgSlide = document.querySelector('.mini').children;
const offerSlide = document.querySelector('.offer__slide').firstElementChild;
const current = arrows.querySelector('#current');
const total = arrows.querySelector('#total');
let count = 1;
offerSlide.src = imgSlide[count-1].src;
total.textContent = imgSlide.length;

setCount(imgSlide.length, total);

arrowRight.addEventListener('click', () => {
    if (current.textContent <= imgSlide.length-1) {
        ++count;
        offerSlide.src = imgSlide[count-1].src;
        setCount(count, current);
    } 
});
    
arrowLeft.addEventListener('click', () => {
    if (current.textContent > 1) {
        --count;
        offerSlide.src = imgSlide[count-1].src;
        setCount(count, current);
    }
});

function setCount(par,par2) {
    if (par < 10) {
        par2.textContent = `0${par}`;
    } else {
        par2.textContent = `${par}`;
    }
}







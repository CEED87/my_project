
import "./style/main.scss";
import {calculateActive,calculateCalories,parameters,gend,activity,showCalculator,calculator} from "./components/colculator";
import {getCardsFirstPage} from "./utils/getDataLocal";
import {setCount,arrows,arrowRight,arrowLeft,total} from "./components/miniSlider";
import {closeModal,openModal,modalTrigger,modal,modalCloseBtn,addCard,addCardBtn,order,firstName,phone} from "./components/feedBack";
import {addNewCard, dataServer,addUserPhone,btnSendmodel,btnDark} from "./utils/postDataLocal";

const router = () => {
    
    const imgSlide = document.querySelector('.mini').children;
    const offerSlide = document.querySelector('.offer__slide').firstElementChild;
    const current = arrows.querySelector('#current');
    let count = 1;
    offerSlide.src = imgSlide[count-1].src;
    total.textContent = imgSlide.length;

    // Tabe_menu && slider variables

    const tabheaderItem = document.querySelector('.tabheader__items');
    const tabContent = document.querySelector('.tabcontent');

    // calculator

    showCalculator.addEventListener('click', () => {
        calculator.classList.toggle('hide');
    });

    gend.addEventListener('click', (event) => {
        calculateActive(event,gend);
    });
    
    activity.addEventListener('click', (event) => {
        calculateActive(event,activity);
    });
    
    calculateCalories();

    parameters();

    // loading cards from the server

    getCardsFirstPage();

    // miniSlider

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

    setCount(imgSlide.length, total);

    // Tabe_menu && slider
    
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
                    tabContent.classList.add('fade');
                    setTimeout(() => {
                        tabContent.classList.remove('fade');
                    },500);
                    
                    tabContent.lastElementChild.textContent = content;
                }
            });
        } 
    });

    // Model feedback

    modalTrigger.addEventListener('click', () => {
        openModal(modal);
    });
    modalCloseBtn.forEach((el) => {
            el.addEventListener('click', () => {
                    closeModal(modal);
                    closeModal(addCard);
            });
    });

    modal.addEventListener('click', (e) => {
               if (e.target === modal) {
                    closeModal(modal);
            }
    });

    document.addEventListener('keydown', (e) => {
            if (e.code === "Escape" && modal.classList.contains('show')) {
                    closeModal(modal);
            }
    });

    addCardBtn.addEventListener('click', () => {
            openModal(addCard);
    });


    addCard.addEventListener('click', (e) => {
            if (e.target === addCard) {
                    closeModal(addCard);
            }
    });

    order.addEventListener('click', (event) => {
        event.preventDefault();
        if (event.target.className === 'btn btn_dark btn_min') {

                firstName.value = '';
                phone.value = '';
                console.log(firstName.value, phone.value);
        }
    });

    // Add new card

    dataServer.addEventListener('click', addNewCard);

    // Add userPhone
   
    btnSendmodel.addEventListener('click', () => {
         addUserPhone(btnSendmodel);
    });

    btnDark.addEventListener('click', () => {
        addUserPhone(btnDark);
   });
    

    // Page Cards

    console.log(btnSendmodel)
// const p = document.querySelector('.cards')
    
   
};

router();





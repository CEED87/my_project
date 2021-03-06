
import "../style/main.scss";
import {gend,activity,showCalculator,calculator} from "../components/variables";
import {calculateActive,calculateCalories,parameters} from "../components/colculator";
import {getCardsFirstPage} from "../utils/getDataLocal";
import {setCount,arrowRight,arrowLeft,tabheaderItem,tabContent} from "../components/addZero";
import {closeModal,openModal,addCard,closeM,modal,answer,modalCloseBtn,addCardBtn,order,firstName,phone,modalTrigger} from "../components/feedBack";
import {addNewCard,dataServer,addUserPhone,btnSendmodel,btnDark} from "../utils/postDataLocal";
import {myDate,setClock} from "../components/timer";

const router = () => {
     
    // calculator
    if (showCalculator) {
        showCalculator.addEventListener('click', () => {
        calculator.classList.toggle('deployed');
    });
    }
    
    if (gend) {
        gend.addEventListener('click', (event) => {
        calculateActive(event,gend);
    });
    }
    if (activity) {
        activity.addEventListener('click', (event) => {
        calculateActive(event,activity);
    });
    }
    
    
        calculateCalories();
    
    

    parameters();
    
    

    // loading cards from the server

    getCardsFirstPage();

    // miniSlider
    const imgSlide = document.querySelector('.mini').children;
    const total = document.querySelector('#total');
    const offerSlide = document.querySelector('.offer__slide').firstElementChild;
    const current = document.querySelector('#current');
    let count = 1;
    offerSlide.src = imgSlide[count-1].src;
    if (total) {
        total.textContent = imgSlide.length;
    }
    
    if (imgSlide && current) {
        arrowRight.addEventListener('click', () => {
        if (current.textContent <= imgSlide.length-1) {
            ++count;
            offerSlide.src = imgSlide[count-1].src;
            setCount(count, current);
        } 
    });
    }
    
        
    arrowLeft.addEventListener('click', () => {
        if (current.textContent > 1 && imgSlide) {
            --count;
            offerSlide.src = imgSlide[count-1].src;
            setCount(count, current);
        }
    });
    
    if (total && imgSlide) {
        setCount(imgSlide.length, total);
    }
    

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
        openModal(modal,btnSendmodel);
        
    });
    modalCloseBtn.forEach((el) => {
            el.addEventListener('click', () => {
                    closeModal(answer);
                    closeModal(modal);
                    closeModal(addCard);
            });
    });

    closeM(modal);
    closeM(answer);

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

    btnDark.addEventListener('click', () => {
        addUserPhone(btnDark);
        openModal(answer,btnDark);
        
        setTimeout(() => {
            closeModal(answer);
        },10000);

   });
   
   // Timer

   setClock('.timer', myDate);
   
};

router();





import {addUserPhone} from "../utils/postDataLocal";

const addCard = document.querySelector('[data-card]');
const modal = document.querySelector('[data-user]');
const answer = document.querySelector('.answer');
const modalCloseBtn = document.querySelectorAll('[data-close]');
const addCardBtn = document.querySelector('[href="#"]');
const order = document.querySelector('.order');
const firstName = document.querySelector('input[name="name"]');
const phone = document.querySelector('input[name="phone"]');
const modalTrigger = document.querySelector('button[data-modal]');

const closeModal = (wind) => {
    wind.classList.add('hide');
    wind.classList.remove('show');
    document.body.style.overflow = '';
};

const openModal = (wind,addPhone) => {
    wind.classList.add('show');
    wind.classList.remove('hide');
    document.body.style.overflow = 'hidden';
    addPhone.addEventListener('click', () => {
        addUserPhone(addPhone);
   });
};

const closeM = (wind) => {
    wind.addEventListener('click', (e) => {
        if (e.target === wind) {
           closeModal(wind);
         }
  });
  
};

const modelInCard = () => {
    const modalTrigger = document.querySelector('button[data-modal]');
    const modal = document.querySelector('[data-user]');
    const modalCloseBtn = document.querySelectorAll('[data-close]');
    const btnAddUserPhone = document.querySelector('#btnThree');

    modalTrigger.addEventListener('click', () => {
        openModal(modal,btnAddUserPhone);
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
};

export {closeModal,openModal,addCard,modelInCard,closeM,modal,answer,modalCloseBtn,addCardBtn,order,firstName,phone,modalTrigger};
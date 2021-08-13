import {addUserPhone} from "../utils/postDataLocal";

const modalTrigger = document.querySelector('button[data-modal]');
const modal = document.querySelector('[data-user]');
const modalCloseBtn = document.querySelectorAll('[data-close]');
const addCard = document.querySelector('[data-card]');
const addCardBtn = document.querySelector('[href="#"]');
const order = document.querySelector('.order');
const firstName = document.querySelector('input[name="name"]');
const phone = document.querySelector('input[name="phone"]');

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
        console.log('ВТОРАЯ СТРАНИЦА')
        addUserPhone(addPhone);
   });
};

const modelInCard = () => {
    const modalTrigger = document.querySelector('button[data-modal]');
    const modal = document.querySelector('[data-user]');
    const modalCloseBtn = document.querySelectorAll('[data-close]');
    const btnAddUserPhone = document.querySelector('#btnThree')

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

export {closeModal,openModal,modalTrigger,modal,modalCloseBtn,addCard,addCardBtn,order,firstName,phone,modelInCard};
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

const openModal = (wind) => {
    wind.classList.add('show');
    wind.classList.remove('hide');
    document.body.style.overflow = 'hidden';
};

export {closeModal,openModal,modalTrigger,modal,modalCloseBtn,addCard,addCardBtn,order,firstName,phone};
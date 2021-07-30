// Model feedback

const modalTrigger = document.querySelector('button[data-modal]'),
        modal = document.querySelector('[data-user]'),
        modalCloseBtn = document.querySelectorAll('[data-close]'),
        addCard = document.querySelector('[data-card]'),
        addCardBtn = document.querySelector('[href="#"]')


const closeModal = (wind) => {
        wind.classList.add('hide');
        wind.classList.remove('show');
        document.body.style.overflow = '';
}

const openModal = (wind) => {
        wind.classList.add('show');
        wind.classList.remove('hide');
        document.body.style.overflow = 'hidden';
};

modalTrigger.addEventListener('click', () => {
        openModal(modal);
});
modalCloseBtn.forEach((el) => {
        el.addEventListener('click', () => {
                closeModal(modal);
                closeModal(addCard);
        })
});

modal.addEventListener('click', (e) => {
        if (e.target === modal) {
                closeModal(modal);
        }
});

document.addEventListener('keydown', (e) => {
        if (e.code === "Escape" && modal.classList.contains('show') || addCard.classList.contains('show')) {
                closeModal(modal);
                closeModal(addCard);
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

// feedback

const order = document.querySelector('.order');
const firstName = document.querySelector('input[name="name"]');
const phone = document.querySelector('input[name="phone"]');

order.addEventListener('click', (event) => {
        event.preventDefault();
        if (event.target.className === 'btn btn_dark btn_min') {

                // console.log(firstName.value)
                // console.log(phone.value)
                firstName.value = '';
                phone.value = '';
                console.log(firstName.value, phone.value);
        }
});
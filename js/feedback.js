// Model feedback

const modalTrigger = document.querySelector('button[data-modal]'),
        modal = document.querySelector('.modal'),
        modalCloseBtn = document.querySelector('[data-close]');


const closeModal = () => {
        modal.classList.add('hide');
        modal.classList.remove('show');
        document.body.style.overflow = '';
}

const openModal = () => {
        modal.classList.add('show');
        modal.classList.remove('hide');
        document.body.style.overflow = 'hidden';
};

modalTrigger.addEventListener('click', openModal);
modalCloseBtn.addEventListener('click', closeModal);

modal.addEventListener('click', (e) => {
        if (e.target === modal) {
                closeModal();
        }
});

document.addEventListener('keydown', (e) => {
        if (e.code === "Escape" && modal.classList.contains('show')) {
                closeModal();
        }
});

// feedback

const order = document.querySelector('.order');
const firstName = document.querySelector('input[name="name"]');
const phone = document.querySelector('input[name="phone"]');

order.addEventListener('click', (event) => {
        event.preventDefault();
        if (event.target.className === 'btn btn_dark btn_min') {
                console.log(firstName.value ,phone.value);
                // console.log(firstName.value)
                // console.log(phone.value)
                firstName.value = '';
                phone.value = '';
                
        }
});
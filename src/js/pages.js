
import {getCrds,nav} from "../utils/getDataLocal";
import {closeModal,openModal,addCard,modelInCard,modal,answer,modalCloseBtn,addCardBtn,order,firstName,phone,modalTrigger} from "../components/feedBack";
import {addComments,btnSendmodel2} from "../utils/postDataLocal";
import {getlocalCard,loadComments,aMenu} from "../utils/openCard";
    
    
const rout = () => {

    // Loading cards from the server
    if (aMenu) {
        getCrds();
    }
    

    // Sort cards

    nav.addEventListener('click', (event) => {
        const a = event.target;
        const cards = document.querySelectorAll('.card');

        if (a.tagName === 'A' && a.dataset.category) {
            cards.forEach(card => {
                if (a.dataset.category != card.dataset.category) {
                    card.classList.remove('show');
                    card.classList.add('hide');
                } else {
                    card.classList.remove('hide');
                    card.classList.add('show');
                }
                if (a.dataset.category == 'all') {
                    card.classList.remove('hide');
                    card.classList.add('show');
                }
            });
        }
        if (a.tagName === 'A' && a.dataset.price == 20) {
            cards.forEach(card => {
                if (Number(card.dataset.price) >= Number(a.dataset.price)) {
                    card.classList.remove('show');
                    card.classList.add('hide');
                } else {
                    card.classList.remove('hide');
                    card.classList.add('show');
                }
            });
        }
        if (a.tagName === 'A' && a.dataset.price == 21) {
            cards.forEach(card => {
                if (Number(card.dataset.price) <= Number(a.dataset.price)) {
                    card.classList.remove('show');
                    card.classList.add('hide');
                } else {
                    card.classList.remove('hide');
                    card.classList.add('show');
                }
            });
        }

    });

    // Model

    modalTrigger.addEventListener('click', () => {
        openModal(modal, btnSendmodel2);
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

    // Open card
  
    if (aMenu) {
        aMenu.addEventListener('click', (event) => {
        const card = event.target;
        if (card.tagName === 'IMG') {
            getlocalCard(card.parentElement.id);
            setTimeout(loadComments, 50);
            setTimeout(addComments, 50);
            setTimeout(modelInCard, 50);
        }
    });
    }
    
};

rout();
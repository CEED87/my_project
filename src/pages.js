import {getCrds,nav} from "./utils/getDataLocal";
import {closeModal,openModal,modalTrigger,modal,modalCloseBtn,addCard,modelInCard} from "./components/feedBack";
import {addComments,btnSendmodel2} from "./utils/postDataLocal";
import {getlocalCard,loadComments,aMenu} from "./utils/openCard";

const rout = () => {

    // Loading cards from the server

    getCrds();

    // Sort cards

    nav.addEventListener('click', (event) => {
        const a = event.target;
        const cards = document.querySelectorAll('.card');
        if (a.tagName === 'A') {
            cards.forEach(card => {
             if (a.dataset.category != card.dataset.category) {
                    card.classList.remove('show');
                    card.classList.add('hide');
                }else {
                    card.classList.remove('hide');
                    card.classList.add('show');
                }
                if (a.dataset.category == 'all') {
                    console.log(a.dataset.category);
                    card.classList.remove('hide');
                    card.classList.add('show');
                }     
            });  
        }
    });

    // Model

    modalTrigger.addEventListener('click', () => {
        console.log('ПЕРВАЯ СТРОНИЦА - ОТКРЫТИЕ')
        openModal(modal,btnSendmodel2);
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
      
    aMenu.addEventListener('click', (event) => {
        const card = event.target;
        if (card.tagName === 'IMG') {
            getlocalCard(card.parentElement.id);
            setTimeout(loadComments,50); 
            setTimeout(addComments,50);
            setTimeout(modelInCard,50);
        }
    });

};

rout();
import {getCrds,allMenu,nav} from "./utils/getDataLocal";
import {closeModal,openModal,modalTrigger,modal,modalCloseBtn,addCard,addCardBtn,order,firstName,phone} from "./components/feedBack";
import {addNewCard, dataServer,addUserPhone,btnSendmodel,btnDark,btnTwo} from "./utils/postDataLocal";
import {getlocalCard,loadComments,aMenu,addComments} from "./utils/openCard";
// import {btnAddComment} from "./utils/addComments";

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

    // Link card

    allMenu.addEventListener('click',(event) => {
        const card = event.target;

        if (card.tagName === 'IMG' || card.matches('div.card')) {

            // location.href='templateCardComment.html';
        }
    });

    // Model

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

    

//     // Add userPhon

//     btnTwo.addEventListener('click', () => {
//       console.log(btnTwo);
//         addUserPhone(btnTwo);
//    });

      // Open card

    aMenu.addEventListener('click', (event) => {
        const card = event.target;
        if (card.tagName === 'IMG') {
            getlocalCard(card.parentElement.id);
            setTimeout(loadComments,10); 
            setTimeout(addComments,10);
        }
    });

    // Add comment

    // console.log(btnAddComment)
};

rout();
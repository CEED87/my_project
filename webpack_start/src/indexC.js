import {closeModal,openModal,modalTrigger,modal,modalCloseBtn,addCard,addCardBtn,order,firstName,phone} from "./components/feedBack";
import {addNewCard, dataServer,addUserPhone,btnSendmodel,btnDark,btnTwo} from "./utils/postDataLocal";

const routCard = () => {

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

    // Add userPhone
   
//     btnSendmodel.addEventListener('click', () => {
//         addUserPhone(btnSendmodel);
//    });

    

};

routCard();
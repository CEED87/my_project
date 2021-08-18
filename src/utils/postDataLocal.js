import regeneratorRuntime from "regenerator-runtime";

const dataServer = document.querySelector('[data-add_server]');
const btnSendmodel = document.querySelector('button[id="btn__send__model"]');
const btnSendmodel2 = document.querySelector('#btnTwo');
const btnDark = document.querySelector('.btn_dark');
const btnTwo = document.querySelector('#btnTwo');

const addNewCard = async () => {
    const info = document.querySelector('[name="info"]');
    const nameMenu = info.previousElementSibling;
    const price = document.querySelector('[name="price"]');
    const foto = document.querySelector('[name="foto"]');
    const select = document.querySelector('select');
    
  await  fetch('http://localhost:3000/cards', {
        method: "POST",
        body: JSON.stringify({
            "category": select.value,
            "img": `images/new_cards/${foto.value.slice(12)}`  ,
            "menu": nameMenu.value,
            "text": info.value,
            "price": price.value
        }),
        headers: {
          "Content-type": "application/json; charset=utf-8"
        }
      }).then(res => {
        return res.json();
      });
    };


const addUserPhone = async (prElement) => {
  const parEl = prElement.parentElement;
  const userName = parEl.querySelector('[data-userN]');
  const userPhone = parEl.querySelector('[data-usePh]');
      
 await fetch('http://localhost:3000/user_phone', {
      method: "POST",
      body: JSON.stringify({
          "userName": userName.value,
          "userPhone": userPhone.value,
      }),
      headers: {
        "Content-type": "application/json; charset=utf-8"
      }
    }).then(res => {
      return res.json();
    });
};

const addComments =  () => {
  const btnAddComment = document.querySelector('.button');
  const userName = document.querySelector('#user__name');
  const textComent = document.querySelector('#text__coment');
  
  btnAddComment.addEventListener('click', () => {
    fetch('http://localhost:3000/comments', {
      method: "POST",
      body: JSON.stringify({
          "ucerName": userName.value,
          "comment": textComent.value,
          "cardId": btnAddComment.id
      }),
      
      headers: {
        "Content-type": "application/json; charset=utf-8"
      }
    }).then(res => {
      return res.json();
    }).then(data => {
       console.log(data);
    });
    userName.value = '';
    textComent.value = ''; 
  });
};




export {addNewCard, dataServer,addUserPhone,btnSendmodel,btnDark,btnTwo,addComments,btnSendmodel2};


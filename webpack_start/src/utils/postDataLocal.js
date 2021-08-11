
const dataServer = document.querySelector('[data-add_server]');
const btnSendmodel = document.querySelector('button[id="btn__send__model"]');
const btnDark = document.querySelector('.btn_dark');
const btnTwo = document.querySelector('#btnTwo');



const addNewCard = () => {
    const info = document.querySelector('[name="info"]');
    const nameMenu = info.previousElementSibling;
    const price = document.querySelector('[name="price"]');
    const foto = document.querySelector('[name="foto"]');
    const select = document.querySelector('select');
    
    fetch('http://localhost:3000/cards', {
        method: "POST",
        body: JSON.stringify({
            "category": select.value,
            "img": `images/new_cards/${foto.value.slice(12)}`  ,
            "menu": nameMenu.value,
            "text": info.value,
            "price": price.value,
            "comments": []
        }),
        headers: {
          "Content-type": "application/json; charset=utf-8"
        }
      }).then(res => {
        return res.json();
      });
      // .then(data => {
      //   console.log(data);
      // });
    };


const addUserPhone = (prElement) => {
  const parEl = prElement.parentElement;

  const userName = parEl.querySelector('[data-userN]');
  const userPhone = parEl.querySelector('[data-usePh]');
      
  fetch('http://localhost:3000/user_phone', {
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






export {addNewCard, dataServer,addUserPhone,btnSendmodel,btnDark,btnTwo};


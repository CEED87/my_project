const container = document.querySelector('div[data-cards]');
const info = document.querySelector('[name="info"]');
const nameMenu = info.previousElementSibling;
const price = document.querySelector('[name="price"]');
const foto = document.querySelector('[name="foto"]');

   const getCards = () => {
    fetch('http://localhost:3000/cards').then(res => {
        return res.json();
    }).then(data => {
        let count = 0;
        data.forEach(card => {
            count++;
            if (count <= 3) {
                container.innerHTML += `
                                    <div class="menu__item card">
                                    <img src="${card.img}" alt="fitnes">
                                    <h3 class="menu__item-subtitle">${card.menu}</h3>
                                    <div class="menu__item-descr">${card.text}</div>
                                    <div class="menu__item-divider"></div>
                                    <div class="menu__item-price">
                                        <div class="menu__item-cost">Цена:</div>
                                        <div class="menu__item-total"><span>${card.price}</span> руб/день</div>
                                    </div>
                                </div>
                                    `;
            }
            
        });
    });
}; 
const addNewCard = () => {
    fetch('http://localhost:3000/cards', {
        method: "POST",
        body: JSON.stringify({
            "img": foto.value,
            "menu": nameMenu.value,
            "text": info.value,
            "price": price.value
        }),
        headers: {
          "Content-type": "application/json; charset=utf-8"
        }
      }).then(res => {
        return res.json();
      }).then(data => {
        console.log(data);
      });
    };
const dataServer = document.querySelector('[data-add_server]');

dataServer.addEventListener('click', addNewCard);

// console.log(dataServer)

getCards();
// addNewCard();





//   
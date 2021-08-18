import regeneratorRuntime from "regenerator-runtime";

const CARDS_LOCAL = 'http://localhost:3000/cards';
const allMenu = document.querySelector('.all__menu');
const nav = document.querySelector('nav');

const getResource = async () => {
    const res = await fetch(CARDS_LOCAL);
    return res.json();
  };

  const getCardsFirstPage = async () => {
    const data = await getResource();
    const container = document.querySelector('div[data-cards]');
    let count = 0;

        data.forEach(card => {
            count++;
            if (count <= 3) {
                container.innerHTML += `
                                    <div class="menu__item card" >
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
    };

    const getCrds = async () => {
        const data = await getResource();
        data.forEach(card => {
            allMenu.innerHTML += `
                                    <div class="menu__item card" id="${card.id}" data-category=${card.category} data-price=${card.price}>
                                    <img src="${card.img}" alt="fitnes" class="open">
                                    <h3 class="menu__item-subtitle">${card.menu}</h3>
                                    <div class="menu__item-descr">${card.text}</div>
                                    <div class="menu__item-divider"></div>
                                    <div class="menu__item-price">
                                        <div class="menu__item-cost">Цена:</div>
                                        <div class="menu__item-total"><span>${card.price}</span> руб/день</div>
                                    </div>
                                    
                                        <span class="tooltiptext">Кликните чтобы раскрыть</span>
                                   
                                </div>
                                `; 
        });
    };


    
 


export {getCardsFirstPage, getCrds,allMenu,nav};
    

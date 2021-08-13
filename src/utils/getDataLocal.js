
// import regeneratorRuntime from “regenerator-runtime”;
// const TASKS_LOCAL = 'http://localhost:3000/cards';
// // const TASKS_LOCAL = 'http://work.social-server.online/tasks';

// // =================
// const getResource = async (url) => {
//   const res = await fetch(url);

//   return res.json();
// };

// const getAllCards = async () => {
//   const res = await getResource(TASKS_LOCAL);
// //   return res;
//   console.log(res.json())
// };


// export { getAllCards };
// // =====================


// const getCards = () => {
//     fetch(TASKS_LOCAL).then(res => {
//         return res.json();

//     }).then(data => {
//          console.log(data)
//     })

// }

const allMenu = document.querySelector('.all__menu');
const nav = document.querySelector('nav');

const getCardsFirstPage =  () => {
    const container = document.querySelector('div[data-cards]');
    fetch('http://localhost:3000/cards').then(res => {
        return res.json();
    }).then(data => {
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
    });
};

const getCrds = () => {
    fetch('http://localhost:3000/cards').then(res => {
       return res.json();
    }).then(data => {
        
        data.forEach(card => {
            allMenu.innerHTML += `
                                    <div class="menu__item card" id="${card.id}" data-category=${card.category} >
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
    });
};


export {getCardsFirstPage, getCrds,allMenu,nav};
    

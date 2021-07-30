const allMenu = document.querySelector('.all__menu')
console.log(allMenu)
const getCrds = () => {
    fetch('http://localhost:3000/cards').then(res => {
       return res.json();
    }).then(data => {
        data.forEach(card => {
            allMenu.innerHTML += `
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
                                ` 
        })
    });
};

getCrds();
// 
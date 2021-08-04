const allMenu = document.querySelector('.all__menu');
const nav = document.querySelector('nav');

const getCrds = () => {
    fetch('http://localhost:3000/cards').then(res => {
       return res.json();
    }).then(data => {
        data.forEach(card => {
            allMenu.innerHTML += `
                                    <div class="menu__item card" data-category=${card.category}>
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
        });
    });
};

nav.addEventListener('click', (event) => {
    const a = event.target;
    const cards = allMenu.querySelectorAll('.card');
    
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

getCrds();
 
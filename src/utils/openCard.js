import regeneratorRuntime from "regenerator-runtime";

const aMenu = document.querySelector('.all__menu');
let boxComment = '';
let boxFoto = '';

const getlocalCard =  (id) => {
    fetch('http://localhost:3000/cards').then(res => {
       return res.json();
    }).then(data => {
        data.forEach(card => {
            if (card.id == id) {
                const cardCom = document.querySelector('.cards');
                boxFoto = card.img;
                cardCom.innerHTML = `<header class="header">
                <div class="header__left-block">
                    <div class="header__logo">
                        <img src="./images/icons/logo.svg" alt="Логотип">
                    </div>
                    <nav class="header__links catalog">
                        <a href="index.html" class="header__link" data-category="all">Вернуться на главную </a>
                        <a href="templateCards.html" class="header__link" data-category="1">Вернуться на предыдущую страницу</a>
                    </nav>
                </div>
                <div class="header__right-block">
                    <button id="mod" data-modal class="btn btn_white">Связаться с нами</button>
                </div>
            </header>
            <div class="cardCom">
            <div class="box__images">
                <div class="images"></div>
            </div>
                <h3 class="menu__item-subtitle" id="title__card">${card.menu}</h3>
                <div class="menu__item-descr" id="info__card">${card.text}
                </div>
            
                <div class="divider"></div>
                
                <div class="comment">
                    <h2>Комментарий</h2>
                    <div class="comment__forma">
                        <label for="uName" class="user__form">Введите ваше имя</label>
                        <input type="text" name="uName" class="user__form" id="user__name">
                        <textarea type="text" name="" class="user__form" id="text__coment"></textarea>
                        <div class="button" id="${card.id}">Добавить комментарий</div>
                    </div>
                </div>
            </div>
            
            <div class="line">Комментарии</div>
            <div class="user__comments">
                 <span>Пока нет ни одного комментария</span>
            </div>
            <div class="modal" data-user>
                <div class="modal__dialog">
                    <div class="modal__content" >
                        <form action="#" name="feedback">
                            <div data-close class="modal__close">&times;</div>
                            <div class="modal__title">Мы свяжемся с вами как можно быстрее!</div>
                            <input required placeholder="Ваше имя" name="name" type="text" class="modal__input" data-userN>
                            <input required placeholder="Ваш номер телефона" name="phone" type="phone" class="modal__input" data-usePh>
                            <button class="btn btn_dark btn_min" id="btnThree">Перезвонить мне</button>
                        </form>
                    </div>
                </div>
            </div>
            
            <footer class="footer">
                <div class="container">
                    <div class="social">
                        <div class="subtitle">Мы в социальных сетях:</div>
                        <a href="https://www.facebook.com"><img class="link__icons" src="./images/icons/i/facebook.png" alt=""srcset=""></a>     
                        <a href="https://tlgrm.ru"><img class="link__icons" src="./images/icons/i/telrgram.png" alt="" srcset=""></a>
                        <a href="https://twitter.com"><img class="link__icons" src="./images/icons/i/twitter.png" alt="" srcset=""></a>
                        <a href="https://github.com"><img class="link__icons" src="./images/icons/i/github.png" alt="" srcset=""></a>
                    </div>
                    <div class="pepper">
                        <img src="./images/icons/veg.svg" alt="pepper">
                    </div>
                    <div class="call">
                        <div class="subtitle">Или позвоните нам</div>
                        <a href="#" class="link">+375298341034</a>
                        <a href="#" class="link">+375336941356</a>
                    </div>
                </div>
            </footer>`;

            fetch('http://localhost:3000/comments').then(res => {
                    return res.json();
                }).then(data => {
                    boxComment = document.createElement('div');
                    boxComment.classList.add('ribbon');
                    data.forEach(comment => {
                        if (comment.cardId == card.id) {
                            boxComment.innerHTML += `<div class="user__comment">
                                                         <h3 class="user">${comment.ucerName}</h3>
                                                         <div>${comment.comment}</div>
                                                     </div>`;                       
                            return  boxComment;
                        } 
                    });
                });
                return boxFoto;
            }
        });
    });
};

const loadComments =  () => {
    const image = document.querySelector('.images')
    image.style.backgroundImage = `url(${boxFoto})`;

   if (boxComment.firstChild != null) {
        const userComments = document.querySelector('.user__comments');
        const span = userComments.querySelector('span');
        userComments.replaceChild(boxComment,span);
   }
};

export {getlocalCard,loadComments,aMenu};

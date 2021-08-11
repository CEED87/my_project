// import {btnAddComment} from "./addComments";

const aMenu = document.querySelector('.all__menu');
let boxComment;

const getlocalCard = (id) => {
    fetch('http://localhost:3000/cards').then(res => {
       return res.json();
    }).then(data => {
        data.forEach(card => {
            if (card.id == id) {
                const cardCom = document.querySelector('.cards');
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
                    <button data-modal class="btn btn_white">Связаться с нами</button>
                </div>
            </header>
            <div class="cardCom">
                <div class="images">
                    <img src="${card.img}" alt="fitnes">
                </div>
                <h3 class="menu__item-subtitle">${card.menu}</h3>
                <div class="menu__item-descr">${card.text}
                </div>
            
                <div class="divider"></div>
                
                <div class="comment">
                    <h2>Комментарий</h2>
                    <div class="comment__forma">
                        <label for="uName" class="user__form">Введите ваше имя</label>
                        <input type="text" name="uName" class="user__form" id="user__name">
                        <input type="text" name="" class="user__form" id="text__coment">
                        <div class="button">Добавить комментарий</div>
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
                            <input required placeholder="Ваше имя" name="name" type="text" class="modal__input">
                            <input required placeholder="Ваш номер телефона" name="phone" type="phone" class="modal__input">
                            <button class="btn btn_dark btn_min" id="btn__send__model">Перезвонить мне</button>
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
               
            if (card.comments.length != 0) {
                boxComment = document.createElement('div');
                boxComment.classList.add('ribbon');
                card.comments.forEach(com => {
                    boxComment.innerHTML += `<div class="user__comment">
                                                <h3 class="user">${com.ucerNane}</h3>
                                                <div>${com.comment}</div>
                                            </div>`;
                });  
                return  boxComment;
            }        
            }
        });
    });
};

const loadComments = () => {
   const userComments = document.querySelector('.user__comments');
   const span = userComments.querySelector('span');
   if (boxComment != '') {
    userComments.replaceChild(boxComment,span);
   }
   
};

const addComments = () => {
    const btnAddComment = document.querySelector('.button');
    btnAddComment.addEventListener('click', () => {
        console.log(634785637465736);
    });
    console.log(btnAddComment);
};

export {getlocalCard,loadComments,aMenu,addComments};

// import "../style/main.scss";

// const Home = () => {
    
//     const page = `<header class="header">
//     <div class="header__left-block">
//         <div class="header__logo">
//             <img src="./images/icons/logo.svg" alt="Логотип">
//         </div>
//         <nav class="header__links">
//             <a href="index2.html" class="header__link">Каталог меню</a>
//             <a href="#" class="header__link">Добавить своё меню</a>
//         </nav>
//     </div>
//     <div class="header__right-block">
//         <button data-modal class="btn btn_white">Связаться с нами</button>
//     </div>
// </header>
// <div class="preview">
//     <div class="bgc_blue"></div>
//     <div class="container">
//         <div class="tabcontainer">
//             <div class="tabcontent">
//                 <img src="./images/tabs/fitnes.jpg" alt="elite">
//                 <div class="tabcontent__descr">
//                     Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Для людей, которые интересуются спортом; активных и здоровых. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!
//                 </div>
//             </div>
//             <div class="imges__slid">
//                 <div data-img="1">
//                     <img src="./images/tabs/fitnes.jpg" alt="elite">
//                     <span>Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Для людей, которые интересуются спортом; активных и здоровых. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!</span>
//                 </div>
//                 <div data-img="2">
//                     <img src="./images/tabs/premium.jpg" alt="elite">
//                     <span> Меню “Премиум” - мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!</span>
//                 </div>
//                 <div data-img="3">
//                     <img src="./images/tabs/post.jpg" alt="elite">
//                     <span>Наше специальное “Постное меню” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения. Полная гармония с собой и природой в каждом элементе! Все будет Ом!</span>
//                 </div>
//                 <div data-img="4">
//                     <img src="./images/tabs/prot.jpg" alt="elite">
//                     <span>Меню "Сбалансированное" - это соответствие вашего рациона всем научным рекомендациям. Мы тщательно просчитываем вашу потребность в к/б/ж/у и создаем лучшие блюда для вас.</span>
//                 </div>
//             </div>
//             <div class="tabheader">
//                 <h3>Выберите стиль питания</h3>
//                 <div class="tabheader__items">
//                     <div class="tabheader__item active__item" data-tabe="1">Фитнес</div>
//                     <div class="tabheader__item" data-tabe="2">Премиум</div>
//                     <div class="tabheader__item" data-tabe="3">Постное</div>
//                     <div class="tabheader__item" data-tabe="4">Протеиновое</div>
//                 </div>
//             </div>
//         </div>
//         <div class="preview__life">Живи полной жизнью!</div>
//     </div>
// </div>

// <div class="divider"></div>

// <div class="offer">
//     <div class="bgc_y"></div>
//     <div class="container">
//         <div class="offer__text">
//             <h2 class="title">Что мы можем вам предложить?</h2>
//             <div class="offer__descr">
//                 Наша основная идея - это правильное питание. Оно может быть простым и вкусным. Мы не просто доставка, мы сервис! Мы взяли на себя все расчеты БЖУ, калорийности, объемов порций и прочие важные, но скучные аспекты. Вам остается только полезная, сытная и правильная еда, которую мы привозим прямо под дверь.
//             </div>
//         </div>
//     </div>
//     <div class="container">
//         <div class="offer__advantages">
//             <h2>Быстро и полезно</h2>
//             <div class="offer__advantages-text">
//                 Готовка дома занимает много сил, времени и нервов. Мы привозим еду сразу на целый день, и ты можешь действовать так, как тебе удобно, не подстраиваясь ни под кого и будучи уверенным в качестве продукта!
//             </div>
//             <h2>Правильный рацион</h2>
//             <div class="offer__advantages-text">
//                 Мы разработали специальное меню, где учтены все нюансы правильного питания, от баланса БЖУ до их приготовления и дробления рациона.
//             </div>
//         </div>
//         <div class="offer__slider">
//             <div class="offer__slider-counter">
//                 <div class="offer__slider-prev">
//                     <img src="./images/icons/left.svg" alt="prev">
//                 </div>
//                 <span id="current">01</span>
//                 /
//                 <span id="total">04</span>
//                 <div class="offer__slider-next">
//                     <img src="./images/icons/right.svg" alt="next">
//                 </div>
//             </div>
//             <div class="offer__slider-wrapper">
//                 <div class="offer__slide">
//                     <img src="" alt="img">
//                 </div>
//                 <div class="imges__slid mini">
//                     <img src="./images/slider/pepper.jpg">
//                     <img src="./images/slider/food-12.jpg">
//                     <img src="./images/slider/olive-oil.jpg">
//                     <img src="./images/slider/paprika.jpg">
//                     <img src="./images/slider/pepper.jpg">
//                     <img src="./images/slider/food-12.jpg">
//                     <img src="./images/slider/olive-oil.jpg">
//                     <img src="./images/slider/paprika.jpg">
                    
//                     <!-- <img src="images/slider/paprika.jpg">
//                     <img src="images/slider/pepper.jpg">
//                     <img src="images/slider/food-12.jpg">
//                     <img src="images/slider/olive-oil.jpg">
//                     <img src="images/slider/paprika.jpg">
//                     <img src="images/slider/pepper.jpg">
//                     <img src="images/slider/food-12.jpg">
//                     <img src="images/slider/olive-oil.jpg">
//                     <img src="images/slider/paprika.jpg">
//                     <img src="images/slider/pepper.jpg">
//                     <img src="images/slider/food-12.jpg">
//                     <img src="images/slider/olive-oil.jpg">
//                     <img src="images/slider/paprika.jpg">
                    
//                     <img src="images/slider/paprika.jpg">
//                     <img src="images/slider/pepper.jpg">
//                     <img src="images/slider/food-12.jpg">
//                     <img src="images/slider/olive-oil.jpg">
//                     <img src="images/slider/paprika.jpg"> -->
//                 </div>
//             </div>  
//         </div>
//     </div>
// </div>

// <div class="divider"></div> 

// <div class="calculating">
//     <div class="container">
//         <h2 class="title">Рассчитаем вашу потребность в калориях?
//         </h2>
//         <div class="calculating__field">
//             <div class="calculating__subtitle">
//                 Ваш пол
//             </div>
//             <div class="calculating__choose" id="gender">
//                 <div class="calculating__choose-item" data-gender="1">Женщина</div>
//                 <div class="calculating__choose-item calculating__choose-item_active" data-gender="2">Мужчина</div>
//             </div>

//             <div class="calculating__subtitle">
//                 Ваша конституция
//             </div>
//             <div class="calculating__choose calculating__choose_medium">
//                 <input type="text" id="height" placeholder="Введите рост" class="calculating__choose-item">
//                 <input type="text" id="weight" placeholder="Введите вес"  class="calculating__choose-item">
//                 <input type="text" id="age" placeholder="Введите возраст" class="calculating__choose-item">
//             </div>

//             <div class="calculating__subtitle">
//                 Выберите вашу физическая активность
//             </div>
//             <div class="calculating__choose calculating__choose_big">
//                 <div id="low" class="calculating__choose-item calculating__choose-item_active" data-active="5">Низкая активность </div>
//                 <div id="small"  class="calculating__choose-item" data-active="7">Невысокая активность</div>
//                 <div id="medium" class="calculating__choose-item" data-active="10">Умеренная активность</div>
//                 <div id="high" class="calculating__choose-item" data-active="20">Высокая активность</div>
//             </div>

//             <div class="calculating__divider"></div>

//             <div class="calculating__total">
//                 <div class="calculating__subtitle">
//                     Ваша суточная норма калорий:
//                 </div>
//                 <div class="calculating__result">
//                     <span>0</span> ккал
//                 </div>
//             </div>
//         </div>
//     </div>
// </div>

// <div class="divider"></div>

// <div class="menu">
//     <h2 class="title">Наше меню на день</h2>

//     <div class="menu__field">
//         <div class="container" data-cards>
//           <!-- <div class="menu__item">
//             <img src="images/tabs/fitnes.jpg" alt="fitnes">
//             <h3 class="menu__item-subtitle">Меню "Фитнес"</h3>
//             <div class="menu__item-descr">Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!</div>
//             <div class="menu__item-divider"></div>
//             <div class="menu__item-price">
//                 <div class="menu__item-cost">Цена:</div>
//                 <div class="menu__item-total"><span>25</span> руб/день</div>
//             </div>
//           </div>
//           <div class="menu__item">
//             <img src="images/tabs/post.jpg" alt="post">
//             <h3 class="menu__item-subtitle">Меню "Постное"</h3>
//             <div class="menu__item-descr">Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков.</div>
//             <div class="menu__item-divider"></div>
//             <div class="menu__item-price">
//                 <div class="menu__item-cost">Цена:</div>
//                 <div class="menu__item-total"><span>20</span> руб/день</div>
//             </div>
//           </div>
//           <div class="menu__item">
//             <img src="./images/tabs/premium.jpg" alt="premium">
//             <h3 class="menu__item-subtitle">Меню “Премиум”</h3>
//             <div class="menu__item-descr">В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!</div>
//             <div class="menu__item-divider"></div>
//             <div class="menu__item-price">
//                 <div class="menu__item-cost">Цена:</div>
//                 <div class="menu__item-total"><span>25</span> руб/день</div>
//             </div>
//           </div> -->
//         </div>
//     </div>
// </div>

// <div class="order">
//     <div class="container">
//         <div class="title">Заказывай пробный день прямо сейчас!</div>
//         <form action="#" class="order__form">
//             <input required placeholder="Ваше имя" name="name" type="text" class="order__input">
//             <input required placeholder="Ваш номер телефона" name="phone" type="phone" class="order__input">
//             <img src="./images/icons/right.svg" alt="right">
//             <button class="btn btn_dark btn_min">Перезвонить мне</button>
//         </form>
//     </div>
// </div>

// <div class="divider"></div>


// <div class="promotion">
//     <div class="bgc_y"></div>
//     <div class="container">
//         <div class="promotion__text">
//             <div class="title">Акция для новых клиентов!</div>
//             <div class="promotion__descr">
//                 Мы ценим каждого клиента и предлагаем вам стать одним из них на очень выгодных условиях. 
//                 Каждому, кто закажет доставку питание на неделю, будет предоставлена скидка в размере <span>20%!</span>
//                 <br><br>
//                 Акция закончится 20 августа в 00:00
//             </div>
//         </div>
//         <div class="promotion__timer">
//             <div class="title">Осталось до конца акции:</div>
//             <div class="timer">
//                 <div class="timer__block">
//                     <span id="days">12</span>
//                     дней
//                 </div>
//                 <div class="timer__block">
//                     <span id="hours">20</span>
//                     часов
//                 </div>
//                 <div class="timer__block">
//                     <span id="minutes">56</span>
//                     минут
//                 </div>
//                 <div class="timer__block">
//                     <span id="seconds">20</span>
//                     секунд
//                 </div>
//             </div>
//         </div>
//     </div>
// </div>

// <footer class="footer">
//     <div class="container">
//         <div class="social">
//             <div class="subtitle">Мы в социальных сетях:</div>
//             <a href="https://www.facebook.com" ><img class="link__icons" src="./images/icons/i/facebook.png" alt="" srcset=""></a>
//             <!-- <a href="#" ><img class="link__icons" src="./images/icons/i/speech-bubble.png" alt="" srcset=""></a> -->
//             <a href="https://tlgrm.ru" ><img class="link__icons" src="./images/icons/i/telrgram.png" alt="" srcset=""></a>
//             <!-- <a href="#" ><img class="link__icons" src="./images/icons/i/linkedin.png" alt="" srcset=""></a> -->
//             <a href="https://twitter.com" ><img class="link__icons" src="./images/icons/i/twitter.png" alt="" srcset=""></a>
//             <a href="https://github.com" ><img class="link__icons" src="./images/icons/i/github.png" alt="" srcset=""></a>
//         </div>
//         <div class="pepper">
//             <img src="./images/icons/veg.svg" alt="pepper">
//         </div>
//         <div class="call">
//             <div class="subtitle">Или позвоните нам</div>
//             <a href="#" class="link">+375298341034</a>
//             <a href="#" class="link">+375336941356</a>
//         </div>
//     </div>
// </footer>

// <div class="modal" data-user>
//     <div class="modal__dialog">
//         <div class="modal__content" >
//             <form action="#">
//                 <div data-close class="modal__close">&times;</div>
//                 <div class="modal__title">Мы свяжемся с вами как можно быстрее!</div>
//                 <input required placeholder="Ваше имя" name="name" type="text" class="modal__input">
//                 <input required placeholder="Ваш номер телефона" name="phone" type="phone" class="modal__input">
//                 <button class="btn btn_dark btn_min">Перезвонить мне</button>
//             </form>
//         </div>
//     </div>
// </div>
// <div class="modal" data-card>
//     <div class="modal__dialog">
//         <div class="modal__content" >
//             <form action="#">
//                 <div data-close class="modal__close">&times;</div>
//                 <div class="modal__title">Добвьте своё меню</div>
//                 <label for="" class="category">Выберите категорию</label>
//                 <select name="" id="" class="modal__input">
//                     <option value="1">Утреннее меню</option>
//                     <option value="2">Обеденное меню</option>
//                     <option value="3">Вечернее меню</option>
//                 </select>
//                 <input required placeholder="Название меню" name="name" type="text" class="modal__input">
//                 <input required placeholder="Описание" name="info" type="text" class="modal__input">
//                 <input required placeholder="Примерная стоимость" name="price" type="text" class="modal__input">
//                 <input required  name="foto" type="file" id="add_foto">
//                 <div class="modal__input" id="foto"><label for="add_foto" class="add_fopto">Добавить фото</label></div>
//                 <button class="btn btn_dark btn_min" type="submit" data-add_server>Добавить карточку</button>
//             </form>
//         </div>
//     </div>
// </div>
// `;
//     return page;
// };

// export default Home;
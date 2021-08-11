import "../style/main.scss";

const Cards = () => {
    
    const page = `
    <header class="header">
        <div class="header__left-block">
            <div class="header__logo">
                <img src="icons/logo.svg" alt="Логотип">
            </div>
            <nav class="header__links catalog">
                <a href="#" class="header__link" data-category="all">Все меню</a>
                <a href="#" class="header__link" data-category="1">Утреннее меню</a>
                <a href="#" class="header__link" data-category="2">Обеденное меню</a>
                <a href="#" class="header__link" data-category="3">Вечернее меню</a>
            </nav>
        </div>
        <div class="header__right-block">
            <button data-modal class="btn btn_white">Связаться с нами</button>
        </div>
    </header>

    <div class="divider"></div>

    <div class="all__menu"></div>
       
    <footer class="footer">
      <div class="container">
          <div class="social">
              <div class="subtitle">Мы в социальных сетях:</div>
              <a href="https://www.facebook.com" ><img class="link__icons" src="icons/i/facebook.png" alt="" srcset=""></a>
              <a href="https://tlgrm.ru" ><img class="link__icons" src="icons/i/telrgram.png" alt="" srcset=""></a>
              <a href="https://twitter.com" ><img class="link__icons" src="icons/i/twitter.png" alt="" srcset=""></a>
              <a href="https://github.com" ><img class="link__icons" src="icons/i/github.png" alt="" srcset=""></a>
          </div>
          <div class="pepper">
              <img src="icons/veg.svg" alt="pepper">
          </div>
          <div class="call">
              <div class="subtitle">Или позвоните нам</div>
              <a href="#" class="link">+375298341034</a>
              <a href="#" class="link">+375336941356</a>
          </div>
      </div>
  </footer>
   
`;
    return page;
};

export default Cards;
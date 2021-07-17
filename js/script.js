const tabheaderItem = document.querySelector('.tabheader__items');
const tabContent = document.querySelector('.tabcontent');


// console.log(tabContent)
tabheaderItem.addEventListener('click', (event) => {
    const tab = event.target;
    const actvTabe = tabheaderItem.querySelector('.active__item');
    const imgTab = document.querySelectorAll('div[data-img]');
     
    if (tab.className === 'tabheader__item') {
        actvTabe.classList.remove('active__item');
        tab.classList.add('active__item');

        imgTab.forEach(el => {
            if (el.dataset.img === tab.dataset.tabe) {
                let atrValue = el.firstElementChild.getAttribute('src');
                let content = el.lastElementChild.textContent;
                tabContent.firstElementChild.setAttribute('src',atrValue);
                tabContent.lastElementChild.textContent = content;
                // console.log();
            }
        });
    } 
});





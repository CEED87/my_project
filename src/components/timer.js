

const myDate = '2021-08-14';

 const getTame = (arg) => {
    const t = Date.parse(myDate) - Date.parse(new Date()),
          days = Math.floor(t / (1000 * 60 * 60 * 24)),
          hours = Math.floor((t / (1000 * 60 * 60) % 24)),
          minutes = Math.floor((t / (1000 * 60) % 60)),
          seconds = Math.floor((t / 1000) % 60); 
 
          return {
             'total': t,
             'days': days,
             'hours': hours,
             'minuts': minutes,
             'seconds':seconds
          }; 
             
 };

 const getZiro = (num) => {
     if (num >= 0 && num < 10) {
         return `0${num}`;
     } else {
         return num;
     }
 };
 
 const setClock = (selektor, idishen) => {
     const timer = document.querySelector(selektor),
           days = timer.querySelector('#days'),
           hours = timer.querySelector('#hours'),
           minutes = timer.querySelector('#minutes'),
           seconds = timer.querySelector('#seconds'),
           timeInterval = setInterval(updateClock, 1000);
 
           updateClock();
 
     function updateClock() {
         const t = getTame(idishen);
 
         days.innerHTML = getZiro(t.days);
         hours.innerHTML = getZiro(t.hours);
         minutes.innerHTML = getZiro(t.minuts);
         seconds.innerHTML = getZiro(t.seconds);
 
         if (t.total === 0) {
             clearInterval(timeInterval);
         }
     }
 };

 export {myDate,setClock};
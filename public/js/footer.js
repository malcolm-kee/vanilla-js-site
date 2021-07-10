/* eslint-disable */

const footerYearEl = document.querySelector('#footer-year');
footerYearEl.innerHTML = helpers.getCurrentYear();


const footerTodayEl = document.querySelector('#footer-today');
footerTodayEl.innerHTML = helpers.getCurrentDate();

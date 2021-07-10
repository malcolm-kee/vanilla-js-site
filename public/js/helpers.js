/* eslint-disable */

const helpers = (function () {
  const today = new Date();

  function padStart(strOrNum, length, filler = '0') {
    return String(strOrNum).padStart(length, filler);
  }

  function getCurrentYear() {
    return today.getFullYear();
  }

  function getCurrentDate() {
    return `${today.getFullYear()}-${padStart(
      today.getMonth() + 1,
      2
    )}-${padStart(today.getDate(), 2)}`;
  }

  function getServerTime(callback) {
    const xmlHttp = new XMLHttpRequest();
    xmlHttp.open('HEAD', window.location.href);
    xmlHttp.setRequestHeader('Content-Type', 'text/html');
    xmlHttp.addEventListener('load', () => {
      callback(xmlHttp.getResponseHeader('Date'));
    });
    xmlHttp.send('');
  }

  function signupEmail({ email, onSuccess, onError }) {
    fetch('/api/signup', {
      method: 'post',
      body: JSON.stringify({ email })
    })
      .then(res => res.json())
      .then(onSuccess)
      .catch(onError);
  }

  return {
    getCurrentYear,
    getCurrentDate,
    getServerTime,
    signupEmail
  };
})();

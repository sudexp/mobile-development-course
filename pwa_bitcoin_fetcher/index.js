const fetchBitcoin = () => {
  !navigator.onLine &&
    // TODO: visualize this better/nicer
    alert('Device is offline!');

  const url = 'https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC&tsyms=EUR';
  const request = new XMLHttpRequest();
  request.onreadystatechange = () => {
    if (request.readyState === XMLHttpRequest.DONE) {
      if (request.status === 200) {
        const response = JSON.parse(request.response);
        const now = new Date().toLocaleDateString();
        document.getElementById('bitcoinText').innerHTML = now + ' : ' + response.BTC.EUR + ' €';
        localStorage.setItem('btc', now + ' : ' + response.BTC.EUR + ' €');
      }
    }
  };
  request.open('GET', url);
  request.send();
};

const lastBTC = () => (document.getElementById('bitcoinText').innerHTML = localStorage.getItem('btc'));

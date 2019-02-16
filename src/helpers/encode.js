import Config from './config';

const EncodeResult = (data, callback) => {
  const xhr = new XMLHttpRequest(),
        URL = `${Config.BaseURL}/${Config.ApiURL}/${data}`;

  xhr.onreadystatechange =  e => {
    if(xhr.readyState === 4) {
      let response = JSON.parse(e.target.responseText);
      callback(response);
    }
  };

  xhr.open('GET', URL, true);
  xhr.send();
};

export default EncodeResult;

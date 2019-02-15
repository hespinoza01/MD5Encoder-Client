import Config from './config';

const EncodeResult = async (data) => {
  let value = await fetch(`${Config.BaseURL}/${Config.ApiURL}/${data}`);

  return (value.status === 200) ? value.json() : null;
};

export default EncodeResult;

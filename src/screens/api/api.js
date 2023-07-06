import axios from 'axios';
export const url = 'https://vitesol.net/hazii/closecall';

export const LoginUser = async e => {
  const {data} = await axios.post(url + '/api.php?cmd=login', e);
  return data;
};

export const SignUpUser = async e => {
  const {data} = await axios.post(url + '/api.php?cmd=signup', e);
  return data;
};
export const GetNumbers = async e => {
  const {data} = await axios.post(url + '/api.php?cmd=get_numbers', e);
  return data;
};
export const SearchNumbers = async e => {
  const {data} = await axios.post(url + '/api.php?cmd=get_numbers', e);
  return data;
};
export const SearchNumbersByArea = async e => {
  const {data} = await axios.post(url + '/api.php?cmd=get_numbers', e);
  return data;
};
export const SaveSidAndToken = async e => {
  const {data} = await axios.post(url + '/api.php?cmd=add_twilio_sid_token', e);
  return data;
};
export const GetAllAdmins = async e => {
  const {data} = await axios.get(url + '/api.php?cmd=get_all_admins');
  return data;
};




export const BuyNumber = async e => {
  const {data} = await axios.post(url + '/api.php?cmd=buy_number', e);
  return data;
};

//   export const getPosts = async e => {
//     const {data} = await axios.get(
//       'https://jsonplaceholder.typicode.com/todos/1',
//     );
//     return data;
//   };

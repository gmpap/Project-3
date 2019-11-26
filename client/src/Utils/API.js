import axios from 'axios';

if (localStorage.getItem('logintoken')) {
  axios.defaults.headers.common['x-auth-token'] = localStorage.getItem('logintoken');
}

export default {
  login: userCredentials => {
    return axios.post('/api/auth', userCredentials);
  },
  storelogintoken: token => {
    localStorage.setItem('logintoken', token);
    axios.defaults.headers.common['x-auth-token'] = token;
  },
  deletelogintoken: () => {
    localStorage.clear();
    delete axios.defaults.headers.common['x-auth-token'];
  },
  getuserinfo: () => {
    return axios.get('/api/profile/me');
  }
};

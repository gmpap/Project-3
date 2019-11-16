import axios from 'axios';

export default {
  //User Logging in.
  authenticate: function(userCreds) {
    return axios.post('/api/auth', userCreds);
  }
};

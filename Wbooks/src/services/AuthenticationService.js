import api from '../config/api';

const service = {
  signIn: (email, password) =>
    api.post('/auth/sign_in', {
      email,
      password
    })
};

export default service;

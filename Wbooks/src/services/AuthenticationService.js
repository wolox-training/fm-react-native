import api from '../config/api';

const service = {
  signIn: (email, password) =>
    api.post('/auth/sign_in', {
      email,
      password
    }),

  getBookList: () => api.get('/api/v1/books')
};

export default service;

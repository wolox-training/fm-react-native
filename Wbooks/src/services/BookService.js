import api from '../config/api';

const service = {
  getBookList: () => api.get('/books'),

  getRentedBooks: () => api.get('/rents'),

  rentBook: (bookId, userId, startDate, endDate) =>
    api.put('/rents', {
      rent: {
        user_id: userId,
        book_id: bookId,
        init_date: startDate,
        return_date: endDate
      }
    }),
  searchBook: isbn => api.get('/open_library_requests/search', { isbn })
};

export default service;

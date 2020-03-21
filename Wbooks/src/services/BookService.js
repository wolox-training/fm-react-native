import api from '../config/api';

export const getBookList = () => api.get('/api/v1/books');

export const getRentedBooks = () => api.get('/api/v1/rents');

export const rentBook = (bookId, userId, startDate, endDate) =>
  api.put('/rents', {
    rent: {
      user_id: userId,
      book_id: bookId,
      init_date: startDate,
      return_date: endDate
    }
  });
export const searchBook = isbn => api.get('/open_library_requests/search', { isbn });

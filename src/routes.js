const {
  addBookHandler,
  getAllBookHandler,
  getDetailBookHandler,
  updateBookByIdHandler,
  deleteBookByIdhandler
} = require('./handler')

const routes = [
  {
    method: 'POST',
    path: '/books',
    handler: addBookHandler
  },
  {
    method: 'GET',
    path: '/books',
    handler: getAllBookHandler
  },
  {
    method: 'GET',
    path: '/books/{bookId}',
    handler: getDetailBookHandler
  },
  {
    method: 'PUT',
    path: '/books/{bookId}',
    handler: updateBookByIdHandler
  },
  {
    method: 'DELETE',
    path: '/books/{bookId}',
    handler: deleteBookByIdhandler
  }
]

module.exports = routes

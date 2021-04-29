function findAuthorById(authors, id) {
  return authors.find((author) => author.id === id);
}

function findBookById(books, id) {
  return books.find((book) => book.id === id);
}

function partitionBooksByBorrowedStatus(books) {
  function bookReturnedHelperFunc(status) {return books.filter((book) => book.borrows[0].returned === status)}

  const returnedArr = bookReturnedHelperFunc(false);

  const notReturnedArr = bookReturnedHelperFunc(true);

  let allBooksArr = [];

  allBooksArr[0] = returnedArr;
  allBooksArr[1] = notReturnedArr;
  return allBooksArr;
}

function getBorrowersForBook(book, accounts) {
  const borrowsArr = book.borrows.slice(0, 10);
  const borrowersArrResult = borrowsArr.map((borrow) => {
    const account = accounts.find((account) => account.id === borrow.id);
    return {...account, returned:borrow.returned};
  })
  return borrowersArrResult;
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};

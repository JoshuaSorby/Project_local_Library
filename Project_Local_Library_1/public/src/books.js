function findAuthorById(authors, id) {
  return authors.find((author) => author.id === id);
}

function findBookById(books, id) {
  return books.find((book) => book.id === id);
}

function partitionBooksByBorrowedStatus(books) {
  const returnedArr = books.filter((book) => book.borrows[0].returned === false);

  const notReturnedArr = books.filter((book) => book.borrows[0].returned === true);

  let allBooksArr = [];

  allBooksArr[0] = returnedArr;
  allBooksArr[1] = notReturnedArr;
  console.log(allBooksArr);
  return allBooksArr;
}

/*function getBorrowersForBook(book, accounts) {
  borrowersArr = [];
  book.borrows.forEach((borrow) => {
    accounts.find((account) => {                  //.find could be replaced with .forEach
      if (account.id === borrow.id) {
        account.returned = borrow.returned;
        if (borrowersArr.length < 10) borrowersArr.push(account);
      }
    });
  });
  console.log(borrowersArr);
  return borrowersArr;
}*/

function getBorrowersForBook(book, accounts) {
  const borrowsArr = book.borrows.slice(0, 10);
  const borrowersArrResult = borrowsArr.map((borrow) => {
    const account = accounts.find((account) => account.id === borrow.id);
    return {...account, returned:borrow.returned};
  })
  console.log(borrowsArr);
  return borrowersArrResult;
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};

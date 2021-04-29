function findAccountById(accounts, id) {
  const result = accounts.find((account) => account.id === id);
  return result;
}

function sortAccountsByLastName(accounts) {
  const sortedAccountArr = accounts.sort((accountA, accountB) => accountA.name.last > accountB.name.last ? 1 : -1););
  return sortedAccountArr;
}

function getTotalNumberOfBorrows(account, books) {
  let totalBorrows = 0;

  for(let i of books){
    totalBorrows = i.borrows.reduce((acc, currentObj) => {
      if(currentObj.id === account.id) return acc + 1;
      return acc;
    }, totalBorrows);
  }
  return totalBorrows;
}

function getBooksPossessedByAccount(account, books, authors) {
  const booksPossessedByAccount = books.filter((book) => book.borrows[0].id === account.id);

  booksPossessedByAccount.forEach((book) => {
    let authorObj = authors.find((author) => book.authorId === author.id);
    book.author = authorObj
  });
  return booksPossessedByAccount;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};

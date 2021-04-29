function getTotalBooksCount(books) {
  return books.length;
}

function getTotalAccountsCount(accounts) {
  return accounts.length;
}

function getBooksBorrowedCount(books) {
  return books.reduce((acc, book) => {
    if (book.borrows[0].returned === false) return acc + 1;
    return acc;
  }, 0)
  
}

function getMostCommonGenres(books) {
  genreArr = [];

  books.forEach(({genre}) => {
    const findGenreFunc = genreArr.find((genreObj) => genreObj.name === genre);

    if(!findGenreFunc) genreArr.push({name: genre, count: 1});

    if(findGenreFunc) findGenreFunc.count++;

    
  })
  genreArr.sort((genreA, genreB) => genreA.count > genreB.count ? -1 : 1);

  while (genreArr.length > 5) genreArr.pop();
  return genreArr;
};

function getMostPopularBooks(books) {
const bookPopularityArr = [];

books.forEach((book) => {
  bookPopularityArr.push({"name": book.title, "count":book.borrows.length});
  bookPopularityArr.sort((bookA, bookB) => bookA.count > bookB.count ? -1 : 1);
  while (bookPopularityArr.length > 5) bookPopularityArr.pop();
  
})
return bookPopularityArr;
}

function getMostPopularAuthors(books, authors) {
  authorPopularityArr = [];

  authors.forEach((author) => {
    authorPopularityArr.push({"name": `${author.name.first} ${author.name.last}`, "count": 0});
  })
  
  const bookPopularityArr = [];
  books.forEach((book) => {
    bookPopularityArr.push({"name": book.title, "count":book.borrows.length, "author ID":book.authorId});
  })

  bookPopularityArr.forEach((bookObj) => {
    const findAuthorFunc = authors.find((author) => author.id === bookObj["author ID"]);
    const findAuthorPopularityFunction = authorPopularityArr.find((author) => author.name.includes(findAuthorFunc.name.first && findAuthorFunc.name.last));
    findAuthorPopularityFunction.count += bookObj.count;
  })

  authorPopularityArr.sort((authorA, authorB) => authorA.count > authorB.count? -1 : 1);
  while(authorPopularityArr.length > 5) authorPopularityArr.pop();

  return authorPopularityArr;
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};

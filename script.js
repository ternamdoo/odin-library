const body = document.querySelector('body');
const h1 = document.createElement('h1');
h1.textContent = 'Library';
body.appendChild(h1)

const myLibrary = [];

// Initialize Book Constructor
function Book(title, author, pages, imageURL, readStatus, rating) {
  if (!new.target) {
    throw Error("You must use the 'new' operator to call the constructor");
  }
  this.id = crypto.randomUUID();
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.imageURL = imageURL;
  this.readStatus = readStatus;
  this.rating = rating;
}

function addBookToLibrary(title, author, pages, imageURL, readStatus, rating) {
  let book = new Book(title, author, pages, imageURL, readStatus, rating);
  myLibrary.push(book);
}

// Add some books to the library
addBookToLibrary('The Alchemist', 'Paulo Coelho', 182, 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1654371463i/18144590.jpg', true, 3.92);
addBookToLibrary(1984, 'George Orwell', 368, 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1657781256i/61439040.jpg', false, 4.2);
addBookToLibrary('Animal Farm', 'George Orwell', 141, 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1325861570i/170448.jpg', false, 4.01);
addBookToLibrary('The Hunger Games', 'Suzanne Collins', 374, 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1586722975i/2767052.jpg', 4.35);

const bookShelf = document.createElement('div');
bookShelf.setAttribute('id', 'container')
body.appendChild(bookShelf);

myLibrary.forEach( (book) => {
  const bookCard = document.createElement('div');
  bookCard.setAttribute('class', 'card');

  const bookCover = document.createElement('div');
  bookCover.setAttribute('class', 'image');
  const coverImage = document.createElement('img');
  coverImage.setAttribute('src', book.imageURL);
  coverImage.setAttribute('alt', 'Book cover photo.');
  bookCover.append(coverImage);

  const bookInfo = document.createElement('div');
  bookInfo.setAttribute('class', 'book-info')

  const bookTitle = document.createElement('div');
  bookTitle.textContent = book.title;

  const bookAuthor = document.createElement('div');
  bookAuthor.textContent = `by ${book.author}`;

  const bookPages = document.createElement('div');
  bookPages.textContent = `${book.pages} pages`;

  const bookRating = document.createElement('div');
  bookRating.textContent = `${book.rating}`;

  bookInfo.append(bookTitle, bookAuthor, bookPages, bookRating)

  bookCard.append(bookCover, bookInfo)
  bookShelf.append(bookCard);
})

body.append(bookShelf);

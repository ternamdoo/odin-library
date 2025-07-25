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

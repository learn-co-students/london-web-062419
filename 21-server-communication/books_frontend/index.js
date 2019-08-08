function addBook(book) {
  const book_list = document.querySelector("#book-list");
  const div = makeBookCard(book);
  book_list.appendChild(div);
}

function hideAllBookCardsExcept(div) {
  const book_list = document.querySelector("#book-list");
  [...book_list.children].forEach(bookDiv => {
    if (div !== bookDiv) {
      bookDiv.style.display = 'none'
    } else {
      bookDiv.style.display = 'inline-block'
    }
  })
}

function showAllBookCards() {  
  const book_list = document.querySelector("#book-list");
  [...book_list.children].forEach(bookDiv => {
      bookDiv.style.display = 'inline-block'
  })
}

function makeBookCard(book) {
  const div = document.createElement("div");
  div.id = `book-${book.id}`
  div.className = "card";

  const img = document.createElement("img");
  img.src = book.img;

  const h3 = document.createElement("h3");
  h3.textContent = book.title;

  const p = document.createElement("p");
  p.textContent = book.author;

  const button = document.createElement('button')
  button.innerText = 'Delete book'

  button.addEventListener('click', () => {
    deleteBook(book.id)
      .then(() => div.remove())
      .catch(error => console.error(error))
    
  })
  
  const editButton = document.createElement('button')
  editButton.innerText = 'Edit book'

  editButton.addEventListener('click', () => {
    populateFormWithBookData(book)
    hideAllBookCardsExcept(div)
  })

  //add all elements to div
  div.append(img, h3, p, button, editButton)
  // div.appendChild(img);
  // div.appendChild(h3);
  // div.appendChild(p);
  // div.appendChild(button);
  // div.appendChild(editButton);

  return div;
}

function updateBookCard(book) {
  const div = document.querySelector(`#book-${book.id}`)

  const img = div.querySelector("img");
  img.src = book.img;

  const h3 = div.querySelector("h3");
  h3.textContent = book.title;

  const p = div.querySelector("p");
  p.textContent = book.author;
}

function showBooks(bookArray) {
  bookArray.map(book => {
    addBook(book);
  });
}

// what happens when books isn't defined?
// showBooks(books);

getAllBooks()
  .then(showBooks)

const form = document.querySelector('form')

form.addEventListener('submit', (event) => {
  event.preventDefault()
  
  if (form.elements.id.value.length > 0) {
    updateBookInBackEnd({
      id: event.target.elements.id.value,
      title: event.target.elements.title.value,
      author: event.target.elements.author.value,
      img: event.target.elements.cover.value
    })
    .then(updatedBook => {
      updateBookCard(updatedBook)
    })
  } else {
    sendBookToBackend({
      title: event.target.elements.title.value,
      author: event.target.elements.author.value,
      img: event.target.elements.cover.value
    })
    .then(newBookFromBackend => addBook(newBookFromBackend))
  }

  form.reset()
  form.elements.id.value = ''
  form.elements.submit.value = "Submit"
  showAllBookCards()
})

function populateFormWithBookData(book) {
  form.elements.id.value = book.id
  form.elements.title.value = book.title
  form.elements.author.value = book.author
  form.elements.cover.value = book.img

  form.elements.submit.value = "update book"
}
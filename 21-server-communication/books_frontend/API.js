const jsonify = res => res.json()
const log = thing => console.log(thing)

const apiEndpoint = 'http://localhost:3000'
const booksUrl = `${apiEndpoint}/books`

function sendBookToBackend(book) {
    return fetch(booksUrl, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(book)
    })
      .then(jsonify)
}

function updateBookInBackEnd(book) {
  return fetch(`${booksUrl}/${book.id}`, {
    method: 'PATCH',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(book)
  })
    .then(jsonify)
}

function getAllBooks () {
    return fetch(booksUrl)
        .then(jsonify)
        // .then(books => showBooks(books))
}

function deleteBook(bookId) {
  return fetch(`${booksUrl}/${bookId}`, { method: "DELETE" })
    .then(jsonify)
}
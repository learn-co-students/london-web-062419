const jsonify = res => res.json()
const log = thing => console.log(thing)

const apiEndpoint = 'https://anapioficeandfire.com/api'
const houseUrl = `${apiEndpoint}/houses/378`
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

function getHouse () {
    return fetch(houseUrl)
        .then(jsonify)
        // .then(books => showBooks(books))
}

function getDataAtUrl(url) {
  return fetch(url).then(jsonify)
}
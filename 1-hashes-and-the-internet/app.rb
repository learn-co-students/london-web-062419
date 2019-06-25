require "rest-client"
require "pry"
require "json"

# Get the search term from the user
def get_search_term
  puts "Please enter a search term:"
  gets.chomp
end
# Make the request with the search term, get the response and turn into a hash
def make_request(search_term)
  JSON.parse(RestClient.get("https://www.googleapis.com/books/v1/volumes?q=#{search_term}"))
end
# Get all the books
def get_books(response)
  response["items"]
end
# Get the title for a book
def get_title(book)
  book["volumeInfo"]["title"]
end
# Iterate through the list of books and output the title for every one
def print_titles(books)
  books.each do |book|
    puts get_title(book)
  end
end

def run
  search_term = get_search_term
  response = make_request(search_term)
  books = get_books(response)
  print_titles(books)
end

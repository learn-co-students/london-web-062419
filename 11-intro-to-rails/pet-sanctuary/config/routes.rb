Rails.application.routes.draw do
  resources :posts
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  # This will give us all seven RESTful routes for pets, including all their aliases.
  resources :pets

  # A custom route for an about page. If a client makes a GET request to /pets/about, the about method in our pets controller will be called. We have also aliased this route as about. That means that at any time we can call about_path and it will return the URL /pets/about to us.
  get "/pets/about", to: "pets#about", as: "about"
  # get "/pets", to: "pets#index", as : "pets"
  # get "/pets/new", to: "pets#new", as: "new_pet"
end

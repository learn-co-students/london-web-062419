Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root to: "bloggers#index"

  # Bloggers routes
  get "/bloggers/new", to: "bloggers#new", as: "new_blogger"
  get "/bloggers/:id", to: "bloggers#show", as: "blogger"
  post "/bloggers", to: "bloggers#create"

  # Destinations routes
  get "destinations/:id", to: "destinations#show", as: "destination"

  # Posts routes
  get "/posts/new", to: "posts#new"
  get "/posts/:id", to: "posts#show", as: "post"
  get "/posts/:id/edit", to: "posts#edit"
  post "/posts", to: "posts#create"
  patch "/posts/:id", to: "posts#update"
  post "posts/:id/like", to: "posts#like", as: "like_post"
end

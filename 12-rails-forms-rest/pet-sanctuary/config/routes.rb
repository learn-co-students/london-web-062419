Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  # Static route
  get "/pets/about", to: "pets#about"
  # get "/pets", to: "pets#index", as: "pets"

  resources :pets
end

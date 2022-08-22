Rails.application.routes.draw do
  get '/hello', to: 'application#hello_world'

  # get '*path',
  #   to: 'fallback#index',
  #   constraints: ->(req) { !req.xhr? && req.format.html? }

    post "/signup", to: "users#create"
    post "/me", to: "users#show"
    resources :users

    post "/login", to: "sessions#create"
    delete "/logout", to: "sessions#destroy"
end

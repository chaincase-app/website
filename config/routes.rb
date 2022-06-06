Rails.application.routes.draw do
  resources :users
  root to: 'static_pages#home'
  get '/words/*essay', to: 'words#show'
end

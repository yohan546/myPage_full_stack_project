Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api, defaults: {format: :json} do 
    resource :user, only: [:create]
    resources :users, only: [:index, :show] do
      resources :friendships, only: [:index, :show]
    end
      resources :posts, only: [:index]

    resource :friendships, only: [:create]

    
    resource :session, only: [:show, :create, :destroy]
  end

  root "static_pages#root"
end

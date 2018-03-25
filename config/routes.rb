Rails.application.routes.draw do

  namespace :api do
    get 'invitations/accept'
  end

  namespace :api do
    get 'invitations/invite'
  end

  namespace :api do
    get 'users/index'
  end

  mount_devise_token_auth_for 'User', at: 'api/auth'
  
  # This nested route is only a band aid... there will be 4 to 5 tables ... cant nest that deep

  namespace :api do
    resources :groups, only: :show
    resources :areas, only: [:show, :create, :destroy, :update]
    get 'areaname/:id', to:'areas#areaname'

    resources :walls, only: [:show, :create, :destroy, :update]
    resources :routes, only: [:show, :create, :destroy]
    resources :users, only: [:index]

    
    post '/invitation/send', to: 'invitations#invite'
    post '/invitation/accept', to: 'invitations#accept'
  end

  #Do not place any routes below this one
  get '*other', to: 'static#index'
end

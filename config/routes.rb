Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/auth'
  
  # this nested route is only a band aid... there will be 4 to 5 tables ... cant nest that deep
  namespace :api do
    resources :areas, only: [ :index, :destroy, :update ] do
      resources :walls, only: [ :index, :destroy, :update ]
    end
  end

  #Do not place any routes below this one
  get '*other', to: 'static#index'
end

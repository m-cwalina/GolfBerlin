Rails.application.routes.draw do
  devise_for :users

  namespace :api do
    namespace :v1 do
      get 'buddies', to: 'buddies#index'
      post 'buddies/create'
      delete 'buddies/:id', to: 'buddies#destroy'
      get 'golf_courses', to: 'golf_courses#index'
      post 'golf_courses/create'
      delete 'golf_courses/:id', to: 'golfcourses#destroy'
    end
  end

  root to: 'pages#home'
  resources :golf_courses
  resources :buddies
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end

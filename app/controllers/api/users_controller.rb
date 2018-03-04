class Api::UsersController < ApplicationController
  before_action :authenticate_user!
  before_action :check_user

  
  def index
    render json: User.all.to_json
  end

  private
  def check_user
    unless current_user.role == 'admin'
      render json: { errors: 'Not allowed.' }, status: 422
    end
  end

end
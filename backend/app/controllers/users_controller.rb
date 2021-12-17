class UsersController < ApplicationController
  skip_before_action :authorized, only: :create

  def create 
      user = User.create(user_params)
    if user.valid?
      session[:id] = user.id 
      render json: user, status: :ok
    else
      render json: user.errors.full_messages, status: :unprocessable_entity
    end
  end

  def show
      render json: @current_user , include: :projects
  end

  private

  def user_params 
      params.permit(:username, :password, :password_confirmation)
  end

end

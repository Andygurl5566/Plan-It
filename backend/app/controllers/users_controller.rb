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

  def update
    user = User.find_by(id: params[:id])
    if user
      user.update(user_params)
      render json: user, status:200
    else
      render json: {error: "user not found"}
    end
  end

  def show
      render json: @current_user , include: :projects
  end

  private

  def user_params 
      params.permit(:username, :password, :bio, :image, :name,:password_confirmation)
  end

end

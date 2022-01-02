class SessionsController < ApplicationController
    skip_before_action :authorized, only: [:create, :destroy]

    def create
      user = User.find_by(username: params[:username])
      avatar = rails_blob_path(user.avatar)
      
      if user&.authenticate(params[:password])
      
        session[:id] = user.id
      
        render json: {user: user, avatar: avatar}
      else
        render json: { errors: ["Invalid username or password"] }, status: :unauthorized
      end
    end
  
    def destroy
     
      session.delete :id
      head :no_content
    end
end

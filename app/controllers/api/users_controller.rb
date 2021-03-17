class Api::UsersController < ApplicationController
    def create 
        @user = User.new(user_params)

        if @user.save 
            sign_in(@user)
            render "api/users/newsfeed"
        else
            render json: @user.errors.full_messages, status 422 
    end

    private

    def user_params 
        params.require(:user).permit(:name, :username, :email, :password)
    end
end

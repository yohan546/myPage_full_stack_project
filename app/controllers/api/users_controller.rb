class Api::UsersController < ApplicationController
    def create 
        @user = User.new(user_params)

        if @user.save 
            sign_in(@user)
            render "api/users/newsfeed"
        else
            render json: []
    end
end

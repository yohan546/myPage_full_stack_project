class Api::SessionsController < ApplicationController 
    def create 
        @user = User.find_by_credentials(
            params[:user][:username],
            params[:user][:password]
        )

        if @user 
            sign_in(@user)
            render "api/users/newsfeed"
        else
            render json: {base: ['Invalid Email or Password']}, status: 401
        end

    end

    def destory 
        @user = current_user

        if @user 
            sign_out
            render 'api/users/newsfeed'
        else 
            render json: ['Must Be Signed In'], status 404
        end
    end

end
class Api::FriendshipsController < ApplicationController 

    def index 
        @user = User.find(params[:user_id])
        @friends = @user.friends 
        render 'api/friendships/index'
    end

    def show 
        @user = User.find(params[:user_id])
        @friend = @user.friends.find(params[:id])
        render 'api/friendships/show'
    end

    def create
        @friend = User.find(params[:friend_id])
    
        User.transaction do 
          Friendship.create!(user: current_user, friend: friend)
          Friendship.create!(user: friend, friend: current_user)
        end
    end

end



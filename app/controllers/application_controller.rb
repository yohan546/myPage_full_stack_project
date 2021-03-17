class ApplicationController < ActionController::Base
    protect_from_forgery with: :exception

    helper_method :current_user, :signed_in? 

    private 

    def current_user 
        return nil if session[:session_token].nil?
        @current_user ||= User.find_by(session_token: session[:session_token])
    end

    def signed_in?
        !!@current_user
    end

    def sign_in(user)
        user.reset_session_token! 
        session[:session_token] = user.session_token
    end

    def sign_out
        current_user.reset_session_token!
        session[:session_token] = nil 
        @current_user = nil
    end

    def require_signed_in!
        if !current_user 
            render json: {base: ['Invalid Email or Password']}, status: 401
        end
    end
end

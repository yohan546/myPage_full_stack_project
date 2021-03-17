class User < ApplicationRecord 
    validates :username, :email, :password_digest, :session_token, presence: true
    validates :username, :email, unique: true 
    attr_reader: :password 

    after_initalize :ensure_session_token


    def self.find_by_credentials(email, password) 
        user = User.find_by(email: email)
        return nil if user.nil? 

        if (user.is_password?(password)) 
            return user 
        else
            return nil
        end
    end

    def password=(password) 
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def is_password(password) 
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def reset_session_token! 
        generate_session_token 
        save!
        self.session_token
    end

    def ensure_session_token
        generate_session_token unless self.session_token
    end

    def generate_unique_session_token 
        self.session_token = SecureRandom.urlsafe_base64
        while (User.find_by(session_token: self.session_token)) 
            self.session_token = SecureRandom.urlsafe_base64
        end
        self.session_token
    end

end
# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  name            :string           not null
#  email           :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
class User < ApplicationRecord 
    validates :email, :password_digest, :session_token, presence: true
    validates :email, uniqueness: true 
    validates :password, length: {minimum: 6}, allow_nil: true
    attr_reader :password 

    after_initialize :ensure_session_token




    has_many :friendships

    has_many :friends,
        through: :friendships

    def self.find_by_credentials(email, password) 
        user = User.find_by(email: email)
        return nil if user.nil? 

        if (user.check_password?(password)) 
            return user 
        else
            return nil
        end
    end

    def password=(password) 
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def check_password?(password) 
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def reset_session_token! 
        generate_unique_session_token 
        save!
        self.session_token
    end

    private

    def ensure_session_token
        generate_unique_session_token unless self.session_token
    end

    def new_session_token 
        SecureRandom.urlsafe_base64
    end

    def generate_unique_session_token 
        self.session_token = new_session_token
        while (User.find_by(session_token: self.session_token)) 
            self.session_token = new_session_token
        end
        self.session_token
    end



end

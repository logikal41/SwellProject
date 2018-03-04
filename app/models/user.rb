class User < ActiveRecord::Base
  # Include default devise modules.
  devise :invitable, :database_authenticatable, :registerable,
          :recoverable, :rememberable, :trackable, :validatable,
          :omniauthable, :registerable, :invitable
  include DeviseTokenAuth::Concerns::User
end

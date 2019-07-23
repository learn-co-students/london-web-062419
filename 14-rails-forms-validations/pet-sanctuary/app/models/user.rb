class User < ApplicationRecord
  # Instances of pet that belong to instances of user will be dependent upon their parent i.e. if a user is destroyed, all the pets that belong to them will also be destroyed.
  has_many :pets, dependent: :destroy

  validates :username, :email, { presence: true, uniqueness: true }
  validates :email, format: { with: URI::MailTo::EMAIL_REGEXP } 
end

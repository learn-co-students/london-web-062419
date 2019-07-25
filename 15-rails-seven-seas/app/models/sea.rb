class Sea < ApplicationRecord
  validates :name, length: { minimum: 5 }
end

class Book < ActiveRecord::Base # Inherits all the methods from ActiveRecord::Base
  belongs_to :author # Creates a method for an instance of Book that returns the instance of Author that it belongs to
end

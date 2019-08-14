class Author < ActiveRecord::Base
  has_many :books # Creates a method for an instance of Author that returns an array of all the instances of Book that belong to it 

end

# Example of a has_many through relationship between three models
# class Patient
#   has_many :appointments
#   has_many :doctors, through: :appointments
# end
#
# class Doctor
#   has_many :appointments
#   has_many :patients, through: :appointments
# end
#
# class Appointment
#   belongs_to :patient
#   belongs_to :doctor
# end

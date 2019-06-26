require "pry"
require_relative "person.rb" # Pull in all the code from our person file - we don't define that in here, we execute it to create our instances
person = Person.new("Joe", "06/06/1992")
person.say_hello

binding.pry
0

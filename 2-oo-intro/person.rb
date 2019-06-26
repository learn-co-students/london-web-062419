class Person
  attr_accessor(:name)
  attr_reader(:date_of_birth)
  # attr_writer
  @@all = [] # Class variable

  def initialize(name, date_of_birth) # Constructor method - creates instances and sets up the value of their instance variables
    @name = name # Instance variable
    @date_of_birth = date_of_birth
    @@all << self # Self - contextual word that refers to the object this method has been called on/that we are currently interacting with
  end

  # Getter methods - this is what attr_reader (or accessor) makes for us
  # def name
  #   @name
  # end
  # def date_of_birth
  #   @date_of_birth
  # end


  # Setter methods - this is what attr_writer (or accessor) makes for us
  # def name=(name)
  #   @name = name
  # end

  # Instance method
  def say_hello
    puts "Hi, my name is #{self.name}"
  end

  # Class method
  def self.all
    @@all
  end

end

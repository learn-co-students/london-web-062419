class User < ApplicationRecord

  def say_three_greetings
    greetings = []
    3.times do 
      greetings << 'hello!'
    end
    greetings
  end
end

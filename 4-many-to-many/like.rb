class Like
  # Get the user it belongs to
  # Get the tweet it belongs to
  attr_reader(:user, :tweet)
  
  @@all = []

  def initialize(user:, tweet:)
    @user = user
    @tweet = tweet
    @@all << self
  end

  def self.all
    @@all
  end

end

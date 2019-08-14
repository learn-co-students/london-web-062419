class User
  # Get the user's username
  attr_reader(:username)

  # Create a new user with a username
  def initialize(username)
    @username = username
  end

  # Post a tweet
  def post_tweet(message)
    new_tweet = Tweet.new(message: message, user: self) # We pass in ourselves (The instance of User that called this post_tweet method) as the user that this instance of Tweet belongs to
  end

  def tweets
    Tweet.all.select { |tweet| tweet.user == self } # Go to our single source of truth to get all the instances of Tweet, iterate through it and only select the tweets that belong to the same instance of User that called this tweets method
  end

end

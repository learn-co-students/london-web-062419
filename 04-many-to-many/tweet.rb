class Tweet
  # Get the message
  # Get the user it belongs to
  attr_reader(:message, :user)

  # Class variable to keep track of every instance of Tweet - our single source of truth for all instances of Tweet
  @@all = []

  # Get a list of every instance of Tweet that's been created
  def self.all
    @@all
  end

  # Create a new Tweet with a message and the user it belongs to
  def initialize(message:, user:)
    @message = message
    @user = user
    @@all << self
  end

  # Get the username of the user it belongs to
  def username
    self.user.username # By using self to get the Tweet that called this method, then getting the instance of User that this instance of Tweet belongs to, we can then get that User's username
  end

  # All the likes that belong to this tweet
  def likes
    Like.all.select { |like| like.tweet == self }
  end

  # Get back all the users who liked this tweet
  def users_who_liked_this
    likes.map { |like| like.user } # We start off with an array of all the likes that belong to this Tweet and then map that to an an array of users by pulling out the User instance that each Like belongs to
  end

  # Get back the usernames of all the users who liked this tweet
  def usernames_who_liked_this
    users_who_liked_this.map { |user| user.username }
  end

end

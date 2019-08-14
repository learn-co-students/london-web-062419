require "pry"
require_relative "user.rb"
require_relative "tweet.rb"
require_relative "like.rb"

user1 = User.new("Portus")
user2 = User.new("Portus2")
user3 = User.new("BigDave55")


tweet1 = user1.post_tweet(message: "Just hit lv99 in mining!", user: user1)

user1.like_tweet(tweet1)
user2.like_tweet(tweet1)
user3.like_tweet(tweet1)


binding.pry
0

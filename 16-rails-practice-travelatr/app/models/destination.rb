class Destination < ApplicationRecord
  has_many :posts
  has_many :bloggers, through: :posts

  def most_recent_posts
    self.posts.order(created_at: :desc).limit(5)
  end

  def featured_post
    self.posts.order(likes: :desc).limit(1)[0]
  end

  def average_age
    age_sum = 0
    uniq_bloggers = self.posts.map { |post|
      post.blogger
    }.uniq

    uniq_bloggers.map { |blogger|
      age_sum += blogger.age
    }

    age_sum / uniq_bloggers.count
  end
end

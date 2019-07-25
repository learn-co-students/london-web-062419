class Blogger < ApplicationRecord
  has_many :posts
  has_many :destinations, through: :posts

  validates :name, uniqueness: :true
  validates :age, numericality: { greater_than: 0 }
  validates :bio, length: { minimum: 30 }

  def total_likes
    likes = 0

    self.posts.map { |post|
      likes += post.likes
    }

    likes
  end

  def featured_post
    self.posts.order(likes: :desc).limit(1)[0]
  end
end

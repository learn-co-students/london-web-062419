class Pet < ApplicationRecord
  belongs_to :user

  validates :name, :age, presence: true
  validates :age, numericality: { only_integer: true, greater_than: 0  }

  validate :name_cannot_be_sam_and_age_cannot_be_5

  def name_cannot_be_sam_and_age_cannot_be_5
    if name == 'sam' && age == 5
      errors.add(:problem, "is: name can't be sam and age 5 at the same time")
    end
  end
end

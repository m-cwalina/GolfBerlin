class GolfCourse < ApplicationRecord
  has_many :users, dependent: :destroy
  has_many :buddies, dependent: :destroy
end

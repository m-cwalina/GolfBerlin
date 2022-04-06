class GolfCourse < ApplicationRecord
  geocoded_by :location
  after_validation :geocode, if: :will_save_change_to_location?
  has_many :users, dependent: :destroy
  has_many :buddies, dependent: :destroy
end

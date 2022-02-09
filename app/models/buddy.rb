class Buddy < ApplicationRecord
  belongs_to :user, dependent: :destroy
  belongs_to :golf_course, dependent: :destroy
end

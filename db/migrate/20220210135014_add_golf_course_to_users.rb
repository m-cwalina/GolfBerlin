class AddGolfCourseToUsers < ActiveRecord::Migration[6.0]
  def change
    add_reference :users, :golf_course, null: false, foreign_key: true
  end
end

class AddCoordinatesToGolfCourses < ActiveRecord::Migration[6.0]
  def change
    add_column :golf_courses, :latitude, :float
    add_column :golf_courses, :longitude, :float
  end
end

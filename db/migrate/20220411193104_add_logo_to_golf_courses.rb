class AddLogoToGolfCourses < ActiveRecord::Migration[6.0]
  def change
    add_column :golf_courses, :logo, :string
  end
end

class CreateGolfCourses < ActiveRecord::Migration[6.0]
  def change
    create_table :golf_courses do |t|
      t.string :location
      t.string :name
      t.integer :par

      t.timestamps
    end
  end
end

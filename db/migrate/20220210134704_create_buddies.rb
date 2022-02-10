class CreateBuddies < ActiveRecord::Migration[6.0]
  def change
    create_table :buddies do |t|
      t.string :first_name
      t.string :last_name
      t.integer :age
      t.integer :handicap
      t.string :address
      t.references :golf_course, null: false, foreign_key: true

      t.timestamps
    end
  end
end

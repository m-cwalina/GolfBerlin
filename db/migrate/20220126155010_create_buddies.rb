class CreateBuddies < ActiveRecord::Migration[6.0]
  def change
    create_table :buddies do |t|
      t.references :user, null: false, foreign_key: true
      t.references :golf_course, null: false, foreign_key: true

      t.timestamps
    end
  end
end

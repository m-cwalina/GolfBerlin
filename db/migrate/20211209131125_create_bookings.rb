class CreateBookings < ActiveRecord::Migration[6.0]
  def change
    create_table :bookings do |t|
      t.string :time
      t.references :user, null: false, foreign_key: true
      t.references :golf_course, null: false, foreign_key: true

      t.timestamps
    end
  end
end

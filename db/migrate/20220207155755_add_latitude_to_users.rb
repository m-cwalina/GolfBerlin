class AddLatitudeToUsers < ActiveRecord::Migration[6.0]
  def change
    add_column :users, :latitude, :integer
  end
end

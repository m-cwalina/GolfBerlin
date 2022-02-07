class RemoveLatitudeFromUsers < ActiveRecord::Migration[6.0]
  def change
    remove_column :users, :latitude, :integer
  end
end

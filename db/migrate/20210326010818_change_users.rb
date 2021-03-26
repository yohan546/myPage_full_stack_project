class ChangeUsers < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :friendlist, :integer, array: true, default: []
    add_column :users, :postlist, :integer, array: true, default: []
  end
end

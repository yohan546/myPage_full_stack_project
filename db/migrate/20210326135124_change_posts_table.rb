class ChangePostsTable < ActiveRecord::Migration[5.2]
  def change
    remove_index :posts, :author_id
    remove_index :posts, :wall_id

    add_index :posts, :author_id
    add_index :posts, :wall_id
  end
end

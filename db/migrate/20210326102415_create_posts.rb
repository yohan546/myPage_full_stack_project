class CreatePosts < ActiveRecord::Migration[5.2]
  def change
    create_table :posts do |t|
      t.integer :author_id, null: false
      t.integer :wall_id, null: false
      t.string :title
      t.text :body, null: false 
    end

    add_index :posts, :author_id, unique: true
    add_index :posts, :wall_id, unique: true 
  end
end

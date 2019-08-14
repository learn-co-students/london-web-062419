class AddAuthorIdToBooks < ActiveRecord::Migration[5.2]
  def change
    add_column(:books, :author_id, :integer) # Adds a new column called author_id of datatype integer to the books table
  end
end

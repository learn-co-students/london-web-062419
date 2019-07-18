class AddColourToPets < ActiveRecord::Migration[5.2]
  def change
    add_column :pets, :colour, :string
  end
end

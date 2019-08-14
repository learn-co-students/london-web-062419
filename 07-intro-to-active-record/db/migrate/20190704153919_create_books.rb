class CreateBooks < ActiveRecord::Migration[5.2] # Inherits methods from ActiveRecord's Migration class
  def change
    create_table(:books) do |t| # Creates a new table called books in our database
      t.string :title # Setting the datatypes and column names of the columns we want this table to have 
      t.integer :page_count
    end
  end
end

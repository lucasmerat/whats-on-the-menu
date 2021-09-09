class AddCompletedToRecipes < ActiveRecord::Migration[6.1]
  def change
    add_column :recipes, :completed, :boolean, :default => false
  end
end

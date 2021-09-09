class CreateRecipes < ActiveRecord::Migration[6.1]
  def change
    create_table :recipes do |t|
      t.string :name
      t.string :link
      t.string :mealType

      t.timestamps
    end
  end
end

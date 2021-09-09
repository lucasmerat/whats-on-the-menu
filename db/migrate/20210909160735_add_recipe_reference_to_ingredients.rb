class AddRecipeReferenceToIngredients < ActiveRecord::Migration[6.1]
  def change
    add_reference :ingredients, :recipe, null: true, foreign_key: true
  end
end

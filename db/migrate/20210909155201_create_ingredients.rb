class CreateIngredients < ActiveRecord::Migration[6.1]
  def change
    create_table :ingredients do |t|
      t.string :name
      t.boolean :completed
      t.integer :quantity

      t.timestamps
    end
  end
end

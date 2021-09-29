class RecipesController < ApplicationController
  def index
    render :json => Recipe.all
  end

  def update
    recipe = Recipe.find(recipe_params[:id])
    recipe.update(recipe_params)
  end

  def create
    recipe = Recipe.create(recipe_params)
    render :json => recipe
  end

  def recipe_params
    params.require(:recipe).permit(:id, :completed, :name, :link, :mealType)
  end
end

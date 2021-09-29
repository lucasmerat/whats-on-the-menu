import Model, { attr, hasMany } from '@ember-data/model';

export default class RecipeModel extends Model {
  @attr name;
  @attr link;
  @attr mealType;
  @attr completed;

  @hasMany('ingredient') ingredients;
}

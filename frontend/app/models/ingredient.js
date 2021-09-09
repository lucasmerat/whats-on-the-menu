import Model, { attr, belongsTo } from '@ember-data/model';

export default class RecipeModel extends Model {
  @attr name;
  @attr quantity;
  @attr completed;

  @belongsTo('recipe') recipe;
}

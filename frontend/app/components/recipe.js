import Component from '@glimmer/component';
import { task } from 'ember-concurrency';

export default class AddRecipesCardComponent extends Component {
  @task
  *toggleCompleted() {
    this.args.recipe.completed = !this.args.recipe.completed;
    yield this.args.recipe.save();
  }
}

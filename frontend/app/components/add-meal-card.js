import Component from '@glimmer/component';
import { task } from 'ember-concurrency';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class AddRecipesCardComponent extends Component {
  @service store;
  @tracked name = '';
  @tracked mealType = 'breakfast';
  @tracked link = '';

  @task
  *saveRecipe(e) {
    e.preventDefault();
    let recipe = this.store.createRecord('recipe', {
      name: this.name,
      mealType: this.mealType,
      link: this.link,
    });
    yield recipe.save();
  }

  @action
  changeName(e) {
    this.name = e.target.value;
  }

  @action
  changeLink(e) {
    this.link = e.target.value;
  }

  @action
  changeMealType(e) {
    this.mealType = e.target.value;
  }
}

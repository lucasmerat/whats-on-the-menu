import Route from '@ember/routing/route';

export default class DashboardRoute extends Route {
  async model() {
    let recipes = await this.store.findAll('recipe');
    return recipes;
  }
}

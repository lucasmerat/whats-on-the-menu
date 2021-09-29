import Route from '@ember/routing/route';

export default class DashboardRoute extends Route {
  async model() {
    console.log('explode');
    let recipes = await this.store.findAll('recipe');
    return recipes;
  }
}

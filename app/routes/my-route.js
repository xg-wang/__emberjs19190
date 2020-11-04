import Route from '@ember/routing/route';

export default Route.extend({
  queryParams: {
    foo: { refreshModel: true }
  },

  model(params, transition) {
    let foo = transition.to.queryParams.foo || 'no QPs exist';
    console.log(`Query Params: ${transition.to.queryParams}`);

    return { foo };
  },

  actions: {
    addQP() {
      console.log('updating params');
      this.set('controller.foo', 'bar');
      //this.refresh();
    },

    refresh() {
      console.log('updating params and refreshing');
      this.set('controller.foo', 'stuff');
      this.refresh();
    }
  }
});

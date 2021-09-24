import Route from "@ember/routing/route";

export default Route.extend({
  queryParams: {
    foo: { refreshModel: false },
  },

  model(params, transition) {
    let foo = transition.to.queryParams.foo || "no QPs exist";
    console.log(`Query Params: ${JSON.stringify(transition.to.queryParams)}`);

    return { foo };
  },

  actions: {
    addQP() {
      console.log("updating params NO refresh");
      this.transitionTo({ queryParams: { foo: "bar" } });
    },

    refresh() {
      console.log("updating params and refreshing");
      this.transitionTo({ queryParams: { foo: "stuff" } });
      this.refresh();
    },

    reset() {
      console.log("resetting params and refreshing");
      this.transitionTo({ queryParams: { foo: undefined } });
      // this.refresh();
    },
  },
});

import { ActionTree } from "vuex";
import { client } from "./shopify-config";
import { Actions, ActionTypes, MutationTypes, State } from "./store.types";

export const actions: ActionTree<State, State> & Actions = {
  [ActionTypes.INC_COUNTER]({ commit }, payload: number) {
    commit(MutationTypes.INC_COUNTER, payload);
  },
  async [ActionTypes.GET_PRODUCTS]({ commit }) {
    const products = await client.product.fetchAll();
    console.log("products", products);
  },
};

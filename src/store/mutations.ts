import { MutationTree } from "vuex";
import { Mutations, MutationTypes, State } from "./store.types";

export const mutations: MutationTree<State> & Mutations = {
  [MutationTypes.INC_COUNTER](state: State, payload: number) {
    state.count = payload;
  },
};

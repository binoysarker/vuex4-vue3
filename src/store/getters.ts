import { GetterTree } from "vuex";
import { Getters, State } from "./store.types";

export const getters: GetterTree<State, State> & Getters = {
  doubleCounter: (state) => state.count * 2,
};

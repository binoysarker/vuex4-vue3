import { createLogger, createStore } from "vuex";
import { actions } from "./actions";
import { getters } from "./getters";
import { mutations } from "./mutations";
import { state } from "./state";
import { Store } from "./store.types";
import createPersistedState from "vuex-persistedstate";

export const store = createStore({
  state,
  mutations,
  actions,
  getters,
  plugins: [createLogger(), createPersistedState()]
});

export function useStore(){
  return store as Store;
}
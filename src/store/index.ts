import { createStore, Store, useStore as baseUseStore } from "vuex";
import { key, State } from "./store.types";

export const store = createStore<State>({
  state: {
    count: 0,
    shopifyStore: null,
  },
});

// define your own `useStore` composition function
export function useStore(): Store<State> {
  return baseUseStore(key);
}

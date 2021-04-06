import { InjectionKey } from "vue";
import { Store } from "vuex";

export interface State {
  count: number;
  // shopifyStore related data
  shopifyStore: {
    products: { name: string }[] | null;
  } | null;
}

export const key: InjectionKey<Store<State>> = Symbol();

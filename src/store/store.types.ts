import {
  ActionContext,
  CommitOptions,
  DispatchOptions,
  Store as VuexStore,
} from "vuex";

// state types
export interface State {
  count: number;
  // shopifyStore related data
  shopifyStore: {
    products: { name: string }[] | null;
  };
}
// mutation and action enums
export enum MutationTypes {
  INC_COUNTER = "SET_COUNTER",
}
export enum ActionTypes {
  INC_COUNTER = "SET_COUNTER",
  GET_PRODUCTS = "GET_PRODUCTS",
}
// mutation and action types
export type Mutations<S = State> = {
  [MutationTypes.INC_COUNTER](state: S, payload: number): void;
};
// actions
export type AugmentedActionContext = {
  commit<K extends keyof Mutations>(
    key: K,
    payload: Parameters<Mutations[K]>[1]
  ): ReturnType<Mutations[K]>;
} & Omit<ActionContext<State, State>, "commit">;
// actions interface
export interface Actions {
  [ActionTypes.INC_COUNTER](
    { commit }: AugmentedActionContext,
    payload: number
  ): void;
}
// getters
export type Getters = {
  doubleCounter(state: State): number;
};

// setup store type
export type Store = Omit<
  VuexStore<State>,
  "commit" | "getters" | "dispatch"
> & {
  commit<K extends keyof Mutations, P extends Parameters<Mutations[K]>[1]>(
    key: K,
    payload: P,
    options?: CommitOptions
  ): ReturnType<Mutations[K]>;
} & {
  getters: {
    [K in keyof Getters]: ReturnType<Getters[K]>;
  };
} & {
  dispatch<K extends keyof Actions>(
    key: K,
    payload: Parameters<Actions[K]>[1],
    options?: DispatchOptions
  ): ReturnType<Actions[K]>;
};

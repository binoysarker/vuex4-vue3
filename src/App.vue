<template>
  <div>
    <router-view />
  </div>
</template>
<script>
import { defineComponent, onBeforeMount } from "vue";
import { useStore } from "./store";
import { ActionTypes } from "./store/store.types";

export default defineComponent({
  name: "App",
  setup() {
    onBeforeMount(() => {
      const store = useStore();
      if (store.state.shopifyStore.products == null) {
        // get the products from the store
        store.dispatch(ActionTypes.GET_PRODUCTS);
      }
    });
  },
});
</script>

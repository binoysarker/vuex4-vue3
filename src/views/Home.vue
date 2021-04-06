<template>
  <div class="home">
    {{ name }}
    <img alt="Vue logo" src="../assets/logo.png" />
    <input type="text" name="unme" v-model="name" id="" />
    {{ name }}
    <button @click="changeText">click me</button>
    <Button label="Submit" />
    <br />
    Products: {{ store.state.count }}
  </div>
</template>

<script lang="ts">
import { useStore } from "@/store";
import { MutationTypes } from "@/store/store.types";
import { defineComponent, onMounted, ref } from "vue";

export default defineComponent({
  name: "Home",
  components: {},
  setup() {
    const name = ref("Binoy Sarker");
    const store = useStore();
    const changeText = () => {
      name.value = "hello";
    };
    onMounted(() => {
      console.log("on mounted");
      store.commit(MutationTypes.INC_COUNTER, 1);
    });

    return { name, changeText, store };
  },
});
</script>

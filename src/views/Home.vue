<template>
  <div class="home">
    {{ name }}
    <img alt="Vue logo" src="../assets/logo.png" />
    <input type="text" name="unme" v-model="name" id="" />
    {{ name }}
    <button @click="changeText">click me</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive, ref } from "vue";

export default defineComponent({
  name: "Home",
  components: {},
  setup() {
    const name = ref('Binoy Sarker')
    const changeText = () => {
      name.value = 'hello'
    }
    onMounted(() => {
      console.log('on mounted');
      
    })

    return { name, changeText};
  },
});
</script>

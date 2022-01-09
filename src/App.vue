<template>
  <div>
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
// import { useStore } from "vuex";
import { key } from "./store/store";

export default defineComponent({
  name: "App",
  components: {},
  // setup: () => {
  //   const store = useStore(key);

  //   store.state.count; // typed as number
  // },
});
</script>

<style></style>

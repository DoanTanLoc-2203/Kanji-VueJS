<template>
  <div class="w-[1080px] m-auto px-[20px] py-[15px] flex justify-between">
    <Option />
    <Draw />
    <List />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Option from "../components/Option.vue";
import Draw from "../components/Draw.vue";
import List from "../components/List.vue";

export default defineComponent({
  name: "DrawPage",
  components: { Option, Draw, List },
});
</script>

<style></style>

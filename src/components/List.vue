<template>
  <div class="flex flex-col items-center">
    <div
      class="w-[90px] h-[550px] border-[3px] border-[lightblue] rounded-[5px] bg-[beige] overflow-x-hidden overflow-y-scroll"
    ></div>
    <button
      class="w-[100px] h-[40px] text-[16pt] font-[400] bg-[gainsboro] rounded-[20px] mt-[10px] hover:border-[1px] hover:border-[black]"
      @click="handleBack"
    >
      戻る
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import router from "../router";

export default defineComponent({
  name: "List",
  setup() {
    const handleBack = () => {
      router.push("/");
    };

    return { handleBack };
  },
});
</script>

<style></style>

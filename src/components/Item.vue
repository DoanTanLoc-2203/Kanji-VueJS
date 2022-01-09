<template>
  <button
    v-if="text"
    class="w-[55px] h-[55px] m-[5px] text-[28pt] font-[400] text-center leading-[28pt] py-0 px-[2px] border-[2px] border-[#808080] rounded-[8px] bg-[#ffe4c4] hover:bg-[#ff7f50] hover:border-[#ed143d] hover:text-white"
    @click="handleClick"
    :class="{ selected: selected }"
  >
    {{ text }}
  </button>
  <button
    v-else
    class="w-[55px] h-[55px] m-[5px] text-[28pt] font-[400] text-center leading-[28pt] py-0 px-[2px] border-[2px] border-[#808080] rounded-[8px] none"
  ></button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Item",
  props: ["text", "id", "selected"],
  setup(props: { text: string; id: number; selected: boolean }, context) {
    const handleClick = () => {
      context.emit("clickEvent", props.id);
    };
    return { handleClick };
  },
});
</script>

<style scoped>
.none {
  background: #dcdcdc;
}
.normal {
  background: #ffe4c4;
}
.selected {
  background: #ff7f50;
  border-color: #ed143d;
  color: white;
}
</style>

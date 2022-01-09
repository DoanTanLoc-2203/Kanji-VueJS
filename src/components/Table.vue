<template>
  <div
    class="float-left w-[290px] py-[10px] pr-0 pl-[10px] ml-[20px] mt-[15px] border-[3px] border-[#4682b4] rounded-[8px]"
  >
    <Item
      v-for="item in temp"
      :text="item.text"
      :id="item.id"
      :selected="item.selected"
      :key="item.id"
      @clickEvent="updateData"
    />
  </div>
</template>

<script lang="ts">
import Item from "./Item.vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "Table",
  components: { Item },
  props: ["data"],
  setup: (
    props: {
      data: { id: number; text: string; selected: boolean }[];
    },
    context,
  ) => {
    const temp: { id: number; text: string; selected: boolean }[] = [];
    for (let i = 0; i < 12; i++) {
      if (props.data != null && props.data[i]) {
        temp.push(props.data[i]);
      } else {
        temp.push({ id: i, text: "", selected: false });
      }
    }

    const updateData = (id: number) => {
      context.emit("select-item", id);
    };

    return { temp, updateData };
  },
});
</script>

<style></style>

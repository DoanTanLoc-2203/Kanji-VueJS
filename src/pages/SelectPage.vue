<template>
  <div class="main">
    <p
      class="text-[32px] text-[#483d8b] font-bold bg-[#f0f8ff] pt-[5px] pr-[5px] pb-0 pl-[15px] border-b-[3px] border-[#b0c4de] mb-[15px]"
    >
      漢字筆順アニメーション / サンプル
    </p>
    <p>
      ●下から漢字を選んで，[実行]ボタンを押すと，アニメーション画面が開きます(複数選択可)。
    </p>
    <Table :data="data" @select-item="updateItem" />
    <Table :data="null" />
    <Table :data="null" />
    <div class="ml-[20px] text-[16pt] font-[400]">
      <button
        class="mx-[2px] my-[10px] w-[100px] h-[40px] rounded-[20px] bg-[#dcdcdc] hover:border-[2px] hover:border-[black]"
        @click="handleSelectAll"
      >
        全選択
      </button>
      <button
        class="mx-[2px] my-[10px] w-[100px] h-[40px] rounded-[20px] bg-[#dcdcdc] hover:border-[2px] hover:border-[black]"
        @click="handleClearAll"
      >
        全解除
      </button>
      <button
        class="mx-[2px] my-[10px] w-[100px] h-[40px] rounded-[20px] bg-[#708090] text-[#ffffff] hover:border-[2px] hover:border-[black]"
        @click="handleNext"
      >
        実行
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import Table from "../components/Table.vue";
import { ref } from "vue";
import router from "../router";

export default defineComponent({
  name: "SelectPage",
  components: { Table },
  setup() {
    const data = ref([
      {
        id: 0,
        text: "在",
        selected: false,
      },
      {
        id: 1,
        text: "支",
        selected: false,
      },
      {
        id: 2,
        text: "性",
        selected: false,
      },
      {
        id: 3,
        text: "幹",
        selected: false,
      },
      {
        id: 4,
        text: "枝",
        selected: false,
      },
      {
        id: 5,
        text: "仮",
        selected: false,
      },
      {
        id: 6,
        text: "基",
        selected: false,
      },
      {
        id: 7,
        text: "程",
        selected: false,
      },
      {
        id: 8,
        text: "保",
        selected: false,
      },
      {
        id: 9,
        text: "独",
        selected: false,
      },
      {
        id: 10,
        text: "豊",
        selected: false,
      },
      {
        id: 11,
        text: "述",
        selected: false,
      },
    ]);

    const updateItem = (id: number) => {
      data.value[id].selected = !data.value[id].selected;
    };

    const handleSelectAll = () => {
      data.value.forEach((item) => {
        item.selected = true;
      });
    };

    const handleClearAll = () => {
      data.value.forEach((item) => {
        item.selected = false;
      });
    };

    const selectItem = computed(() => {
      return data.value.filter((item) => item.selected === true);
    });

    const handleNext = () => {
      if (selectItem.value.length === 0) {
        alert("漢字を選んでください。");
      } else {
        router.push("/draw");
      }
    };

    return { data, updateItem, handleSelectAll, handleClearAll, handleNext };
  },
});
</script>

<style scoped>
.main {
  width: 1000px;
  height: 660px;
  border: solid 2px lightsteelblue;
  box-shadow: 2px 2px darkgrey;
  margin: auto;
  margin-top: 20px;
  padding: 20px 15px 15px 15px;
}
</style>

<template>
  <div>
    <p
      class="bg-[rgba(70,130,180,1)] text-[20px] font-bold inline text-white px-[10px] rounded-t-[5px] ml-[20px] relative bottom-[-2px]"
    >
      Player
    </p>
    <div
      class="w-[278px] pt-[15px] pr-[20px] pb-[10px] pl-[20px] border-[4px] border-[rgba(70,130,180,1)] rounded-[8px]"
    >
      <div class="flex flex-wrap w-[100%] justify-between">
        <img
          v-if="start"
          @click="handleChangeStart"
          class="w-[70px] h-[70px] hover:cursor-pointer active:bottom-[-3px] active:relative"
          src="/img/pause.png"
        />
        <img
          v-else
          @click="handleChangeStart"
          class="w-[70px] h-[70px] hover:cursor-pointer active:bottom-[-3px] active:relative"
          src="/img/play.png"
        />
        <img
          class="w-[70px] h-[70px] hover:cursor-pointer active:bottom-[-3px] active:relative"
          src="/img/koma.png"
        />
        <img
          class="w-[70px] h-[70px] hover:cursor-pointer active:bottom-[-3px] active:relative"
          src="/img/clear.png"
        />
        <p
          class="w-[70px] h-[70px] mt-[10px] text-[28px] font-bold text-[rgba(70,130,180,1)] flex justify-center items-center"
        >
          X{{ speed }}
        </p>
        <img
          class="w-[70px] h-[70px] mt-[10px] hover:cursor-pointer active:bottom-[-3px] active:relative"
          @click="handleDecrease"
          src="/img/spd1.png"
        />
        <img
          class="w-[70px] h-[70px] mt-[10px] hover:cursor-pointer active:bottom-[-3px] active:relative"
          @click="handleIncrease"
          src="/img/spd3.png"
        />
      </div>
      <div class="border-[1px] border-[darkgray] p-[5px] mt-[20px]">
        <div class="flex items-center justify-evenly my-[10px]">
          <p class="text-[20px] font-bold w-[30%]">筆 順</p>
          <button
            class="w-[55px] h-[40px] text-[32px] font-medium leading-[32px] pb-[10px] bg-[darkgray] text-white rounded-[10px] text-center hover:cursor-pointer"
            :class="{ active: option.number }"
            @click="handleChangeNumber(true)"
          >
            o
          </button>
          <button
            class="w-[55px] h-[40px] text-[32px] font-medium leading-[32px] pb-[10px] bg-[darkgray] text-white rounded-[10px] text-center hover:cursor-pointer"
            :class="{ active: !option.number }"
            @click="handleChangeNumber(false)"
          >
            x
          </button>
        </div>
        <div class="flex items-center justify-evenly my-[10px]">
          <p class="text-[20px] font-bold w-[30%]">注意点</p>
          <button
            class="w-[55px] h-[40px] text-[32px] font-medium leading-[32px] pb-[10px] bg-[darkgray] text-white rounded-[10px] text-center hover:cursor-pointer"
            :class="{ active: option.note }"
            @click="handleChangeNote(true)"
          >
            o
          </button>
          <button
            class="w-[55px] h-[40px] text-[32px] font-medium leading-[32px] pb-[10px] bg-[darkgray] text-white rounded-[10px] text-center hover:cursor-pointer"
            :class="{ active: !option.note }"
            @click="handleChangeNote(false)"
          >
            x
          </button>
        </div>
        <div class="flex items-center justify-evenly my-[10px]">
          <p class="text-[20px] font-bold w-[30%]">音 声</p>
          <button
            class="w-[55px] h-[40px] text-[32px] font-medium leading-[32px] pb-[10px] bg-[darkgray] text-white rounded-[10px] text-center hover:cursor-pointer"
            :class="{ active: option.audio }"
            @click="handleChangeAudio(true)"
          >
            o
          </button>
          <button
            class="w-[55px] h-[40px] text-[32px] font-medium leading-[32px] pb-[10px] bg-[darkgray] text-white rounded-[10px] text-center hover:cursor-pointer"
            :class="{ active: !option.audio }"
            @click="handleChangeAudio(false)"
          >
            x
          </button>
        </div>
      </div>
      <div class="border-[1px] border-[darkgray] p-[5px] mt-[20px] text-center">
        <p class="text-[20px] font-bold text-center">文字色</p>
        <div class="flex text-[18px] justify-evenly my-[10px]">
          <button
            class="border-[2px] font-bold border-[rgba(20,20,20,1)] text-[rgba(20,20,20,1)] rounded-[10px] w-[55px] text-center"
            :class="[color === `black` ? `black` : ``]"
            @click="handleChangeColor(`black`)"
          >
            黒色
          </button>
          <button
            class="border-[2px] font-bold border-[rgba(51,51,153,1)] text-[rgba(51,51,153,1)] rounded-[10px] w-[55px] text-center"
            :class="[color === `purple` ? `purple` : ``]"
            @click="handleChangeColor(`purple`)"
          >
            紺色
          </button>
          <button
            class="border-[2px] font-bold border-[rgba(255,00,51,1)] text-[rgba(255,00,51,1)] rounded-[10px] w-[55px] text-center"
            :class="[color === `red` ? `red` : ``]"
            @click="handleChangeColor(`red`)"
          >
            赤色
          </button>
        </div>
        <button
          class="border-[2px] font-bold border-[steelblue] text-[steelblue] rounded-[10px] w-[165px] m-auto mb-[10px] text-center"
          :class="[color === `multi` ? `multi` : ``]"
          @click="handleChangeColor(`multi`)"
        >
          1～4画色分け
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

interface OptionDisplay {
  number: boolean;
  note: boolean;
  audio: boolean;
}

type Color = "black" | "purple" | "red" | "multi";

export default defineComponent({
  name: "Option",
  setup: () => {
    const option = ref<OptionDisplay>({
      number: true,
      note: true,
      audio: true,
    });
    const start = ref(false);
    const color = ref<Color>("black");
    const speed = ref("0.6");

    const handleChangeStart = () => {
      start.value = !start.value;
    };

    const handleChangeNumber = (value: boolean) => {
      option.value.number = value;
    };

    const handleChangeNote = (value: boolean) => {
      option.value.note = value;
    };

    const handleChangeAudio = (value: boolean) => {
      option.value.audio = value;
    };

    const handleChangeColor = (value: Color) => {
      color.value = value;
    };
    const handleIncrease = () => {
      if (speed.value === "0.6") speed.value = "1.0";
      else if (speed.value === "1.0") speed.value = "1.5";
    };
    const handleDecrease = () => {
      if (speed.value === "1.5") speed.value = "1.0";
      else if (speed.value === "1.0") speed.value = "0.6";
    };

    return {
      option,
      start,
      color,
      speed,
      handleChangeStart,
      handleChangeNumber,
      handleChangeAudio,
      handleChangeNote,
      handleChangeColor,
      handleIncrease,
      handleDecrease,
    };
  },
});
</script>

<style scoped>
.active {
  background: #4682b4;
}
.black {
  background: rgba(20, 20, 20, 1);
  color: white;
}
.purple {
  background: rgba(51, 51, 153, 1);
  color: white;
}
.red {
  background: rgba(255, 00, 51, 1);
  color: white;
}
.multi {
  background: #4682b4;
  color: white;
}
</style>

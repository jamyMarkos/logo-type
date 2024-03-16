<template>
  <div
    class="outer py-4 mt-4 pt-3 px-3 border border-gray-300/60 rounded-xl flex items-center gap-x-6 w-full cursor-pointer hover:bg-[#84A9CB14] hover:border-gray-300/80 transition duration-300 ease-in-out"
  >
    <div
      class="bg-[#005ECD0D] inner w-12 h-12 rounded-lg flex items-center cursor-pointer justify-center"
    >
      <Icon :icon="card.icon" class="text-2xl text-blue-700 font-extrabold" />
    </div>
    <p class="font-medium inner-text whitespace-nowrap">{{ card.title }}</p>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
import { Icon } from "@iconify/vue";
const props = defineProps({
  card: {
    type: Object,
  },
});
</script>

<style lang="scss" scoped></style>

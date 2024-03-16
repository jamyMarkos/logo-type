<script setup>
import { ref, defineProps, computed, defineEmits } from "vue";
const props = defineProps({
  modelValue: {
    type: Number,
    default: 1,
  },
});

const emits = defineEmits(["update:modelValue"]);

const currentStep = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    emits("update:modelValue", value);
  },
});
</script>
<template>
  <ul class="flex">
    <li
      v-for="i in 5"
      :key="i"
      @click="currentStep = i"
      class="w-full py-3 font-medium text-sm text-center text-gray-400 cursor-pointer lg:w-min whitespace-nowrap lg:px-12 rounded-t-md"
      :class="
        i == currentStep
          ? 'text-primary-800 !font-semibold  border-b-4 border-primary-800 bg-[#005ECD1A]'
          : ''
      "
    >
      Step {{ i }}
    </li>
  </ul>
</template>

<style lang="scss" scoped></style>

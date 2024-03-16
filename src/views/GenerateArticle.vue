<script setup>
import TopNav from "../components/common/Topnav.vue";
import Stepper from "../components/UI/Stepper.vue";
import StepOne from "../components/UI/step/One.vue";
import StepTwo from "../components/UI/step/Two.vue";
import StepThree from "../components/UI/step/Three.vue";
import StepFour from "../components/UI/step/Four.vue";
import StepFive from "../components/UI/step/Five.vue";

import { ref } from "vue";
import { Icon } from "@iconify/vue";

const currentStep = ref(1);
</script>
<template>
  <div>
    <div class="flex flex-col mx-2 space-y-8 md:mx-4 lg:mx-10 font-[poppins]">
      <div class="relative mt-5 w-full block md:hidden">
        <Icon
          icon="ic:baseline-search"
          class="text-[#06041980] text-xl absolute top-2.5 left-3.5"
        />
        <input
          type="text"
          class="text-sm py-3 text-[#06041980] leading-4 border w-full outline-none pl-10 rounded-3xl px-3 focus:outline-none focus:ring-1 focus:ring-blue-300/70 bg-gray-100/70"
          placeholder="Search in tools..."
        />
        <Icon
          icon="fe:equalizer"
          class="text-gray-400 font-bold text-xl cursor-pointer absolute top-2.5 right-2"
        />
      </div>
      <h2
        class="mt-4 lg:pt-10 text-3xl font-bold uppercase text-gradient text-white bg-gradient-to-r from-[#0053CD] to-[#4D98FF]"
      >
        generate text
      </h2>

      <div>
        <Stepper v-model="currentStep" />
        <div
          class="min-h-[700px] flex flex-col justify-between rounded-b-lg bg-white shadow-sm"
          :class="currentStep != 1 ? 'rounded-t-lg' : ''"
        >
          <StepOne v-if="currentStep == 1" />
          <StepTwo v-if="currentStep == 2" />
          <StepThree v-if="currentStep == 3" />
          <StepFour v-if="currentStep == 4" />
          <StepFive v-if="currentStep == 5" />

          <div class="flex items-end justify-end px-6 py-4 gap-x-4">
            <button
              class="border-2 disabled:cursor-not-allowed px-10 py-2 font-medium rounded-3xl border-[#005ECD1A]"
              :disabled="currentStep == 1"
              @click="currentStep--"
            >
              Back
            </button>
            <button
              class="bg-[#005ECD1A] disabled:cursor-not-allowed text-primary-800 font-medium px-10 rounded-3xl py-2"
              :disabled="currentStep == 5"
              @click="currentStep++"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>

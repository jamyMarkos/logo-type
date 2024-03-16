<script setup>
import Topnav from "../components/common/Topnav.vue";
import RecentArticles from "../components/table/RecentArticles.vue";
import DashboardCards from "../components/UI/DashboardCards.vue";
import DashboardChart from "../components/chart/DashboardChart.vue";

import { ref } from "vue";
import { useRouter } from "vue-router";
import { Icon } from "@iconify/vue";

const cardData = (ref([]).value = [
  {
    title: "Generate Article",
    icon: "lucide:wand-sparkles",
  },
  {
    title: "Rewrite Article",
    icon: "lets-icons:edit-light",
  },
  {
    title: "Summary",
    icon: "system-uicons:document",
  },
  {
    title: "Bulk Generate Article",
    icon: "fluent:document-copy-16-regular",
  },
  {
    title: "Rephrase Sections",
    icon: "material-symbols-light:edit-square-outline-rounded",
  },
]);
</script>

<template>
  <div class="bg-gray-100">
    <div class="px-8 py-6 pt-6 lg:pt-12 space-y-1.5">
      <div class="relative w-full block md:hidden">
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
      <div class="flex items-center justify-start py-4">
        <h1
          class="text-3xl text-left text-gradient bg-gradient-to-r from-[#0053CD] to-[#4D98FF] font-bold"
        >
          Hello, Wilson!
        </h1>
      </div>
      <div
        class="flex flex-col lg:flex-row space-y-4 lg:space-y-2 items-center gap-2 lg:gap-6 py-4 pt-8"
      >
        <div
          class="w-full lg:w-[60%] h-fit lg:h-[270px] bg-white rounded-xl py-4 px-6 shadow-md"
        >
          <h2
            class="font-medium text-gradient bg-gradient-to-r from-[#0053CD] to-[#4D98FF]"
          >
            Suggested for You
          </h2>
          <div
            class="py-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 space-y-5 gap-x-5"
          >
            <DashboardCards
              v-for="(card, index) in cardData"
              :card="card"
              :key="index"
            />
          </div>
        </div>
        <!-- Chart Section -->
        <div
          class="w-full lg:w-[40%] h-fit lg:h-[270px] bg-white rounded-xl py-4 px-6 shadow-md"
        >
          <!-- this is where the cart goes -->
          <DashboardChart />
        </div>
      </div>
      <div>
        <RecentArticles />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>

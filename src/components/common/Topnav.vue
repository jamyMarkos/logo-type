<template>
  <header
    class="fixed w-full bg-gray-100 bg-opacity-75 backdrop-filter backdrop-blur-md z-40 top-0"
  >
    <nav
      class="flex items-center justify-between md:px-16 lg:px-24 py-3 shadow-lg"
    >
      <ul class="flex items-center gap-x-5 justify-between w-full">
        <li
          @click="toggleSidebarHandler"
          class="pl-2 flex lg:hidden cursor-pointer"
        >
          <Icon icon="icon-park-outline:hamburger-button" class="text-2xl" />
        </li>
        <li class="cursor-pointer">
          <div @click="goDashboardPage" class="cursor-pointer">
            <img src="/img/logo.svg" alt="Logo" class="h-8 w-auto" />
          </div>
        </li>
        <li class="relative w-[35%] hidden md:block">
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
        </li>
        <li
          class="relative w-10 h-10 rounded-full cursor-pointer bg-gray-200 border-none flex items-center justify-center mr-12 md:mr-8 lg:mr-0"
        >
          <Icon
            icon="lets-icons:message-light"
            class="text-2xl text-[#06041980ss] text-blue-700 font-extrabold"
          />
          <span
            class="absolute -top-[5px] -right-1.5 w-[18px] h-[18px] rounded-full text-[10px] flex items-center justify-center text-white bg-[#EB2C38]"
            >1</span
          >
        </li>
      </ul>
    </nav>
  </header>
</template>

<script setup>
import { Icon } from "@iconify/vue";
import { useRouter } from "vue-router";
import { defineEmits, ref } from "vue";

const emits = defineEmits(["toggleSideBar"]);
const router = useRouter();

const goDashboardPage = () => {
  router.push({ path: "/" });
};

const toggleSideBar = ref(false);

const toggleSidebarHandler = () => {
  emits("toggleSideBar");
};
</script>

<style lang="scss" scoped></style>

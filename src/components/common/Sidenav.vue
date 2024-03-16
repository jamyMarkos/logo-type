<script setup>
import { Icon } from "@iconify/vue";
import { reactive, defineProps } from "vue";
import { ref } from "vue";

const props = defineProps({
  maxSideBar: {
    type: Boolean,
    default: false,
  },
});

const collapseState = reactive({
  collapsed: false,
});

const toggleCollapse = () => {
  collapseState.collapsed = !collapseState.collapsed;
};

const toggleArticle = ref(false);
const toggleSocial = ref(false);
const toggleImage = ref(false);
const toggleAccount = ref(false);

const isSidebarOpen = ref(false);
const toggleSidebar = () => {
  isSidebarOpen.value = !isSidebarOpen.value;
};

const sidebarClasses = {
  "w-64 bg-gray-900 h-screen fixed top-0 left-0 z-50 transition-transform duration-300 ease-in-out transform": true,
  "-translate-x-full": !isSidebarOpen.value,
  "translate-x-0": isSidebarOpen.value,
};

const maxSideBar = ref(props.maxSideBar);
</script>

<template>
  <div
    class="bg-[#f8f8f8] h-screen font-[Poppins]"
    :class="maxSideBar ? 'w-70' : 'w-16'"
  >
    <div class="w-full bg-[#05173A] z-50 h-full flex lg:flex-col">
      <div class="flex flex-col space-y-6 pb-4 py-6 overflow-y-scroll">
        <div class="w-full flex justify-end">
          <button
            @click="maxSideBar = !maxSideBar"
            class="w-9 h-9 rounded-full bg-gray-400 py-1 px-1 items-center justify-center hidden lg:flex"
          >
            <Icon
              :icon="
                maxSideBar
                  ? 'iconamoon:arrow-left-2-bold'
                  : 'material-symbols:keyboard-arrow-right'
              "
              class="text-2xl text-white"
            />
          </button>
        </div>
        <p
          class="flex items-center justify-between px-2 gap-x-[2px] text-white cursor-pointer"
          @click="toggleArticle = !toggleArticle"
        >
          <span v-if="!maxSideBar" class="text-sm font-semibold">AT</span>
          <span v-else class="uppercase pl-4">article tools</span>
          <Icon icon="iconamoon:arrow-down-2-bold" class="text-2xl" />
        </p>
        <transition name="collapse">
          <ul
            v-if="!toggleArticle"
            class="text-white flex flex-col items-start space-y-7"
          >
            <!-- Active -->
            <li
              class="w-full h-full flex gap-x-4 px-3 bg-gray-400 py-2 border-l border-gray-500 rounded-r-3xl"
            >
              <Icon icon="lucide:wand-sparkles" class="text-xl" />
              <span v-if="maxSideBar">Generate Articles</span>
            </li>

            <li class="w-full h-full flex gap-x-4 px-3 capitalize">
              <Icon icon="majesticons:edit-pen-4-line" class="text-xl" />
              <span v-if="maxSideBar"> rewrite article</span>
            </li>
            <li class="w-full h-full flex gap-x-4 px-3 capitalize">
              <Icon icon="jam:write" class="text-xl" />
              <span v-if="maxSideBar"> rephrase article</span>
            </li>
            <li class="w-full h-full flex gap-x-4 px-3 capitalize">
              <Icon icon="lets-icons:lamp" class="text-xl" />
              <span v-if="maxSideBar">Article outline</span>
            </li>
            <li class="w-full h-full flex gap-x-4 px-3 capitalize">
              <Icon icon="system-uicons:document" class="text-xl" />
              <span v-if="maxSideBar"> summary </span>
            </li>
            <li class="w-full h-full flex gap-x-4 px-3 capitalize">
              <Icon icon="solar:copy-outline" class="text-xl" />
              <span v-if="maxSideBar"> article idea generator</span>
            </li>
            <li class="w-full h-full flex gap-x-4 px-3 capitalize">
              <Icon icon="lucide:wand-sparkles" class="text-xl" />
              <span v-if="maxSideBar"> Article Shorten</span>
            </li>
            <li class="w-full h-full flex gap-x-4 px-3 capitalize">
              <Icon
                icon="ant-design:pie-chart-outlined"
                class="text-xl font-extrabold"
              />
              <span v-if="maxSideBar"> Article Intros</span>
            </li>
          </ul>
        </transition>

        <!-- Social Media Tools -->

        <p
          class="flex items-center justify-between px-2 gap-x-[2px] text-white cursor-pointer"
          @click="toggleSocial = !toggleSocial"
        >
          <span v-if="!maxSideBar" class="text-sm font-semibold">SMT</span>
          <span v-else class="uppercase pl-4">social media tools</span>
          <Icon icon="iconamoon:arrow-down-2-bold" class="text-2xl" />
        </p>
        <transition name="collapse">
          <ul
            v-if="!toggleSocial"
            class="text-white flex flex-col items-start space-y-7"
          >
            <!-- Active -->
            <li class="w-full h-full flex gap-x-4 px-3 capitalize">
              <Icon icon="mingcute:twitter-line" class="text-xl" />
              <span v-if="maxSideBar">Twitter</span>
            </li>

            <li class="w-full h-full flex gap-x-4 px-3 capitalize">
              <Icon icon="streamline:linkedin" class="text-xl" />
              <span v-if="maxSideBar">LinkedIn</span>
            </li>
            <li class="w-full h-full flex gap-x-4 px-3 capitalize">
              <Icon icon="icon-park-outline:facebook" class="text-xl" />
              <span v-if="maxSideBar">Facebook</span>
            </li>
          </ul>
        </transition>

        <!-- Image Tools -->

        <p
          class="flex items-center justify-between px-2 gap-x-[2px] text-white cursor-pointer"
          @click="toggleImage = !toggleImage"
        >
          <span v-if="!maxSideBar" class="text-sm font-semibold">IT</span>
          <span v-else class="uppercase pl-4">image tools</span>
          <Icon icon="iconamoon:arrow-down-2-bold" class="text-2xl" />
        </p>
        <transition name="collapse">
          <ul
            v-if="!toggleImage"
            class="text-white flex flex-col items-start space-y-7"
          >
            <!-- Active -->
            <li class="w-full h-full flex gap-x-4 px-3 capitalize">
              <Icon icon="fluent:image-sparkle-24-regular" class="text-xl" />
              <span v-if="maxSideBar">image generator</span>
            </li>
          </ul>
        </transition>
        <!-- Account -->

        <p
          class="flex items-center justify-between px-2 gap-x-[2px] text-white cursor-pointer"
          @click="toggleAccount = !toggleAccount"
        >
          <span v-if="!maxSideBar" class="text-sm font-semibold">A</span>
          <span v-else class="uppercase pl-4">account</span>
          <Icon icon="iconamoon:arrow-down-2-bold" class="text-2xl" />
        </p>
        <transition name="collapse">
          <ul
            v-if="!toggleAccount"
            class="text-white flex flex-col items-start space-y-7"
          >
            <!-- Active -->
            <li class="w-full h-full flex gap-x-4 px-3 capitalize">
              <Icon icon="ep:setting" class="text-xl" />
              <span v-if="maxSideBar">settings</span>
            </li>
            <li class="w-full h-full flex gap-x-4 px-3 capitalize">
              <Icon icon="material-symbols-light:logout" class="text-xl" />
              <span v-if="maxSideBar">logout</span>
            </li>
          </ul>
        </transition>
      </div>
      <!-- sidebar open ----------------------------------------------------->
    </div>
  </div>
</template>

<style scoped></style>

<template>
  <div class="bg-gray-100 w-full">
    <!-- Static sidebar for desktop -->
    <div class="">
      <TransitionRoot as="template" :show="sidebarOpen">
        <Dialog
          as="div"
          class="relative z-50 lg:hidden"
          @close="sidebarOpen = false"
        >
          <TransitionChild
            as="template"
            enter="transition-opacity ease-linear duration-300"
            enter-from="opacity-0"
            enter-to="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leave-from="opacity-100"
            leave-to="opacity-0"
          >
            <div class="fixed inset-0 bg-gray-900/80" />
          </TransitionChild>

          <div class="fixed inset-0 flex">
            <TransitionChild
              as="template"
              enter="transition ease-in-out duration-300 transform"
              enter-from="-translate-x-full"
              enter-to="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leave-from="translate-x-0"
              leave-to="-translate-x-full"
            >
              <DialogPanel class="relative flex flex-1 w-full max-w-sm">
                <TransitionChild
                  as="template"
                  enter="ease-in-out duration-300"
                  enter-from="opacity-0"
                  enter-to="opacity-100"
                  leave="ease-in-out duration-300"
                  leave-from="opacity-100"
                  leave-to="opacity-0"
                >
                  <div
                    class="absolute top-0 right-16 flex justify-center w-16 pt-5"
                  >
                    <button
                      type="button"
                      class="-m-2.5 p-2.5"
                      @click="sidebarOpen = false"
                    >
                      <span class="sr-only">Close sidebar</span>
                      <Icon
                        icon="material-symbols:arrow-back"
                        class="text-2xl text-white"
                      />
                    </button>
                  </div>
                </TransitionChild>
                <!-- <div
                  class="flex flex-col w-full overflow-y-auto bg-white grow gap-y-5 ring-1"
                > -->
                <div class="">
                  <Sidenav :maxSideBar="sidebarOpen" />
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </Dialog>
      </TransitionRoot>

      <!-- Static sidebar for desktop -->
      <div
        class="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col"
      >
        <div class="">
          <Sidenav />
        </div>
      </div>

      <!-- <div class="lg:pl-72"> -->
      <div>
        <!-- <div> -->
        <!-- <div
          class="sticky top-0 z-40 flex items-center px-4 bg-gray-100 py-3 shadow-bottom shrink-0 gap-x-4 sm:gap-x-6 sm:px-6 lg:px-8"
        > -->
        <!-- <div> -->
        <!-- <button
            type="button"
            class="p-[7px] text-gray-700 lg:hidden"
            @click="sidebarOpen = true"
          >
            <Icon class="text-2xl" icon="pajamas:hamburger" />
          </button> -->

        <!-- <div
            class="flex self-stretch justify-between flex-1 gap-x-4 lg:gap-x-6"
          > -->
        <div class="mb-4">
          <Topnav @toggleSideBar="[(sidebarOpen = !sidebarOpen)]" />
        </div>
        <!-- </div> -->

        <main class="min-h-screen py-10 bg-primary-50/30">
          <div class="px-4 lg:pl-24">
            <slot />
          </div>
        </main>
      </div>
    </div>
  </div>
</template>

<script setup>
import Topnav from "../components/common/Topnav.vue";
import { ref } from "vue";

import {
  Dialog,
  DialogPanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  TransitionChild,
  TransitionRoot,
} from "@headlessui/vue";
import { Icon } from "@iconify/vue";
import Sidenav from "../components/common/Sidenav.vue";

const sidebarOpen = ref(true);
</script>

<style scoped></style>

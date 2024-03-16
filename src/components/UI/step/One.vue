<script setup>
import { Icon } from "@iconify/vue";
import { ref } from "vue";
import {
  Listbox,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
  Popover,
  PopoverButton,
  PopoverPanel,
} from "@headlessui/vue";

const category = [
  { id: 1, name: "Entertainment", unavailable: false },
  { id: 2, name: "Casual", unavailable: false },
  { id: 3, name: "Movie", unavailable: false },
  { id: 4, name: "Sport", unavailable: false },
  { id: 5, name: "Art", unavailable: false },
];
const selectedCategory = ref(category[0]);
const selectedTone = ref(category[0]);
</script>
<template>
  <div class="lg:w-[800px] space-y-6 px-6 py-4">
    <div class="flex flex-col gap-y-2">
      <label class="flex items-center font-medium gap-x-2">
        <span>Topic</span>
        <Icon class="text-primary-600" icon="zondicons:exclamation-outline"
      /></label>
      <input
        class="px-4 py-4 border border-gray-300 rounded-md focus:outline-none"
        placeholder="Enter your topic"
      />
    </div>
    <div class="grid md:grid-cols-2 gap-y-4 gap-x-4">
      <div class="space-y-2">
        <label class="flex items-center font-medium gap-x-2">
          <span>Select a Category</span>
          <Popover class="relative">
            <PopoverButton>
              <Icon
                class="text-primary-600"
                icon="zondicons:exclamation-outline"
              />
            </PopoverButton>

            <PopoverPanel
              class="absolute z-10 bg-white rounded-md shadow-md px-2 py-4 w-[200px]"
            >
              <p class="text-xs text-gray-600">
                You can select a category from the drop-down list
              </p>
            </PopoverPanel>
          </Popover>
        </label>
        <Listbox v-model="selectedCategory">
          <ListboxButton
            class="flex items-center justify-between w-full px-4 py-4 text-gray-600 border border-gray-300 rounded-md"
          >
            <span>{{ selectedCategory.name }}</span>
            <Icon class="text-3xl" icon="majesticons:chevron-down-line"
          /></ListboxButton>
          <ListboxOptions
            class="p-2 mt-2 space-y-2 text-gray-600 bg-white border border-gray-300 rounded-md"
          >
            <ListboxOption
              v-for="person in category"
              :key="person.id"
              :value="person"
              :disabled="person.unavailable"
              class="text-sm cursor-pointer"
            >
              {{ person.name }}
            </ListboxOption>
          </ListboxOptions>
        </Listbox>
      </div>
      <div class="space-y-2">
        <label class="flex items-center font-medium gap-x-2">
          <span>Select Tone </span>
          <Icon class="text-primary-600" icon="zondicons:exclamation-outline"
        /></label>
        <Listbox v-model="selectedTone">
          <ListboxButton
            class="flex items-center justify-between w-full px-4 py-4 text-gray-600 border border-gray-300 rounded-md"
          >
            <span>{{ selectedTone.name }}</span>
            <Icon class="text-3xl" icon="majesticons:chevron-down-line"
          /></ListboxButton>
          <ListboxOptions
            class="p-2 mt-2 space-y-2 text-gray-600 bg-white border border-gray-300 rounded-md"
          >
            <ListboxOption
              v-for="person in category"
              :key="person.id"
              :value="person"
              :disabled="person.unavailable"
              class="text-sm cursor-pointer"
            >
              {{ person.name }}
            </ListboxOption>
          </ListboxOptions>
        </Listbox>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>

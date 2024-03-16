<script setup>
import { Icon } from "@iconify/vue";
import { ref } from "vue";
import Editor from "primevue/editor";

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
  { id: 1, name: "up to 1500", unavailable: false },
  { id: 2, name: "Casual", unavailable: false },
  { id: 3, name: "Movie", unavailable: false },
  { id: 4, name: "Sport", unavailable: false },
  { id: 5, name: "Art", unavailable: false },
];
const selectedCategory = ref(category[0]);
const selectedTone = ref(category[0]);

const value = ref(
  "Lorem ipsum dolor sit amet consectetur adipiscing elit nostra, metus diam neque dui congue nulla mollis penatibus, sollicitudin senectus mi potenti molestie nibh praesent. Velit gravida lobortis non cursus praesent torquent interdum et curae dui magna ridiculus, in nisi facilisis congue nec quisque neque facilisi vivamus porta vehicula nulla, mattis aliquam erat at sed mollis cras felis lacus magnis maecenas. Integer fringilla parturient vestibulum litora euismod quam himenaeos sem id laoreet tristique ante, auctor bibendum lobortis eget sociis pharetra pulvinar inceptos scelerisque leo vitae. Eros fermentum maecenas dui fringilla sem, id nam ac iaculis integer, sagittis risus varius proin curae, imperdiet non penatibus curabitur. Inceptos fames phasellus cum eros ornare cubilia praesent eleifend litor"
);
</script>
<template>
  <div class="px-8 py-4 space-y-8">
    <div class="space-y-8 max-w-[800px]">
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
      <div class="flex flex-col gap-y-2">
        <label class="flex items-center font-medium gap-x-2">
          <span>Final Sub Topic</span>
        </label>
        <textarea
          rows="4"
          class="px-4 py-4 border border-gray-300 rounded-md focus:outline-none"
          placeholder="Enter your subtopic"
        />
      </div>
    </div>
    <div class="grid md:grid-cols-2 gap-y-4 gap-x-4 max-w-[600px]">
      <div class="space-y-2">
        <label class="flex items-center font-medium gap-x-2">
          <span>Number of Articles</span>
          <Icon class="text-primary-600" icon="zondicons:exclamation-outline" />
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
          <span>Word Count</span>
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
    <button
      class="px-16 py-3 uppercase rounded-[30px] text-white bg-gradient-to-r from-[#0053CD] to-[#4D98FF]"
    >
      generate article
    </button>
    <div
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-6 gap-x-4 lg:gap-x-6"
    >
      <Editor
        v-model="value"
        editorStyle="height: 250px; border-radius: 0px 0px 10px 10px"
      />
      <Editor
        v-model="value"
        editorStyle="height: 250px ; border-radius: 0px 0px 10px 10px"
      />
      <Editor
        v-model="value"
        editorStyle="height: 250px ; border-radius: 0px 0px 10px 10px"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped></style>

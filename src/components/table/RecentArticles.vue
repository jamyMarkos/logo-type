<template>
  <div
    class="px-4 sm:px-6 lg:px-8 bg-white rounded-xl shadow-md pt-4 py-2 font-[poppins]"
  >
    <div class="sm:flex sm:items-center">
      <div class="sm:flex-auto">
        <h1
          class="text-base leading-6 text-gradient bg-gradient-to-r from-[#0053CD] to-[#4D98FF] font-semibold"
        >
          Recent Articles
        </h1>
      </div>
    </div>
    <div class="mt-8 flow-root">
      <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <!-- Desktop Table -->
        <div
          class="hidden lg:inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8"
        >
          <table class="mytable min-w-full divide-y divide-gray-300">
            <thead>
              <tr class="">
                <th
                  v-for="(header, index) in headers"
                  :key="index"
                  scope="col"
                  class="py-3 pl-4 pr-3 text-left text-xs font-normal capitalize tracking-wide text-gray-500 sm:pl-0"
                >
                  <div class="flex items-center gap-x-2">
                    <p class="text-sm">{{ header.name }}</p>
                    <Icon icon="uil:sort" class="text-sm cursor-pointer" />
                  </div>
                </th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-200 bg-white">
              <tr
                v-for="(data, index) in tableData"
                :key="index"
                class="border-none cursor-pointer"
              >
                <td class="whitespace-nowrap py-4 pl-4 pr-3 sm:pl-0">
                  <div class="flex items-center gap-x-2 text-[#060419CC]">
                    <Icon
                      icon="iconamoon:file-document-thin"
                      class="text-xl font-bold text-[#060419CC]"
                    />
                    <p class="text-sm text-[#060419CC]">
                      {{ data.name }}
                    </p>
                  </div>
                </td>
                <td
                  class="whitespace-nowrap px-3 py-4 text-sm text-[#060419CC]"
                >
                  {{ data.createdOn }}
                </td>
                <td
                  class="whitespace-nowrap px-3 py-4 text-sm text-[#060419CC]"
                >
                  {{ data.lastModified }}
                </td>
                <td
                  class="whitespace-nowrap text-left px-3 py-4 text-sm text-[#060419CC]"
                >
                  {{ data.authorName }}
                </td>
                <td
                  class="whitespace-nowrap py-4 px-3 text-left text-sm text-[#060419CC] sm:pr-0"
                >
                  {{ data.reviewerName }}
                </td>
                <td
                  class="relative text-left whitespace-nowrap py-4 px-3 text-sm font-medium sm:pr-0"
                >
                  <button
                    :class="`px-3 py-2 text-sm font-light text-center rounded-2xl ${
                      data.status === 'Reviewed'
                        ? 'text-[#599FFF] bg-[#5598E71A]'
                        : data.status === 'Completed'
                        ? 'text-[#00B287] bg-[#EEF8F6]'
                        : 'text-[#FF8F69] bg-[#FFF5F4]'
                    }`"
                  >
                    {{ data.status }}
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <template>
          <div class=""></div>
        </template>
      </div>
      <!-- Mobile Table card -->
      <div class="">
        <div
          class="w-full flex items-center py-5 justify-between text-[#060419] lg:hidden"
        >
          <!-- Pagination -->
          <p class="text-[#06041966]">5 of 20 results</p>
          <button class="flex items-center gap-x-2">
            <span>Sort by</span>
            <Icon
              icon="iconamoon:arrow-down-2-light"
              class="text-2xl cursor-pointer"
            />
          </button>
        </div>
        <div class="grid grid-cols-1 gap-4 lg:hidden md:grid-cols-2">
          <div
            v-for="(data, index) in tableData"
            :key="index"
            :to="{ path: '/article/' + index }"
          >
            <div
              class="relative flex flex-col rounded-lg pb-3 mb-4 bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] sm:shrink-0 sm:grow sm:basis-0 sm:rounded"
            >
              <div class="p-6 px-4 mt-2">
                <div
                  class="my-2 text-base text-neutral-600 gap-y-3 flex flex-col space-y-2"
                >
                  <div class="flex items-start justify-between w-full gap-x-6">
                    <p class="font-medium text-[#06041966]">Name</p>
                    <p class="font-medium whitespace-normal w-[60%] text-left">
                      {{ data.name }}
                    </p>
                  </div>
                  <div class="flex items-start justify-between w-full gap-x-6">
                    <p class="font-medium text-[#06041966]">Created on</p>
                    <p class="font-medium whitespace-normal w-[60%] text-left">
                      {{ data.createdOn }}
                    </p>
                  </div>
                  <div class="flex items-start justify-between w-full gap-x-6">
                    <p class="font-medium text-[#06041966]">Last Modified</p>
                    <p class="font-medium whitespace-normal w-[60%] text-left">
                      {{ data.lastModified }}
                    </p>
                  </div>
                  <div class="flex items-start justify-between w-full gap-x-6">
                    <p class="font-medium text-[#06041966]">Author Name</p>
                    <p class="font-medium whitespace-normal w-[60%] text-left">
                      {{ data.authorName }}
                    </p>
                  </div>
                  <div class="flex items-start justify-between w-full gap-x-6">
                    <p class="font-medium text-[#06041966]">Reviewer Name</p>
                    <p class="font-medium whitespace-normal w-[60%] text-left">
                      {{ data.reviewerName }}
                    </p>
                  </div>
                  <div class="flex items-start justify-between w-full gap-x-6">
                    <p class="font-medium text-[#06041966]">Status</p>
                    <div class="relative whitespace-nowrap w-[60%] text-left">
                      <button
                        :class="`px-3 py-2 text-sm font-light text-center rounded-2xl ${
                          data.status === 'Reviewed'
                            ? 'text-[#599FFF] bg-[#5598E71A]'
                            : data.status === 'Completed'
                            ? 'text-[#00B287] bg-[#EEF8F6]'
                            : 'text-[#FF8F69] bg-[#FFF5F4]'
                        }`"
                      >
                        {{ data.status }}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="flex items-center justify-end gap-x-3 py-5 lg:hidden">
          <button class="rounded-3xl px-5 py-1.5 border hover:border-blue-600">
            <Icon
              icon="cil:arrow-right"
              class="text-2xl cursor-pointer hover:text-blue-700"
            />
          </button>
          <button class="rounded-3xl px-5 py-1.5 border border-blue-600">
            <Icon
              icon="cil:arrow-left"
              class="text-2xl cursor-pointer text-blue-700"
            />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { Icon } from "@iconify/vue";

const headers = (ref([]).value = [
  {
    name: "Name",
    icon: "uil:sort",
  },
  {
    name: "Created on",
    icon: "uil:sort",
  },
  {
    name: "Last Modified",
    icon: "uil:sort",
  },
  {
    name: "Author Name",
    icon: "uil:sort",
  },
  {
    name: "Reviewer Name",
    icon: "uil:sort",
  },
  {
    name: "Status",
    icon: "uil:sort",
  },
]);

const tableData = (ref([]).value = [
  {
    name: "The Transformation of Modern Youth: Impact of Technology on Identity",
    createdOn: "01/15/24",
    lastModified: "2 days ago",
    authorName: "October Trevors",
    reviewerName: "Adam Randols",
    status: "Reviewed",
  },
  {
    name: "The Transformation of Modern Youth: Impact of Technology on Identity",
    createdOn: "01/15/24",
    lastModified: "2 days ago",
    authorName: "October Trevors",
    reviewerName: "Adam Randols",
    status: "Completed",
  },
  {
    name: "The Transformation of Modern Youth: Impact of Technology on Identity",
    createdOn: "01/15/24",
    lastModified: "2 days ago",
    authorName: "October Trevors",
    reviewerName: "Adam Randols",
    status: "Under Review",
  },
  {
    name: "The Transformation of Modern Youth: Impact of Technology on Identity",
    createdOn: "01/15/24",
    lastModified: "2 days ago",
    authorName: "October Trevors",
    reviewerName: "Adam Randols",
    status: "Under Review",
  },
  {
    name: "The Transformation of Modern Youth: Impact of Technology on Identity",
    createdOn: "01/15/24",
    lastModified: "2 days ago",
    authorName: "October Trevors",
    reviewerName: "Adam Randols",
    status: "Completed",
  },
  {
    name: "The Transformation of Modern Youth: Impact of Technology on Identity",
    createdOn: "01/15/24",
    lastModified: "2 days ago",
    authorName: "October Trevors",
    reviewerName: "Adam Randols",
    status: "Reviewed",
  },
]);
</script>

<script setup></script>

<style lang="scss" scoped></style>

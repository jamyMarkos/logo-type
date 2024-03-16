<template>
  <div id="app">
    <div class="flex items-center justify-between space-x-3 w-full pb-2">
      <h2
        class="whitespace-nowrap text-gradient bg-gradient-to-r from-[#0053CD] to-[#4D98FF]"
      >
        Completed Artcles
      </h2>
      <div class="flex items-center gap-x-4">
        <button class="flex items-center gap-x-5">
          <span class="w-3 h-3 rounded-full bg-blue-500"></span>
          <p>Pro</p>
        </button>
        <button class="flex items-center gap-x-2">
          <span class="w-3 h-3 rounded-full bg-blue-200"></span>
          <p>Enterprise</p>
        </button>
      </div>
      <button
        class="flex items-center justify-center text-gray-600 gap-x-2 bg-gray-300 rounded-3xl py-1.5 px-3 text-sm"
      >
        <p class="text-xs font-medium">Month</p>
        <Icon icon="carbon:chevron-down" class="text-xl" />
      </button>
    </div>
    <VueApexCharts
      type="bar"
      height="200"
      :options="chartOptions"
      :series="series"
    ></VueApexCharts>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { Icon } from "@iconify/vue";
import VueApexCharts from "vue3-apexcharts";

const series = ref([
  {
    name: "Articles completed",
    data: [6, 12, 24, 30, 35, 9],
  },
]);

const chartOptions = ref({
  chart: {
    yaxis: {
      categories: ["0", "10", "20", "30", "40"],
      axisBorder: {
        show: true,
      },
      gridLines: {
        show: true,
        borderDashArray: [5, 5], // Set the dash array for dashed lines
        strokeDashArray: 2,
        color: "#e0e0e0", // Adjust the color of the grid lines if needed
      },
      axisTicks: {
        show: true,
      },
      labels: {
        show: true,
        formatter: function (val) {
          return val;
        },
      },
    },
    type: "bar",
    height: 350,
  },
  plotOptions: {
    bar: {
      columnWidth: "16%",
      borderRadius: 4,
      dataLabels: {
        position: "top",
      },
    },
  },
  dataLabels: {
    enabled: false,
    formatter: function (val) {
      return val;
    },
    offsetY: -20,
    style: {
      fontSize: "12px",
      colors: ["#304758"],
    },
  },
  xaxis: {
    categories: [
      "1-10 Aug",
      "11-20 Aug",
      "21-31 Aug",
      "1-10 Sep",
      "11-20 Sep",
      "21-31 Sep",
    ],
    position: "bottom",
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
    crosshairs: {
      fill: {
        type: "gradient",
        gradient: {
          colorFrom: "#D8E3F0",
          colorTo: "#BED1E6",
          stops: [0, 100],
          opacityFrom: 0.4,
          opacityTo: 0.5,
        },
      },
    },
    tooltip: {
      enabled: true,
    },
  },
  yaxis: {
    categories: ["0", "10", "20", "30", "40"],
    min: 0,
    max: 40,
    axisBorder: {
      show: true,
    },
    gridLines: {
      show: true,
      borderDashArray: [5, 5], // Set the dash array for dashed lines
      strokeDashArray: 2,
      color: "#e0e0e0", // Adjust the color of the grid lines if needed
    },
    axisTicks: {
      show: true,
    },
    labels: {
      show: true,
      formatter: function (val) {
        return val;
      },
    },
  },
  title: {
    text: "Chart for Articles completed",
    floating: true,
    offsetY: 330,
    align: "center",
    style: {
      color: "#444",
    },
  },
});
</script>

<style></style>

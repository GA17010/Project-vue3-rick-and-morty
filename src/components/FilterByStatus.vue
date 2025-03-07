<script setup lang="ts">
/**
 * FilterByStatus.vue
 *
 * Component for filtering characters by their status (All, Alive, Dead, Unknown).
 *
 * @emits {filterByStatus} Fired when the user selects a status to filter by.
 */

import { useCharactersStore } from "@/stores/CharactersStore";
import { storeToRefs } from "pinia";

/**
 * List of status options for filtering.
 * @type {{ name: string, value: string }[]}
 */
const status = [
  { name: "All", value: "" },
  { name: "Alive", value: "Alive" },
  { name: "Dead", value: "Dead" },
  { name: "Unknown", value: "unknown" },
];

const store = useCharactersStore();
const { filterState } = storeToRefs(store);

/**
 * Filters characters by the given status.
 *
 * @param {string} state - The status to filter by.
 */
const filter = (state: string) => store.filterByStatus(state);
</script>

<template>
  <div
    class="max-w-96 grid grid-cols-2 sm:grid-cols-4 sm:gap-2 mx-auto px-4 sm:py-0.5 rounded-lg bg-white dark:bg-gray-600 dark:text-white"
  >
    <div
      v-for="item in status"
      :key="item.value"
      @click="() => filter(item.value)"
      class="py-4 px-2 cursor-pointer text-center hover:text-orange-400 transition-colors font-medium item-status-all item"
      :class="item.value === filterState ? 'text-orange-400 active' : ''"
    >
      {{ item.name }}
    </div>
  </div>
</template>

<style scoped></style>

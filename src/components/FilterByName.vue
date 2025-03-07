<script setup lang="ts">
/**
 * FilterByName.vue
 *
 * Component for filtering characters by name.
 *
 * @emits {filter} Fired when the user types in the input to filter characters by name.
 */
import { useCharactersStore } from "@/stores/CharactersStore";
import { ref } from "vue";

const store = useCharactersStore();
const name = ref("");

/**
 * Filters characters by the input name.
 */
const filter = () => store.filterByName(name.value);
</script>

<template>
  <div class="max-w-[27.2rem] mx-auto my-4 sm:px-4 lg:px-6">
    <div class="bg-white rounded-lg dark:bg-gray-700 dark:text-white">
      <input
        v-model="name"
        type="text"
        placeholder="Search by name"
        @keyup="filter()"
        class="h-14 px-2 w-full border-none rounded-lg"
      />
    </div>
  </div>
</template>

<style scoped></style>

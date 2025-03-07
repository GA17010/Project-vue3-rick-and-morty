<script setup lang="ts">
import FilterByName from "@/components/FilterByName.vue";
import FilterByStatus from "@/components/FilterByStatus.vue";
import ListCharacters from "@/components/ListCharacters.vue";
</script>

<template>
  <div class="w-full h-full min-h-dvh bg-gray-100 dark:bg-gray-800">
    <div class="max-w-10/12 mx-auto pt-11 pb-12 sm:px-6 lg:px-8">
      <p class="p-4 pb-6 text-center text-5xl font-bold text-orange-400">
        Rick and Morty
      </p>
      <FilterByStatus />
      <FilterByName />
      <ListCharacters />
    </div>
  </div>
</template>

<style scoped></style>

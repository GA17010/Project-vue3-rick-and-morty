<script setup lang="ts">
/**
 * ListCharacters.vue
 *
 * Component for displaying a list of characters with pagination.
 *
 * @component CardCharacter - Component to display individual character details.
 * @component Pagination - Component for navigating pages.
 *
 * @emits {page-changed} Fired when the user changes the page.
 */

import CardCharacter from "@/components/CardCharacter.vue";
import Pagination from "@/components/FooterPagination.vue";
import { useCharactersStore } from "@/stores/CharactersStore";
import { storeToRefs } from "pinia";
import { onMounted, ref } from "vue";

const characterStore = useCharactersStore();
const { charactersFilter, filterState, totalPages } = storeToRefs(characterStore);
const { getCharacters } = characterStore;
const currentPage = ref(1);

/**
 * Handles the page change event.
 *
 * @param {number} page - The page number to navigate to.
 */
const handlePageChange = (page: number) => {
  filterState.value = "";
  currentPage.value = page;
  getCharacters(page);
};

onMounted(() => {
  getCharacters(currentPage.value);
});
</script>

<template>
  <section>
    <!-- Characters List -->
    <div
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 my-12 characters"
      v-if="charactersFilter.length"
    >
      <div
        v-for="character in charactersFilter"
        :key="character.id"
        class="max-w-[280px] min-w-[240px] mx-auto characters__item"
      >
        <CardCharacter :character="character" />
      </div>
    </div>

    <!-- Loading State -->
    <div
      v-else
      id="characters__loading"
      class="flex justify-center items-center h-28"
    >
      <p class="font-bold text-2xl">Loading...</p>
    </div>
  </section>

  <!-- Pagination Component -->
  <Pagination
    :totalPage="totalPages"
    :currentPage="currentPage"
    @page-changed="handlePageChange"
  />
</template>

<style scoped></style>

<template>
  <section>
    <!-- Characters Section -->
    <div class="characters" v-if="charactersFilter.length">
      <div
        class="characters__item"
        v-for="character in charactersFilter"
        :key="character.id"
      >
        <!-- Card Character Component -->
        <CardCharacter :character="character" />
      </div>
    </div>
    <!-- Loading -->
    <div v-else class="characters__loading">
      <p>Loading...</p>
    </div>
  </section>
  <!-- Pagination Component -->
  <Pagination
    :totalPage="totalPages"
    :currentPage="currentPage"
    @page-changed="handlePageChange"
  />
</template>

<script>
import CardCharacter from "@components/CardCharacter.vue";
import Pagination from "@components/Pagination.vue";
import { useCharactersStore } from "@pinia/CharactersStore";
import { storeToRefs } from "pinia";
import { onMounted, ref } from "vue";
export default {
  components: {
    CardCharacter,
    Pagination,
  },
  setup() {
    const characterStore = useCharactersStore();
    const { charactersFilter, filterState, totalPages } =
      storeToRefs(characterStore);
    const { getCharacters } = characterStore;
    const currentPage = ref(1);

    // Handle page change
    const handlePageChange = (page) => {
      filterState.value = "";
      currentPage.value = page;
      getCharacters(page);
    };

    onMounted(() => {
      getCharacters(currentPage.value);
    });

    return {
      charactersFilter,
      totalPages,
      currentPage,
      handlePageChange,
    };
  },
};
</script>

<style scoped>
.characters {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 2rem;
  margin: 3rem 0;
}

.characters__loading {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
}

.characters__loading p {
  font-size: 1.5rem;
  font-weight: bold;
}
</style>

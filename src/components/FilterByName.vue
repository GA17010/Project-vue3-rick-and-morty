<template>
  <div class="search">
    <input
      v-model="name"
      type="text"
      placeholder="Search by name"
      @keyup="filter()"
    />
  </div>
</template>

<script>
import { useCharactersStore } from "@pinia/CharactersStore";
import { ref } from "vue";

export default {
  setup() {
    const store = useCharactersStore();
    const { filterByName } = store;
    const name = ref("");
    const filter = () => {
      filterByName(name.value);
    };

    return {
      filter,
      name,
    };
  },
};
</script>

<style scoped>
.search {
  max-width: 400px;
  margin: 1rem auto;
}

input {
  height: 53px;
  width: 100%;
  border: none;
  border-radius: 10px;
  padding: 0 0.5rem;
  font-size: 1rem;
  background-color: var(--background-card);
  color: var(--text-white);
}
</style>

<template>
  <div class="container">
    <h1>Rick and Morty</h1>
    <FilterByStatus />
    <FilterByName />
    <ListCharacters />
  </div>
</template>

<script>
import FilterByName from "@/components/FilterByName.vue";
import FilterByStatus from "@/components/FilterByStatus.vue";
import ListCharacters from "@/components/ListCharacters.vue";
export default {
  name: "App",
  components: {
    ListCharacters,
    FilterByStatus,
    FilterByName,
  },
};
</script>

<style scoped>
h1 {
  text-align: center;
  margin-bottom: 1rem;
  color: var(--text-orange);
  font-size: 3rem;
  font-weight: 700;
}

.container {
  width: 980px;
  max-width: 90%;
  margin: 1rem auto;
}
</style>

<template>
  <div class="filter">
    <div
      v-for="item in status"
      :key="item.value"
      @click="() => filter(item.value)"
      :class="{ active: item.value === filterState, item: true }"
    >
      {{ item.name }}
    </div>
  </div>
</template>

<script>
import { useCharactersStore } from "@pinia/CharactersStore";
import { storeToRefs } from "pinia";

export default {
  setup() {
    const status = [
      { name: "All", value: "" },
      { name: "Alive", value: "Alive" },
      { name: "Dead", value: "Dead" },
      { name: "Unknown", value: "unknown" },
    ];

    const store = useCharactersStore();
    const { filterState } = storeToRefs(store);
    const { filterByStatus } = store;

    const filter = (status) => {
      filterByStatus(status);
    };

    return {
      status,
      filter,
      filterState,
    };
  },
};
</script>

<style scoped>
.filter {
  max-width: 400px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  border-radius: 10px;
  overflow: hidden;
}

.item {
  padding: 1rem 0.5rem;
  background-color: var(--background-card);
  text-align: center;
  cursor: pointer;
}

.item:hover {
  color: var(--text-orange);
}

.active {
  color: var(--text-orange);
}
</style>

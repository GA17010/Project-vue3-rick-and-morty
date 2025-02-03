<template>
  <!-- Character card container -->
  <div class="character">
    <!-- Character image -->
    <img
      :src="character.image"
      :alt="character.name"
      class="character__image"
    />
    <!-- Character information section -->
    <div class="character__info">
      <h3>{{ character.name }}</h3>
      <!-- Status indicator with dynamic classes -->
      <div class="status">
        <span
          :class="
            character.status === 'Alive'
              ? 'status__alive'
              : character.status === 'Dead'
              ? 'status__dead'
              : 'status__unknown'
          "
        >
        </span>
        <span>{{ character.status }} - {{ character.species }} </span>
      </div>
      <!-- Origin information -->
      <div class="origin">
        <span>Origin: </span>
        <span>{{ character.origin.name }}</span>
      </div>
      <!-- Location information -->
      <div class="location">
        <span>Location: </span>
        <span>{{ character.location.name }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["character"],
};
</script>

<style scoped>
.character {
  background-color: var(--background-card);
  border-radius: 20px;
  box-shadow: 0 0 10px 1px var(--background-body);
  overflow: hidden;
  cursor: pointer;
  transition: transform 200ms ease-in-out;
  height: 100%;
}

.character:hover {
  transform: scale(1.05);
}

.character:hover h3 {
  color: var(--text-orange);
}

.character:hover span {
  color: var(--text-gray);
}

.character h3 {
  margin-bottom: 0.5rem;
}

.character__image {
  width: 100%;
}

.character__info {
  padding: 1rem;
}

.character__info .status {
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
}

.character__info .status span {
  color: var(--text-gray);
}

.character__info .status span:first-child {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin-right: 0.5rem;
}

.character__info .status .status__alive {
  background-color: var(--text-green);
}

.character__info .status .status__dead {
  background-color: var(--text-red);
}

.character__info .status .status__unknown {
  background-color: var(--text-white);
}

.origin,
.location {
  margin-bottom: 0.5rem;
  text-align: left;
}
</style>

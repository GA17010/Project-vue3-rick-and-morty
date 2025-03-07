<script setup lang="ts">
/**
 * CardCharacter.vue
 *
 * Component for displaying a character card with image and details.
 *
 * @prop {Character} character - The character data to display.
 */

interface Origin {
  name: string;
  url: string;
}

interface Location {
  name: string;
  url: string;
}

interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: Origin;
  location: Location;
  image: string;
  episode: string[];
  url: string;
  created: string;
}

defineProps<{ character: Character }>();
</script>

<template>
  <!-- Character card container -->
  <div
    class="h-full border-none rounded-2xl overflow-hidden cursor-pointer transition-transform ease-in-out delay-50 hover:scale-105 bg-white dark:bg-gray-700 dark:text-white group"
  >
    <!-- Character image -->
    <img
      :src="character.image"
      :alt="character.name"
      id="character__image"
      class="w-full"
      loading="lazy"
    />
    <!-- Character information section -->
    <div id="character__info" class="p-4 flex flex-col text-center mb-2">
      <span class="mb-4 text-lg font-semibold group-hover:text-orange-400">{{
        character.name
      }}</span>
      <!-- Status indicator with dynamic classes -->
      <div id="status" class="flex justify-start items-center mb-2">
        <span
          class="w-3 h-3 rounded-full mr-2"
          :class="
            character.status === 'Alive'
              ? 'bg-green-600'
              : character.status === 'Dead'
                ? 'bg-red-600'
                : 'bg-black dark:bg-white'
          "
        >
        </span>
        <span class="text-gray-500 dark:text-gray-400"
          >{{ character.status }} - {{ character.species }}
        </span>
      </div>
      <!-- Origin information -->
      <div
        id="origin"
        class="group-hover:text-gray-500 dark:group-hover:text-gray-400 mb-2 text-left"
      >
        <span>Origin: </span>
        <span>{{ character.origin.name }}</span>
      </div>
      <!-- Location information -->
      <div
        id="location"
        class="group-hover:text-gray-500 dark:group-hover:text-gray-400 mb-2 text-left"
      >
        <span>Location: </span>
        <span>{{ character.location.name }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped></style>

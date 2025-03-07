<script setup lang="ts">
/**
 * FooterPagination.vue
 *
 * Component for navigating pages with previous, next, and direct selection buttons.
 *
 * @prop {number} totalPage - Total number of pages.
 * @prop {number} currentPage - Current active page.
 *
 * @emits {page-changed} Fired when the user changes the page.
 */

import { computed } from "vue";

const { totalPage, currentPage } = defineProps<{
  totalPage: number;
  currentPage: number;
}>();
const emit = defineEmits<{
  (event: "page-changed", page: number): void;
}>();

/**
 * Calculates the visible pages in the pagination according to the current page.
 * - If there are less than 7 pages, it shows all of them.
 * - If there are more, uses "..." to indicate jumps.
 *
 * @returns {(number | string)[]} List of visible pages.
 */
const visiblePages = computed(() => {
  const pages: (number | string)[] = [];
  if (totalPage <= 7) {
    for (let i = 1; i <= totalPage; i++) {
      pages.push(i);
    }
  } else {
    if (currentPage <= 4) {
      pages.push(1, 2, 3, 4, 5, "...", totalPage);
    } else if (currentPage >= totalPage - 3) {
      pages.push(
        1,
        "...",
        totalPage - 4,
        totalPage - 3,
        totalPage - 2,
        totalPage - 1,
        totalPage
      );
    } else {
      pages.push(
        1,
        "...",
        currentPage - 1,
        currentPage,
        currentPage + 1,
        "...",
        totalPage
      );
    }
  }
  return pages;
});

/**
 * Changes the current page if it is valid and not a separator ("...").
 *
 * @param {number | string} page - Page to navigate to.
 */
const changePage = (page: number | string) => {
  if (
    page !== "..." &&
    typeof page === "number" &&
    page > 0 &&
    page <= totalPage
  ) {
    emit("page-changed", page);
    scrollToTop();
  }
};

/**
 *  Scrolls to the top of the page smoothly.
 */
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
</script>

<template>
  <div class="flex justify-center items-center mt-8">
    <nav
      id="pagination"
      aria-label="Pagination"
      class="inline-flex overflow-auto rounded-lg shadow-sm bg-transparent text-sm font-semibold dark:text-white h-9 sm:h-11"
    >
      <!-- Button to navigate to the previous page -->
      <button
        id="pagination-prev"
        class="-mr-[1px] inline-flex items-center justify-center px-1 sm:px-4 border border-gray-300 rounded-l-lg bg-transparent hover:bg-white cursor-pointer dark:hover:bg-gray-700"
        :disabled="currentPage === 1"
        @click.prevent="changePage(currentPage - 1)"
      >
        <span class="">Previous</span>
      </button>

      <!-- List of visible pages -->
      <button
        v-for="page in visiblePages"
        :key="page"
        :id="`pagination-item-${page}`"
        class="-mr-[1px] py-1 px-2.5 sm:py-2 sm:px-4 inline-flex items-center justify-center cursor-pointer border border-gray-300 hover:bg-white focus:z-20 focus:outline-offset-0 dark:hover:bg-gray-700 pagination-item"
        :class="
          page === currentPage
            ? '!bg-[#4f46e5] text-white active'
            : 'bg-transparent'
        "
        @click.prevent="changePage(page)"
      >
        {{ page }}
      </button>

      <!-- Button to navigate to the next page -->
      <button
        id="pagination-next"
        class="inline-flex items-center justify-center px-1.5 sm:px-4 cursor-pointer border border-gray-300 rounded-r-lg bg-transparent hover:bg-white dark:hover:bg-gray-700"
        :disabled="currentPage === totalPage"
        @click.prevent="changePage(currentPage + 1)"
      >
        <span class="">Next</span>
      </button>
    </nav>
  </div>
</template>

<style scoped></style>

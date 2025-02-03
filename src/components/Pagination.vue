<template>
  <div>
    <nav class="pagination" aria-label="Pagination">
      <a
        href=""
        class="pagination-prev"
        @click.prevent="changePage(currentPage - 1)"
      >
        <span class="sr-only">Previous</span>
      </a>
      <a
        v-for="page in visiblePages"
        :key="page"
        href="#"
        class="pagination-item"
        :class="{ active: page === currentPage }"
        @click.prevent="changePage(page)"
      >
        {{ page }}
      </a>
      <a
        href=""
        class="pagination-next"
        @click.prevent="changePage(currentPage + 1)"
      >
        <span class="sr-only">Next</span>
      </a>
    </nav>
  </div>
</template>

<script>
export default {
  props: {
    totalPage: {
      type: Number,
      required: true,
    },
    currentPage: {
      type: Number,
      required: true,
    },
  },
  computed: {
    visiblePages() {
      const pages = [];
      if (this.totalPage <= 7) {
        for (let i = 1; i <= this.totalPage; i++) {
          pages.push(i);
        }
      } else {
        if (this.currentPage <= 4) {
          pages.push(1, 2, 3, 4, 5, "...", this.totalPage);
        } else if (this.currentPage >= this.totalPage - 3) {
          pages.push(
            1,
            "...",
            this.totalPage - 4,
            this.totalPage - 3,
            this.totalPage - 2,
            this.totalPage - 1,
            this.totalPage
          );
        } else {
          pages.push(
            1,
            "...",
            this.currentPage - 1,
            this.currentPage,
            this.currentPage + 1,
            "...",
            this.totalPage
          );
        }
      }
      return pages;
    },
  },
  methods: {
    changePage(page) {
      if (page !== "..." && page > 0 && page <= this.totalPage) {
        this.$emit("page-changed", page);
        this.scrollToTop();
      }
    },
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
  },
};
</script>

<style scoped>
.pagination {
  display: inline-flex;
  gap: -1px;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.1);
}

.pagination a {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
}

.pagination-prev,
.pagination-next {
  padding: 0.5rem;
  color: var(--text-white);
  /* text-gray-400 */
  border: 1px solid #d1d5db;
  /* ring-gray-300 */
}

.pagination-prev {
  border-top-left-radius: 0.375rem;
  /* rounded-l-md */
  border-bottom-left-radius: 0.375rem;
  /* rounded-l-md */
}

.pagination-next {
  border-top-right-radius: 0.375rem;
  /* rounded-r-md */
  border-bottom-right-radius: 0.375rem;
  /* rounded-r-md */
}

.pagination-prev:hover,
.pagination-next:hover {
  background-color: var(--background-card);
  /* hover:bg-gray-50 */
}

.pagination-prev:focus,
.pagination-next:focus {
  z-index: 20;
  outline: none;
}

.pagination-item {
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
  /* text-sm */
  font-weight: 600;
  /* font-semibold */
  color: var(--text-white);
  /* text-gray-900 */
  border: 1px solid #d1d5db;
  /* ring-gray-300 */
  /* border-radius: 0.375rem; */
}

.pagination-item:hover {
  background-color: var(--background-card);
  /* hover:bg-gray-50 */
}

.pagination-item:focus {
  z-index: 20;
  outline-offset: 0;
}

.pagination-item.active {
  background-color: #4f46e5;
  /* bg-indigo-600 */
  color: white;
}

@media screen and (max-width: 560px) {
  .pagination-prev,
  .pagination-next {
    padding: 0.4rem 0.5rem;
  }

  .pagination-item {
    padding: 0.5rem 0.75rem;
  }
}

@media screen and (max-width: 510px) {
  .pagination-prev,
  .pagination-next {
    padding: 0.3rem 0.3rem;
  }

  .pagination-item {
    padding: 0.4rem 0.5rem;
  }
}

@media screen and (max-width: 450px) {
  .pagination-prev,
  .pagination-next {
    padding: 0.2rem 0.3rem;
  }

  .pagination-item {
    padding: 0.3rem 0.4rem;
  }
}

@media screen and (max-width: 400px) {
  .pagination-prev,
  .pagination-next {
    padding: 0.2rem 0.2rem;
  }

  .pagination-item {
    padding: 0.3rem 0.3rem;
  }
}
</style>

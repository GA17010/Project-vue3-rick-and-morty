import { defineStore } from "pinia";

export const useCharactersStore = defineStore("charactersStore", {
  state: () => ({
    characters: [],
    charactersFilter: [],
    filterState: "",
    totalPages: 0,
  }),
  getters: {},
  actions: {
    // This is the original code that uses the GraphQL API
    // async getCharacters(page) {
    //   const query = `
    //     query {
    //       characters(page: ${page}) {
    //         info {
    //           count
    //           pages
    //         }
    //         results {
    //           name
    //           status
    //           species
    //           image
    //           location {
    //             name
    //           }
    //           origin {
    //             name
    //           }
    //         }
    //       }
    //     }
    //   `;
    //   const response = await fetch("https://rickandmortyapi.com/graphql", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({ query }),
    //   });
    //   const data = await response.json();
    //   this.infoApi = data.data.characters.info;
    //   this.characters = data.data.characters.results;
    //   this.charactersFilter = data.data.characters.results;
    // },

    async getCharacters(page) {
      try {
        const response = await fetch(
          `https://rickandmortyapi.com/api/character/?page=${page}`
        );
        const data = await response.json();
        this.totalPages = data.info.pages;
        this.characters = data.results;
        this.charactersFilter = data.results;
      } catch (error) {
        console.log(error);
      }
    },
    filterByStatus(status) {
      this.filterState = status;
      const results = this.characters.filter((character) => {
        return character.status.includes(status);
      });
      this.charactersFilter = results;
    },

    filterByName(name) {
      const formatName = name.toLowerCase();
      const results = this.characters.filter((character) => {
        return character.name.toLowerCase().includes(formatName);
      });
      this.charactersFilter = results;
    },
  },
});

import { defineStore } from "pinia";

interface origenes {
  name: string;
  url: string;
}

interface locationes {
  name: string;
  url: string;
}

interface character {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: origenes;
  location: locationes;
  image: string;
  episode: Array<string>;
  url: string;
  created: string;
}

export type RootState = {
  characters: character[];
  charactersFilter: character[];
  filterState: string;
  totalPages: number;
};

export const useCharactersStore = defineStore("charactersStore", {
  state: () =>
    ({
      characters: [],
      charactersFilter: [],
      filterState: "",
      totalPages: 0,
    }) as RootState,
  getters: {
    // Get the total number of characters
    totalCharacters(): number {
      console.log(this.characters.length);
      return this.characters.length;
    },
  },
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

    async getCharacters(page: number) {
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
    filterByStatus(state: string) {
      this.filterState = state;
      const results = this.characters.filter((character) => {
        return character.status.includes(state);
      });
      this.charactersFilter = results;
    },

    filterByName(name: string) {
      const formatName = name.toLowerCase();
      const results = this.characters.filter((character) => {
        return character.name.toLowerCase().includes(formatName);
      });
      this.charactersFilter = results;
    },
  },
});

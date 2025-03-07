import { describe, expect, it } from "vitest";

import { mount } from "@vue/test-utils";

import CardCharacter from "@/components/CardCharacter.vue";
import { ref } from "vue";

const character = ref({
  id: 1,
  name: "Rick Sanchez",
  status: "Alive",
  species: "Human",
  type: "",
  gender: "Male",
  origin: {
    name: "Earth (C-137)",
    url: "https://rickandmortyapi.com/api/location/1",
  },
  location: {
    name: "Earth (Replacement Dimension)",
    url: "https://rickandmortyapi.com/api/location/20",
  },
  image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
  episode: [
    "https://rickandmortyapi.com/api/episode/1",
    "https://rickandmortyapi.com/api/episode/2",
  ],
  url: "https://rickandmortyapi.com/api/character/1",
  created: "2017-11-04T18:48:46.250Z",
});

describe("CardCharacter.vue", () => {
  it("renders character name", () => {
    const wrapper = mount(CardCharacter, {
      props: { character: character.value },
    });
    expect(wrapper.text()).toContain("Rick Sanchez");
  });

  it("renders character status and species", () => {
    const wrapper = mount(CardCharacter, {
      props: { character: character.value },
    });
    expect(wrapper.text()).toContain("Alive - Human");
  });

  it("renders character origin", () => {
    const wrapper = mount(CardCharacter, {
      props: { character: character.value },
    });
    expect(wrapper.text()).toContain("Origin: Earth (C-137)");
  });

  it("renders character location", () => {
    const wrapper = mount(CardCharacter, {
      props: { character: character.value },
    });
    expect(wrapper.text()).toContain("Location: Earth (Replacement Dimension)");
  });

  it("renders character image", () => {
    const wrapper = mount(CardCharacter, {
      props: { character: character.value },
    });
    const img = wrapper.find("img");
    expect(img.attributes("src")).toBe(character.value.image);
    expect(img.attributes("alt")).toBe(character.value.name);
  });
});

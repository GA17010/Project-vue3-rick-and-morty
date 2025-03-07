import ListCharacters from "@/components/ListCharacters.vue";
import { useCharactersStore } from "@/stores/CharactersStore";
import { createTestingPinia } from "@pinia/testing";
import { mount } from "@vue/test-utils";
import { beforeEach, describe, expect, it, vi } from "vitest";

vi.useFakeTimers();

describe("ListCharacters.vue", () => {
  let wrapper: any;
  let store: any;

  beforeEach(() => {
    wrapper = mount(ListCharacters, {
      global: {
        plugins: [createTestingPinia({ createSpy: vi.fn })],
      },
    });
    store = useCharactersStore();
  });

  it("renders loading state initially", () => {
    expect(wrapper.find("#characters__loading").exists()).toBe(true);
  });

  it("renders characters when loaded", async () => {
    store.charactersFilter = [
      {
        id: 1,
        name: "Rick Sanchez",
        status: "Alive",
        species: "Human",
        type: "",
        gender: "Male",
        origin: { name: "Earth (C-137)", url: "" },
        location: { name: "Earth (Replacement Dimension)", url: "" },
        image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
        episode: [],
        url: "",
        created: "",
      },
    ];
    await wrapper.vm.$nextTick();
    expect(wrapper.find(".characters__item").exists()).toBe(true);
    expect(wrapper.find(".characters__item").text()).toContain("Rick Sanchez");
  });

  it("calls getCharacters on mount", () => {
    expect(store.getCharacters).toHaveBeenCalled();
  });
});

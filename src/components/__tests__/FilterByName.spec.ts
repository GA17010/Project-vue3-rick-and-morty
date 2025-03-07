import FilterByName from "@/components/FilterByName.vue";
import { useCharactersStore } from "@/stores/CharactersStore";
import { createTestingPinia } from "@pinia/testing";
import { mount } from "@vue/test-utils";

import { beforeEach, describe, expect, it, vi } from "vitest";

describe("FilterByName.vue", () => {
  let wrapper: any;

  beforeEach(() => {
    wrapper = mount(FilterByName, {
      global: {
        plugins: [createTestingPinia({ createSpy: vi.fn })],
      },
    });
  });

  it("renders input element", () => {
    expect(wrapper.find("input").exists()).toBe(true);
  });

  it("calls filterByName on input keyup", async () => {
    const store = useCharactersStore();
    store.filterByName = vi.fn();

    const input = wrapper.find("input");
    await input.setValue("Rick");
    await input.trigger("keyup");
    expect(store.filterByName).toHaveBeenCalledWith("Rick");
  });

  it("updates the input value correctly", async () => {
    const input = wrapper.find("input");
    await input.setValue("Morty");
    expect(input.element.value).toBe("Morty");
  });
});

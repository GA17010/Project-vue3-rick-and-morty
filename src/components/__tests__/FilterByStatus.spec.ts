import { useCharactersStore } from "@/stores/CharactersStore";
import { createTestingPinia } from "@pinia/testing";
import { mount } from "@vue/test-utils";
import { beforeEach, describe, expect, it, vi } from "vitest";
import FilterByStatus from "../FilterByStatus.vue";

vi.useFakeTimers();
describe("FilterByStatus.vue", () => {
  let wrapper: any;
  let store: any;

  beforeEach(() => {
    wrapper = mount(FilterByStatus, {
      global: {
        plugins: [createTestingPinia({ createSpy: vi.fn })],
      },
    });
    store = useCharactersStore();
  });

  it("renders filter options", () => {
    const options = wrapper.findAll(".item");
    expect(options.length).toBe(4);
    expect(options[0].text()).toBe("All");
    expect(options[1].text()).toBe("Alive");
    expect(options[2].text()).toBe("Dead");
    expect(options[3].text()).toBe("Unknown");
  });

  it("calls filterByStatus with correct status on click", async () => {
    const options = wrapper.findAll(".item");
    await options[1].trigger("click");
    expect(store.filterByStatus).toHaveBeenCalledWith("Alive");

    await options[2].trigger("click");
    expect(store.filterByStatus).toHaveBeenCalledWith("Dead");

    await options[3].trigger("click");
    expect(store.filterByStatus).toHaveBeenCalledWith("unknown");

    await options[0].trigger("click");
    expect(store.filterByStatus).toHaveBeenCalledWith("");
  });
});

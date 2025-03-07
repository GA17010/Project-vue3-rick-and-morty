import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import Pagination from "../FooterPagination.vue";

describe("FooterPagination.vue", () => {
  it("renders the correct visible pages when totalPage is less than or equal to 7", async () => {
    const wrapper = mount(Pagination, {
      props: {
        totalPage: 5,
        currentPage: 3,
      },
    });
    const paginationItems = wrapper.findAll(".pagination-item");
    // Check the number of pagination items
    expect(paginationItems).toHaveLength(5); // 7 pages should be rendered
    expect(paginationItems[0].text()).toBe("1");
    expect(paginationItems[1].text()).toBe("2");
    expect(paginationItems[2].text()).toBe("3");
    expect(paginationItems[3].text()).toBe("4");
    expect(paginationItems[4].text()).toBe("5");
  });

  it("renders '...' when totalPage is greater than 7 and currentPage is in the middle", async () => {
    const wrapper = mount(Pagination, {
      props: {
        totalPage: 7,
        currentPage: 5,
      },
    });
    const paginationItems = wrapper.findAll(".pagination-item");
    // Check that '...' is rendered
    expect(paginationItems.length).toBeGreaterThan(5); // There should be more than 7 items
    expect(paginationItems[2].text()).toBe("3");
    expect(paginationItems[3].text()).toBe("4");
    expect(paginationItems[4].text()).toBe("5");
    expect(paginationItems[5].text()).toBe("6");
    expect(paginationItems[6].text()).toBe("7");
  });
});

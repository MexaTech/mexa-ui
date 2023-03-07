// Example store
import { defineStore } from "pinia";

export const useItemsStore = defineStore("items", {
  state: () => ({
    items: [],
    itemsFiltered: [],
  }),
  getters: {
    getItems: (state) => state.items,
    getItemsFiltered: (state) => state.itemsFiltered,
  },
});

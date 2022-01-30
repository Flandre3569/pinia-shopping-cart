import { IProducts } from "./../api/shop";
import { defineStore } from "pinia";
import { getProducts } from "@/api/shop";

export const useProductsStore = defineStore("products", {
  state: () => {
    return {
      allProducts: [] as IProducts[],
    };
  },

  getters: {},

  actions: {
    async changeAllProducts() {
      const res = await getProducts();
      this.allProducts = res;
    },

    decrementProducts(product: IProducts) {
      const res = this.allProducts.find((item: IProducts) => item.id === product.id);
      if (res) {
        res.inventory--;
      }
    },
  },
});

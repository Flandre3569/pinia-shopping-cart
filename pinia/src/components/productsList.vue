<template>
  <div>
    <ul>
      <li v-for="product in productStore.allProducts" :key="product.id" v-show="product.inventory">
        <table>
          <tr>
            <td>{{ product.title }} - {{ product.price }}</td>
          </tr>
          <tr>
            <td>库存: {{ product.inventory }}</td>
          </tr>
          <button @click="cartStore.addProduct(product)">添加到购物车</button>
        </table>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { useProductsStore } from "@/store/products";
import { useCartStore } from "@/store/cart";
import { IProducts } from "@/api/shop";

const productStore = useProductsStore();
const cartStore = useCartStore();

productStore.changeAllProducts();
// 添加到购物车
</script>

<style scoped></style>

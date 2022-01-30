<template>
  <div>
    <h1>Pinia - 购物车实例</h1>
    <hr />
    <h2>商品列表</h2>
    <ProductsList />
    <hr />
    <ShoppingCart />
  </div>
</template>

<script setup lang="ts">
import ProductsList from "@/components/productsList.vue";
import ShoppingCart from "@/components/shoppingCart.vue";
</script>

<style scoped></style>

<!-- pinia demo例子 -->
<!--<template>
  <HelloWorld />
</template>

<script setup lang="ts">
import HelloWorld from "./components/HelloWorld.vue";
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>-->

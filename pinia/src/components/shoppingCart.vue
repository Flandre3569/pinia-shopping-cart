<template>
  <div class="cart">
    <h2>你的购物车</h2>
    <p>请添加商品到购物车中</p>
    <ul>
      <li v-for="item in cartStore.cartProducts" :key="item.id">
        <table>
          <tr>
            {{
              item.title
            }}
            --
            {{
              item.price
            }}
            --
            {{
              item.quantity
            }}
          </tr>
        </table>
      </li>
    </ul>
    <p>商品总价: {{ cartStore.totalPrice }}</p>
    <p>
      <button @click="cartStore.settle()">结算</button>
    </p>
    <p v-if="cartStore.isSettle === 1">结算成功</p>
    <p v-else-if="cartStore.isSettle === 0">结算失败</p>
  </div>
</template>

<script setup lang="ts">
import { useCartStore } from "../store/cart";

const cartStore = useCartStore();
</script>

<style scoped></style>

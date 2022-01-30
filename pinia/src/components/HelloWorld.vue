<template>
  <div>
    <h2>{{ mainStore.num }}</h2>
    <h2>{{ mainStore.name }}</h2>
    <h2>{{ mainStore.movies }}</h2>

    <hr />

    <h2>{{ num }}</h2>
    <h2>{{ name }}</h2>
    <h2>{{ movies }}</h2>

    <hr />
    <h2>{{ mainStore.count10 }}</h2>
    <h2>{{ mainStore.count10 }}</h2>
    <h2>{{ mainStore.count10 }}</h2>
    <h2>{{ mainStore.count10 }}</h2>

    <button @click="handleNumAdd">点击数字递增</button>
  </div>
</template>

<script setup lang="ts">
import { useMainStore } from "@/store/index";
import { storeToRefs } from "pinia";

const mainStore = useMainStore();

// 组合获取，非响应式
// const { num, name } = mainStore;
// 组合获取，响应式
const { num, name, movies } = storeToRefs(mainStore);

// 对数据进行修改
const handleNumAdd = () => {
  // 1. 直接修改，最简单的方法
  // mainStore.num++;
  // 2. 批量修改，建议使用$patch，因为pinia对$patch做了优化，专治于批量修改
  // mainStore.$patch({
  //   num: mainStore.num + 1,
  //   name: "mingxuan",
  //   movies: [...mainStore.movies, "雷神"],
  // });
  // 3. 更好的批量更新的方式，$patch一个函数
  // mainStore.$patch((state) => {
  //   state.num++;
  //   state.name = "李四";
  //   state.movies.push("奇异博士");
  // });
  // 4. 逻辑结构多的时候，用actions进行修改
  mainStore.changeState(10);
};
</script>

<style scoped></style>

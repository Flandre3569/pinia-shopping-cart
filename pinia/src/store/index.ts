import { defineStore } from "pinia";

// 1. 定义容器
// 2. 使用容器中的store
// 3. 修改state
// 4. 容器中actions的使用

// 必须使用唯一的 容器ID，将来Pinia会把所有的容器挂载到根容器(pinia的根容器)
// 返回值是一个函数，调用得到容器实例
export const useMainStore = defineStore("main", {
  state: () => {
    return {
      num: 0,
      name: "mx",
      movies: ["钢铁侠", "蜘蛛侠", "美国队长"],
    };
  },

  // 类似于computed
  getters: {
    // 内部传递state的使用方式
    // count10(state) {
    //   console.log("count10执行了一次");
    //   return state.num + 10;
    // },

    // 如果再getters中使用this，必须手动指定返回值类型，否则会影响typescript的类型判断
    count10(): number {
      console.log("count10执行了一次");
      return this.num + 10;
    },
  },

  // 类似于methods
  actions: {
    changeState(count: number) {
      this.$patch((state: any) => {
        state.num += count;
        state.name = "张三";
        state.movies.push("雷神");
      });
    },
  },
});

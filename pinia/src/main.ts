import { createApp } from "vue";
import App from "./App.vue";

import { createPinia } from "pinia";

// 创建pinia实例
const pinia = createPinia();

// 挂载到Vue根实例上
const app = createApp(App);
app.use(pinia);
app.mount("#app");

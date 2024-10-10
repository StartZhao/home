<template>
  <Background />
  <main>
    <div class="main-left"><Left /></div>
    <div class="main-right"><Right /></div>
  </main>
  <Footer />
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import Background from "./components/Background.vue";
import Footer from "./components/Footer.vue";
import Left from "./views/Main/Left.vue";
import Right from "./views/Main/Right.vue";

onMounted(() => {
  // 屏蔽右键
  document.oncontextmenu = () => {
    return false;
  };
});
</script>

<style lang="scss" scoped>
main {
  display: flex;
  padding-left: 13%;
  padding-top: 5%;
  .main-left {
    padding-top: 4%;
    width: 35%;
  }
  .main-right {
    padding-left: 3%;
    width: 50%;
  }
}
</style>

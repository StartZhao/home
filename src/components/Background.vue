<template>
  <div class="background" :style="backgroundStyle"></div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from "vue";

// 定义背景图像数组
const backgrounds = ["images/background1.jpg", "images/background2.jpg"];

const currentIndex = ref(0);
const backgroundUrl = ref(backgrounds[currentIndex.value]);

// 添加时间戳以防止缓存，使得背景更换能够识别到
const backgroundStyle = computed(() => ({
  backgroundImage: `url(${backgroundUrl.value})`, // 避免缓存
}));

// 获取随机索引
function getRandomIndex() {
  return Math.floor(Math.random() * backgrounds.length);
}

// 预加载图片
const preloadImages = (start: number, end: number): void => {
  for (let i = start; i < end && i < backgrounds.length; i++) {
    const img = new Image();
    img.src = backgrounds[i];
  }
};

onMounted(() => {
  // 初始化时设置随机背景
  backgroundUrl.value = backgrounds[getRandomIndex()];
  // 延迟几秒后再预加载其他图片
  setTimeout(preloadImages, 5000);
});
</script>

<style scoped>
.background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-size: cover;
  background-position: center;
  z-index: -1;
  filter: brightness(0.85);
}
</style>

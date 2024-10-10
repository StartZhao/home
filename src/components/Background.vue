<template>
  <div class="background" :style="backgroundStyle"></div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount,computed } from 'vue';

// 定义背景图像数组
const backgrounds = [
  'images/background1.jpg',
  'images/background2.jpg',
];

const currentIndex = ref(0);
const backgroundUrl = ref(backgrounds[currentIndex.value]);

// 添加时间戳以防止缓存，使得背景更换能够识别到
const backgroundStyle = computed(() => ({
  backgroundImage: `url(${backgroundUrl.value}?${new Date().getTime()})`, // 避免缓存
}));


const changeBackground = () => {
  console.log('New background URL:', backgroundUrl.value);
  currentIndex.value = (currentIndex.value + 1) % backgrounds.length; // 循环切换
  backgroundUrl.value = backgrounds[currentIndex.value];
};

// 定时切换背景
let intervalId: number;

onMounted(() => {
  intervalId = window.setInterval(changeBackground, 60*60*1000); // 每1小时切换
});

onBeforeUnmount(() => {
  if(intervalId){
    clearInterval(intervalId); // 清理定时器
  }
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

<template>
  <div class="timer cards">
    <div class="date">
      <span>{{ currentTime.year }}&nbsp;年&nbsp;</span>
      <span>{{ currentTime.month }}&nbsp;月&nbsp;</span>
      <span>{{ currentTime.day }}&nbsp;日&nbsp;</span>
      <span>{{ currentTime.weekday }}</span>
    </div>
    <div class="time">
      <span
        >{{ currentTime.hour }}&nbsp;:&nbsp;{{ currentTime.minute }}&nbsp;:&nbsp;{{
          currentTime.second
        }}</span
      >
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import { getCurrentTime } from "@/utils/timeUtil.js";

const currentTime = ref({
  year: 2024,
  month: 9,
  day: 27,
  hour: 0,
  minute: 0,
  second: 0,
  weekday: "星期五",
});
const timeInterval = ref(null);
const updayeCurrentTime = () => {
  currentTime.value = getCurrentTime();
};

onMounted(() => {
  updayeCurrentTime();
  timeInterval.value = setInterval(updayeCurrentTime, 1000);
});

onUnmounted(() => {
  clearInterval(timeInterval.value);
});
</script>

<style lang="scss" scoped>
.timer {
  width: 251px;
  height: 90px;
  font-family: "UnidreamLED";
  text-align: center;
  padding: 1.5rem;
  .date {
    padding-bottom: 1rem;
    font-size: 1rem;
  }
  .time {
    font-size: 3.2rem;
  }
}
</style>

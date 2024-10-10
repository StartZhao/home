<template>
  <div class="func">
    <div class="motto"><Motto /></div>
    <div class="timer"><Timer /></div>
  </div>
</template>

<script setup lang="ts">
import Motto from "@/components/Motto.vue";
import Timer from "@/components/Timer.vue";
</script>

<style lang="scss" scoped>
.func {
  margin-left: 3%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;
  @media (max-width: 1360px) {
    .motto {
      width: 100%;
    }
    .timer {
      display: none;
    }
  }
}
</style>

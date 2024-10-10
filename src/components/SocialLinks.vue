<template>
    <div class="social">
    <div class="link">
      <a
        v-for="item in socialLinks"
        :key="item.name"
        :href="item.url"
        target="_blank"
        @mouseenter="socialTip = item.tip"
        @mouseleave="socialTip = '通过这里联系我吧'"
      >
        <img class="icon" :src="item.icon" height="24" />
      </a>
    </div>
    <span class="tip">{{ socialTip }}</span>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import socialLinks from "@/assets/data/socialLinks.json"
const socialTip = ref("通过这里联系我吧");
</script>

<style lang="scss" scoped>
.social {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 460px;
  height: 42px;
  margin-top: 1rem;
  background-color: transparent;
  border-radius: 6px;
  backdrop-filter: blur(0);
  transition:
    background-color 0.7s,
    backdrop-filter 0.7s;
  .link {
    display: flex;
    align-items: center;
    justify-content: center;
    a {
      .icon {
        margin: 0 12px;
        transform: scale(1);
        &:hover {
          transform: scale(1.1);
        }
        &:active {
          transform: scale(0.9);
        }
      }
    }
  }
  .tip {
    opacity: 0;
    transition: opacity 1s;
    margin-right: 12px;
    color: #91fcee;
    font-style:italic;
    font-weight: bold;

  }
  &:hover {
    backdrop-filter: blur(5px);
    .tip {
      opacity: 1;
    }
    background-color: #00000040;
  }
}
</style>
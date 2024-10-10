<template>
  <div class="links">
    <div class="line">
      <Icon size="1.4rem">
        <Link />
      </Icon>
      <span class="line-title">站点列表</span>
    </div>
    <div class="links-content">
      <a class="cards" v-for="item in siteLinks" :key="item.name" :href="item.url" target="_blank">
        <Icon size="3.2rem">
          <component :is="siteIcon[item.icon]" />
        </Icon>
        <span>{{ item.name }}</span>
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Icon } from "@vicons/utils";
import { Link, Blog, Compass } from "@vicons/fa";
import siteLinks from "@/assets/data/siteLinks.json";

// 网站链接图标
const siteIcon = {
  Blog,
  Compass,
};
</script>

<style lang="scss" scoped>
.links {
  margin-top: 5%;
  .line {
    .line-title {
      padding: 0.5rem;
      font-size: 1.4rem;
      font-weight: bold;
    }
  }
  .links-content {
    padding-top: 3%;
    margin-left: 3%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 8%;
    a {
      padding: 1rem;
      text-decoration: none;
      color: inherit;
      display: flex;
      align-items: center;
      width: 45%;
      justify-content: center;
      span {
        font-size: 2rem;
        font-weight: bold;
        margin-left: 1rem;
      }
    }
  }
}
</style>

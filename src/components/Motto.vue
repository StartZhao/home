<template>
  <div class="motto cards">
    <div class="content" @click="updateData">
      <span class="text">{{ data.text }}</span>
      <span class="from">——&nbsp;{{ data.from }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, onMounted } from "vue";
import { getHitokoto } from "@/api";
import { debounce } from "@/utils/debounce.ts";

const data = reactive({
  text: "这里该有段话！",
  from: "无名之辈",
});
// 获取一言数据
const getData = async () => {
  const resulut = await getHitokoto();
  data.text = resulut.hitokoto;
  data.from = resulut.from;
};

// 更新一言数据
const updateData = debounce(() => {
  getData();
}, 500);

onMounted(() => {
  getData();
});
</script>

<style lang="scss" scoped>
.motto {
  width: 251px;
  height: 90px;
  padding: 1.5rem;
  .content {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .text {
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 3;
      overflow: hidden;
      text-overflow: ellipsis;
      font-size: 1.3rem;
    }
    .from {
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 1;
      overflow: hidden;
      text-overflow: ellipsis;
      padding-top: 0.75rem;
      font-size: 1.1rem;
      align-self: flex-end;
      font-weight: bold;
    }
  }
}
</style>

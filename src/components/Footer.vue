<template>
  <footer :class="{ blur: footerBlur }">
    Copyright&nbsp;
    <span v-if="startYear != null">&copy;&nbsp;{{startYear}}-{{ fullYear }}&nbsp;</span>
    <span v-if="startYear != null && owner != null">|</span>
    <span v-if="owner != null">&nbsp;Created&nbsp;By&nbsp;{{owner}}</span>
  </footer>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useStore } from "vuex";

const store = useStore();
const footerBlur = ref(store.state.footerBlur);
const startYear = ref(import.meta.env.VITE_START_YEAR);
const fullYear = ref(new Date().getFullYear());
const owner = ref(import.meta.env.VITE_OWNER);


</script>

<style scoped>
footer {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  margin-top: 10px;
  padding: 10px;
  text-align: center;
  z-index: 100;
  color: rgb(255, 242, 224);
  font-family: 'Noto Sans', sans-serif;
}
footer.blur {
  backdrop-filter: blur(10px); /* 模糊效果 */
}
</style>
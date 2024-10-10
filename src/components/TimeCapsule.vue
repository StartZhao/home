<template>
  <div class="time-capsule">
    <div class="line">
      <Icon size="1.4rem">
        <Hourglass />
      </Icon>
      <span class="line-title">剩余时间</span>
    </div>
    <div class="all-capsule">
      <div v-for="(item, tag, index) in timeData" :key="index" class="capsule-item">
        <div class="item-title">
          <span class="percentage">
            {{ item.name }}已度过
            <strong>{{ item.passed }}</strong>
            {{ String(tag) === "day" ? "小时" : "天" }}
          </span>
          <span class="remaining">
            剩余&nbsp;{{ item.remaining }}&nbsp;{{ String(tag) === "day" ? "小时" : "天" }}
          </span>
        </div>
        <el-progress
          :text-inside="true"
          :stroke-width="20"
          :percentage="parseFloat(item.percentage)"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import { Icon } from "@vicons/utils";
import { Hourglass } from "@vicons/fa";
import { getTimeCapsule } from "@/utils/timeUtil.js";

const timeInterval = ref(null);
const timeData = ref(getTimeCapsule());
onMounted(() => {
  timeInterval.value = setInterval(() => {
    timeData.value = getTimeCapsule();
  }, 1000);
});
onUnmounted(() => {
  clearInterval(timeInterval.value);
});
</script>

<style lang="scss" scoped>
.time-capsule {
  margin-top: 5%;
  .line {
    .line-title {
      padding: 0.5rem;
      font-size: 1.4rem;
      font-weight: bold;
    }
  }
  .all-capsule {
    border-radius: 6px;
    background-color: #00000040;
    backdrop-filter: blur(10px);
    margin-top: 3%;
    margin-left: 3%;
    padding: 1rem;
    padding-bottom: 0.25rem;
    .capsule-item {
      margin-bottom: 1rem;
      .item-title {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        margin: 0rem 0rem 0.5rem 0rem;
        font-size: 0.95rem;
      }
      ::v-deep .el-progress-bar {
        .el-progress-bar__outer {
          border-radius: 6px;
          background-color: #00000020;
          .el-progress-bar__inner {
            background-color: #efefef;
            border-radius: 6px;
            text-align: center;
            span {
              color: #564d59;
              font-size: 0.9rem;
            }
          }
        }
      }
    }
  }
}
</style>

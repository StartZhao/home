<template>
    <div class="message">
        <div class="avatar">
            <img :src="avatar" alt="Sorry,waitting" />
        </div>
        <div class="name">{{ name }}</div>
        <div class="description " @click="changeBox">
            <div class="content cards">
                <Icon size="12"><QuoteLeft/></Icon>
                <div class="text">
                    <p>{{ descriptionText.hello }}</p>
                    <p>{{ descriptionText.text }}</p>
                </div>
                <Icon size="12"><QuoteRight/></Icon>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { reactive,watch } from "vue";
import { useStore } from "vuex";
import { Icon } from "@vicons/utils";
import { QuoteLeft, QuoteRight } from "@vicons/fa";

const store = useStore();
const avatar = import.meta.env.VITE_HOME_AVATAR || '/images/avatar.png';
const name = import.meta.env.VITE_HOME_NAME || '菜旺';
const descriptionText = reactive({
    hello: import.meta.env.VITE_DESC_HELLO || 'hello world!',
    text: import.meta.env.VITE_DESC_TEXT || '一个无人问津的小网站！',
});

const changeBox = () => {
    store.state.boxOpenState = !store.state.boxOpenState;
}
// 监听状态变化
watch(
  () => store.state.boxOpenState,
  (value) => {
    if (value) {
        descriptionText.hello = import.meta.env.VITE_DESC_HELLO_OTHER || 'surprise!';
        descriptionText.text = import.meta.env.VITE_DESC_TEXT_OTHER || '来者可愿留下姓名！';
    } else {
        descriptionText.hello = import.meta.env.VITE_DESC_HELLO || 'hello,world!';
        descriptionText.text = import.meta.env.VITE_DESC_TEXT || '一个无人问津的小网站！';
    }
  },
);



</script>

<style lang="scss" scoped>
.message {
    width: 100%;
    max-width: 460px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    .avatar {
        width: 200px;
        height: 200px;
        border-radius: 50%;
        overflow: hidden;
        img {
            width: 100%;
            height: 100%;
        }
    }
    .name {
        margin-top: 2rem;
        font-size: 2rem;
        font-family: 'zihunjianqishoushu','Pacifico-Regular-all';
    }
    .description {
        margin-top: 2rem;
        width: 100%;
        max-width: 460px;
        .content {
            padding: 1rem;
            display: flex;
            justify-content: space-between;
            .text {
                width: 100%;
                margin: 0.5rem 1rem;
                line-height: 1rem;
                margin-right: auto;
                font-family: "zihunjianqishoushu";
            }
            .xicon:nth-of-type(2) {
                align-self: flex-end;
            }
        }
    }
}
</style>
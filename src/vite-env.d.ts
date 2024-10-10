// 忽略 eslint 对这个文件检查
/* eslint-disable */
/// <reference types="vite/client" />

declare module "*.json" {
  const value: any;
  export default value;
}
declare module "@/*" {
  // 可以根据需要调整具体类型
  const value: any;
  export default value;
}
declare module '@/api' {
    export function getHitokoto(): any; // 根据实际返回类型调整
  }
declare module "@/utils/timeUtil.js" {
  export function getCurrentTime(): any;
  export function getTimeCapsule(): any;
}
declare module "@/utils/debounce.ts" {
    export function debounce(func: T, delay: number): any;
  }

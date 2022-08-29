<template>
  <div>
    <!-- 三级联动全局组件：三级联动已经注册为全局组件，因此不需要再引入 -->
    <TypeNav />

    <ListContainer />

    <!-- 今日推荐 -->
    <Recommend />

    <Rank />
  </div>
</template>

<script>
import ListContainer from "@/pages/Home/ListContainer";
import Recommend from "@/pages/Home/Recommend";
import Rank from "@/pages/Home/Rank";

export default {
  name: "Home",
  components: {
    ListContainer,
    Recommend,
    Rank,
  },
};
</script>

<style>
</style>
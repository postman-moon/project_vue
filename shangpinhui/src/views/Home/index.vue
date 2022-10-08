<template>
  <div>
    <!-- 三级联动全局组件：三级联动已经注册为全局组件，因此不需要再引入 -->
    <TypeNav />

    <!--列表-->
    <ListContainer />

    <!-- 今日推荐 -->
    <Recommend />

    <!-- 商品排行 -->
    <Rank />

    <!-- 猜你喜欢 -->
    <Like />

    <!-- 楼层 -->
    <Floor v-for="floor in floorList" :key="floor.id" :list="floor" />

    <!-- 商标 -->
    <Brand />
  </div>
</template>

<script>
import ListContainer from "@/views/Home/ListContainer";
import Recommend from "@/views/Home/Recommend";
import Rank from "@/views/Home/Rank";
import Like from "@/views/Home/Like";
import Floor from "@/views/Home/Floor";
import Brand from "@/views/Home/Brand";
import { mapState } from "vuex";

export default {
  name: "Home",
  mounted() {
    this.$store.dispatch("getFloorList");
  },
  computed: {
    ...mapState({
      floorList: (state) => state.home.floorList,
    }),
  },
  components: {
    ListContainer,
    Recommend,
    Rank,
    Like,
    Floor,
    Brand,
  },
};
</script>

<style></style>

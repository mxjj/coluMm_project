<template>
  <div>
    <div class="fool_mbox">
      <Tabbar route class="bing_box" v-model="active">
        <template v-for="item in icon">
          <TabbarItem replace :to="item.url" :key="item.url">
            <span>{{item.text}}</span>
            <img slot="icon" slot-scope="props" :src="props.active ? item.active : item.inactive" />
          </TabbarItem>
        </template>

        <!-- <TabbarItem replace to="/search" icon="search">分类</TabbarItem>
      <TabbarItem replace to="/search" icon="search">购物车</TabbarItem>
        <TabbarItem replace to="/search" icon="search">我的</TabbarItem>-->
      </Tabbar>
    </div>
  </div>
</template>
<script>
import { Tabbar, TabbarItem } from "vant";
export default {
  components: {
    Tabbar,
    TabbarItem
  },
  data() {
    return {
      active: 0,
      icon: [
        {
          text: "首页",
          url: "/home",
          active: require("../../assets/tabbar_Img/home_i.png"),
          inactive: require("../../assets/tabbar_Img/home.png")
        },
        {
          text: "分类",
          url: "/H",
          active: require("../../assets/tabbar_Img/shop-i.png"),
          inactive: require("../../assets/tabbar_Img/nav_item.png")
        },
        {
          text: "购物车",
          url: "/f",
          active: require("../../assets/tabbar_Img/shop_i.png"),
          inactive: require("../../assets/tabbar_Img/shop.png")
        },
        {
          text: "我的",
          url: "/d",
          active: require("../../assets/tabbar_Img/usInfo-i.png"),
          inactive: require("../../assets/tabbar_Img/usInfo.png")
        }
      ]
    };
  }
};
</script>
<style lang="scss" scope>
.fool_mbox {
  border: 1px solid red;
  position: fixed;
  bottom: 0;
  .bing_box {
  }
  .van-tabbar {
    height: 98px;
  }
  .van-tabbar-item__icon img {
    height: 40px;
    width: 40px;
  }
  .van-tabbar-item__text {
    span {
      font-size: 18px;
    }
  }
  .van-tabbar-item--active {
    color: #fe3f31;
  }
}
</style>
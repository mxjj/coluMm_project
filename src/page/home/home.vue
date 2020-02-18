<template>
  <div class="mbox">
    <div class="header_big">
      <div class="header">
        <div class="header_city"></div>
        <div class="header_search">
          <Icon name="search" class="col-bbb" />
          <div class="col-bbb fs-28 magl_11">搜索商品</div>
        </div>
      </div>
      <div class="header_Img">
        <div class="Img_item">
          <Swipe :autoplay="3000" :show-indicators="false">
            <SwipeItem v-for="(image, index) in images" :key="index">
              <img v-lazy="image" />
            </SwipeItem>
          </Swipe>
        </div>
      </div>
    </div>
    <!-- 内容部分 -->
    <div class="content">
      <div class="list_nav">
        <div class="list_nav_i">
          <image  src=""></image>
          </div>
          <div class="bot_ text fs-24">商品分类</div>
        </div>
      </div>
    </div>
</template>
<script>
import { Icon, Swipe, SwipeItem } from "vant";
export default {
  name: "home",
  components: {
    Icon,
    Swipe,
    SwipeItem
  },
  data() {
    return {
      images: [
        "https://img.yzcdn.cn/vant/apple-1.jpg",
        "https://img.yzcdn.cn/vant/apple-2.jpg"
      ]
    };
  }
};
</script>
<style lang="scss" scope>
.mbox {
  .header_big {
    .header {
      margin-bottom: 12px;
      .header_search {
        margin: 0 auto;
        height: 64px;
        width: 306px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #f7f7f7;
        border-radius: 32px;
      }
    }
    .header_Img {
      height: 375px;
      .Img_item {
        height: 100%;
        img {
          height: 375px;
          width: 100%;
        }
      }
    }
  }
  .content{
    .list_nav {
      height: 200px;
      display: flex;
      align-items: center;
      justify-content: space-around;
      flex-direction: column;
      border: 1px solid red;
      .list_nav_i{
        height: 98px;
        width: 98px;
        border: 1px solid red;
        image{
          height: 100%;
          width: 100%;
        }
      }
      .bot_text {
      }
    }
  }
}
</style>
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
        <div class="list_item" v-for="(item,index) in icon_list" :key="index">
          <div class="list_nav_i">
            <img :src="item.Img" />
          </div>
          <div class="fs-24 col-5454">{{item.title}}</div>
        </div>
      </div>
      <div class="nav_videos">
        <div class="vidos_i">
          
        </div>
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
      ],
      icon_list: [
        {
          title: "商品分类",
          Img: require("../../assets/home_Img/fenlei.png")
        },
        {
          title: "领优惠券",
          Img: require("../../assets/home_Img/hangye.png")
        },
        {
          title: "行业资讯",
          Img: require("../../assets/home_Img/shouchang.png")
        },
        {
          title: "我的收藏",
          Img: require("../../assets/home_Img/shouchang.png")
        }
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
  .content {
    .list_nav {
      display: flex;
      justify-content: space-around;
      align-items: center;
      .list_item {
        display: flex;
        width: 20%;
        height: 200px;
        align-items: center;
        flex-direction: column;
        justify-content: center;
        .list_nav_i {
          height: 98px;
          width: 98px;
          margin-bottom: 20px;

          img {
            height: 100%;
            width: 100%;
          }
        }
      }
    }
    .nav_videos {
     padding: 30px;
     background-color: #F6F6F6;
     border: 1px solid red;
    }
  }
}
</style>
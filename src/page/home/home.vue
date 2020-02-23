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
        <div
          class="vidos_i"
          v-for="(item,index) in bag_Img"
          :key="index"
          :style="{'background-Image':'url('+item.bg_Image+')'}"
        ></div>
      </div>
    </div>
    <div class="floor_box padd-30">
      <div class="fl_title">
        <div class="fl_i_title">
          <div class="fs-28b mb-14 col-333">精品推荐</div>
          <div class="fs-20 col-999">诚意推荐品质商品</div>
        </div>
        <div class="fr-i_nav fs-24 col-999">更多</div>
      </div>
      <!-- 轮播图 -->
      <div class="floor_Image">
        <Swipe :autoplay="3000">
          <SwipeItem v-for="(image, index) in images" :key="index">
            <img v-lazy="image" />
          </SwipeItem>
        </Swipe>
      </div>
      <!-- 商品列表 -->
      <div class="floor_nav">
        <div class="fl_nav_item">
          <div class="nav_img">
            <img src />
          </div>
          <div class="nav_text">
            <div class="nav_tit fs-32 col-999">每晚微量天然蚕丝春秋夏被单双...</div>
            <div class="nav_price_t">
              <div class="fs-36b col-F31">￥1.00</div>
            </div>
            <div class="nav_pri_b">
              <div class="fs-28b col-000">￥0.99</div>
              <div class="fs-18b vip_box">VIP</div>
              <div class="fs-24 col-999">已售888件</div>
            </div>
          </div>
        </div>
        <div class="fl_nav_item">
          <div class="nav_img">
            <img src />
          </div>
          <div class="nav_text">
            <div class="nav_tit fs-32 col-999">每晚微量天然蚕丝春秋夏被单双...</div>
            <div class="nav_price_t">
              <div class="fs-36b col-F31">￥1.00</div>
            </div>
            <div class="nav_pri_b">
              <div class="fs-28b col-000">￥0.99</div>
              <div class="fs-18b vip_box">VIP</div>
              <div class="fs-24 col-999">已售888件</div>
            </div>
          </div>
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
      bag_Img: [
        {
          bg_Image: require("../../assets/home_Img/school.png")
        },
        {
          bg_Image: require("../../assets/home_Img/vidoes.png")
        }
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
        width: 360px;
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
          -webkit-filter: blur(3px); /* Chrome, Safari, Opera */
          filter: blur(3px);
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
      display: flex;
      justify-content: space-between;
      background-color: #f6f6f6;
      .vidos_i {
        height: 170px;
        background-size: 100% 100%;
        background-repeat: no-repeat;
        width: 48%;
      }
    }
  }
  .floor_box {
    padding-bottom: 80px;
    .fl_title {
      display: flex;
      .fl_i_title {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        height: 120px;
      }
      .fr-i_nav {
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: flex-end;
      }
    }
    .floor_Image {
      position: relative;
      height: 300px;
      img {
        height: 260px;
        width: 100%;
      }
    }
    .floor_nav {
      .fl_nav_item {
        padding: 30px 0;
        box-sizing: border-box;
        display: flex;
        border-bottom: 1px solid #3333;
        justify-content: space-between;
        .nav_img {
          height: 180px;
          width: 180px;
          img {
            height: 180px;
            width: 180px;
          }
        }
        .nav_text {
          .nav_tit {
            margin-bottom: 54px;
          }
          .nav_price_t {
            margin-left: -6px;
          }
          .nav_pri_b {
            display: flex;
            align-items: center;
            margin-top: 16px;
            margin-bottom: 19px;
            .vip_box {
              margin: 0 10px;
              height: 20px;
              line-height: 20px;
              text-align: center;
              width: 56px;
              background-color: #000;
              color: #d1b02c;
            }
          }
        }
      }
    }
  }
  .van-swipe__indicator {
    height: 8px;
    width: 14px;
    margin: 0 5px;
    background: #fd8e78;
  }
  .van-swipe__indicator--active {
    width: 24px;
    background-color: #fe3f31;
  }
}
</style>
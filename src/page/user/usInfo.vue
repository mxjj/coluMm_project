<template>
  <div class="mbox">
    <div class="user_header">
      <div class="user_header_tit mag-bottom fs-32b col-fff">个人中心</div>
      <!-- 头像 -->
      <div class="user_header_nav">
        <div class="user_header_img">
          <img src alt />
        </div>
        <div class="us_header_nav">
          <div class="us_header_name fs-31b col-fff">{{this.userInfo}}</div>
          <div class="us_header_model fs-24 col-fff">{{this.model ? this.model :'绑定手机'}}</div>
        </div>
      </div>
    </div>
    <!-- 内容 -->
    <div class="content">
      <div class="prcie_content mgb_20">
        <div class="price_nav" v-for="(item,index) in price_arr" :key="index">
          <div class="my_price col-999 fs-24">{{item.title}}</div>
          <div
            class="price_i col-333 fs-32"
            v-if="index<2"
            :class="index<2?'active':''"
          >{{ item.pay_nav | item_pay }}</div>
          <div class="price_i col-333 fs-32" v-else>{{item.pay_nav }}</div>
        </div>
      </div>
      <!-- 我的订单 -->
      <div class="my_order bg-fff mgb_20">
        <div class="order_tit padd-30">
          <div class="fs-28 col-333">我的订单</div>
          <div class="fs-24 col-999">全部订单</div>
        </div>
        <div class="order_nav">
          <div class="order_i_nav" v-for="(item,index) in item_nav" :key="index">
            <div class="order_tb"></div>
            <div class="order_text fs-28 col-333">{{item.tetx_item}}</div>
          </div>
        </div>
      </div>
      <!-- 我的服务 -->
      <div class="my_service">
        <div class="my_titie fs-28 col-333">我的服务</div>
        <div class="my_service_box">
          <div class="my_box_item" v-for="(item,index) in 9" :key="index">
            <div class="my_box_img"></div>
            <div class="txt fs-28 col-333">会员中心</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
// import { mapMutations } from "vuex";
export default {
  computed: {
    ...mapState(["userInfo", "model"])
  },
  filters: {
    item_pay(v) {
      return v.toFixed(2);
    }
  },
  data() {
    return {
      price_arr: [
        {
          title: "我的余额",
          pay_nav: 10
        },
        {
          title: "当前佣金",
          pay_nav: 10
        },
        {
          title: "优惠券",
          pay_nav: 1
        }
      ],
      item_nav: [
        {
          img_Item: {},
          tetx_item: "待付款"
        },
        {
          img_Item: {},
          tetx_item: "待发货"
        },
        {
          img_Item: {},
          tetx_item: "待收货"
        },
        {
          img_Item: {},
          tetx_item: "待评价"
        },
        {
          img_Item: {},
          tetx_item: "售后/退款"
        }
      ]
    };
  },
  mounted() {
    console.log(this.userInfo);
  }
};
</script>
<style lang="scss" scoped>
.mbox {
  background: rgba(245, 245, 245, 1);
  .user_header {
    height: 414px;
    padding: 0 30px;
    background-color: #fe3f31;
    border-bottom-left-radius: 40%;
    border-bottom-right-radius: 40%;
    box-sizing: border-box;
    .user_header_tit {
      height: 88px;
      line-height: 88px;
      text-align: center;
    }
    .user_header_nav {
      display: flex;
      .user_header_img {
        height: 128px;
        width: 128px;
        border-radius: 50%;
        margin-right: 20px;
        border: 1px solid #ccc;
      }
      .us_header_nav {
        .us_header_name {
          width: 247px;
          margin-top: 18px;
          margin-bottom: 20px;
          letter-spacing: 2px;
          color: #fff;
        }
        .us_header_model {
          height: 40px;
          line-height: 40px;
          text-align: center;
          letter-spacing: 1px;
          border-radius: 20px;
          background: rgba(224, 52, 40, 0.8);
        }
      }
    }
  }
  .content {
    padding: 0 30px;
    margin-top: -136px;
    .prcie_content {
      height: 138px;
      display: flex;
      background-color: #ffffff;
      border-radius: 10px;
      padding-bottom: -136px;
      .price_nav {
        position: relative;
        padding: 5px 0;
        width: 33.33%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        .active::after {
          content: "";
          margin-top: 19px;
          position: absolute;
          right: 0;
          top: 0;
          border: 1px solid #e6e6e6;
          height: 100px;
        }
      }
    }
    .my_order {
      border-radius: 10px;
      .order_tit {
        height: 88px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-bottom: 1px solid #e6e6e6;
      }
      .order_nav {
        height: 160px;
        display: flex;
        justify-content: space-around;
        .order_i_nav {
          width: 33.33%;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          .order_tb {
            height: 38px;
            width: 38px;
            margin-bottom: 20px;
            border: 1px solid red;
          }
        }
      }
    }
    .my_service {
      .my_titie {
        height: 88px;
        line-height: 88px;
        border-bottom: 1px solid #e6e6e6;
        padding-left: 30px;
        background-color: #fff;
      }
      .my_service_box {
        // height: 380px;
        // box-sizing: border-box;
        padding-top: 38px;

        display: flex;
        flex-wrap: wrap;
        background-color: #fff;
        border-radius: 10px;
        .my_box_item {
          width: 25%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          .my_box_img {
            height: 38px;
            width: 38px;
            margin-bottom: 19px;
            border: 1px solid red;
          }
          .txt {
            margin-bottom: 30px;
          }
        }
      }
    }
  }
}
</style>
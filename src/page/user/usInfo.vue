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
          <div class="us_header_name fs-31b col-fff">我是一只小松鼠</div>
          <div class="us_header_model fs-24 col-fff">绑定手机号</div>
        </div>
      </div>
    </div>
    <!-- 内容 -->
    <div class="content">
      <div class="prcie_content">
        <div class="price_nav">
          <div class="my_price">我的余额</div>
          <div class="price_nav">0.00</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  }
};
</script>
<style lang="scss" scoped>
.mbox {
  background: rgba(245, 245, 245, 1);
  .user_header {
    height: 454px;
    padding: 0 30px;
    background-color: #fe3f31;
    border-bottom-left-radius: 50%;
    border-bottom-right-radius: 50%;
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
          width: 160px;
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
    .prcie_content {
      height: 138px;
      border: 1px solid red;
    }
  }
}
</style>
<template>
  <div class="logo_box">
    <!-- <Toast/> -->
    <div class="content_box">
      <div class="logo_title col-bbb fs-36b">登录</div>
      <!-- 输入框 -->
      <div class="logo_input">
        <van-icon name="phone-o" style="background-color:#fff;" />
        <input
          type="number"
          value=" /^1[3-9][0-9]\d{8}$/"
          v-model="user.model"
          class="logo_input_i"
        />
      </div>
      <div class="logo_input">
        <van-icon name="completed" style="background-color:#fff;" />
        <input type="password" v-model="user.password" class="logo_input_i" />
      </div>
      <!-- 登录 -->
      <div class="login_btn">
        <div class="buttom fs-28b" @click.stop="btnClick">
          <div v-if="isShow">登录</div>
          <Loading v-else type="spinner" color="#1989fa" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { Loading, Toast } from "vant";
export default {
  components: {
    Loading
  },
  data() {
    return {
      user: {
        model: "",
        password: ""
      },
      isShow: true,
      num: 0
    };
  },
  methods: {
    btnClick() {
      if (this.user.model == "") {
        return Toast("请输入账号");
      } else if (this.user.password == "") {
        return Toast("请输入密码");
      }
      this.isShow = false;
      this.num++;
      if (this.num > 1) {
        Toast("正在加载，请勿重复点击");
      }
      setInterval(() => {
        this.isShow = true;
      }, 2000);
      let userInfo = {
        username: "我是一只小松鼠",
        model: this.user.model,
        price: 100000000,
        price_item: 20000,
        Img:
          "https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1582694325&di=870ccf9895c00aed2789be80edf548c4&src=http://a0.att.hudong.com/78/52/01200000123847134434529793168.jpg"
      };
      localStorage.setItem("userInfo", JSON.stringify(userInfo));
      localStorage.setItem("token", 123456);
      this.$store.commit('change_UserInfo',userInfo)
      this.$router.push("/home");
      Toast.success('登录成功');
    }
  }
};
</script>
<style lang="scss" scoped>
.logo_box {
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  height: 100%;
  width: 100%;
  background-size: 100% 100%;
  background-image: url("https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3500842579,1445150451&fm=26&gp=0.jpg");
  background-repeat: no-repeat;
  .content_box {
    z-index: 1;
    height: 500px;
    background-color: rgba(0, 0, 0, 0.5);
    width: 80%;
    padding: 0 15px;
    box-sizing: border-box;
    .logo_title {
      height: 100px;
      line-height: 100px;
      text-align: left;
      letter-spacing: 5px;
      margin-bottom: 30px;
      border-bottom: 1px solid #545454;
    }
    .logo_input {
      margin-top: 10px;
      display: flex;
      align-items: center;
      margin-left: 6px;
      border-bottom: 1px solid #c9c9c9c9;
      .logo_input_i {
        height: 80px;
        width: 100%;
        margin-left: 20px;
        color: #fff;
        font-size: 28px;
        background-color: rgba(0, 0, 0, 0);
      }
    }
    .login_btn {
      margin-top: 70px;
      .buttom {
        margin: 0 auto;
        width: 50%;
        height: 80px;
        line-height: 80px;
        text-align: center;
        color: #fff;
        letter-spacing: 5px;
        background-color: skyblue;
        border-radius: 5px;
      }
    }
  }
}
</style>
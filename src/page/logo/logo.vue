<template>
  <div class="logo_box">
    <div class="content_box">
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
    height: 300px;
    width: 200px;
    border: 1px solid red;
  }
}
</style>
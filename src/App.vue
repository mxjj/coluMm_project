<template>
  <div id="app">
    <router-view ></router-view>
      <tabbars v-if="this.$route.meta.isShow" />
  </div>
</template>

<script>
import tabbars from "./page/tabars/tabbar.vue";
export default {
  name: "App",
  components: {
    tabbars
  },
  mounted(){
      console.log(this.$route.meta)
  }
};
</script>

<style>
.mbox {
  padding-bottom: 98px;
}
</style>

<template>
  <div class="mbox">
    <p>
      测试专用
    </p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
p{
  color: red;
  height: 100px;
  border: 1px solid red;
}
</style>

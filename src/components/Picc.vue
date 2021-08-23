<template>
  <div class="safe flex-jc-center tl-center">
    <i class="iconfont icon-safe"></i>
    <span>平台用户信息安全由</span>
    <img class="picc-img" src="../assets/images/brand_picc_new.png"/>
    <span>承保</span>
  </div>
</template>

<script>
export default {
name: "Picc"
}
</script>

<style scoped>
.safe{
  margin-top:20px;
}
.safe span{
  color: #9C9C9C;
}
.safe i{
  color: #25b513;
  position: relative;
  top: 1px;
}
.safe{
  font-size: 12px;
}
.picc-img{
  width: 87px;
  height: 12px;
  vertical-align: middle;
}
</style>
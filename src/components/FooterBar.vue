<template>
  <div id="nav">
    <router-link to="/">
      <i class="iconfont icon-index-copy"></i>
      <label>首页</label>
    </router-link>
    <router-link to="/live">
      <i class="iconfont icon-dianshizhiboguankanshipinbofangmeiti"></i>
      <label>直播</label>
    </router-link>
    <router-link to="/category">
      <i class="iconfont icon-fenlei"></i>
      <label>分类</label>
    </router-link>
    <router-link to="/member">
      <i class="iconfont icon-gerenzhongxin-jihuo"></i>
      <label>个人中心</label>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "FooterBar",

}
</script>

<style scoped>
#nav {
  display: flex;
  position: fixed;
  bottom: 0;
  width: 100%;
  background: #ffffff;
  padding: 5px 0;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  display: flex;
  flex: 1;
  flex-direction: column;
}
#nav a i{
  font-size: 20px;
}
#nav a lable{
  margin-top: 5px;
  font-size: 16px;
}
#nav a.router-link-exact-active {
  color: #E02E24;
}
a{
  text-align: center;
}
</style>
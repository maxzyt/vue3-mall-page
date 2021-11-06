<template>
  <div class="live flex flex-jc-sb">
    <div class="content pr mt-10" v-for="(item, index) in data" :key="item.id" @click="goUrl">
      <div class="img-box">
        <img :src="domain+item.image"/>
      </div>
      <div class="views flex">
        <img src="../assets/images/0c0d8168-b69c-4a18-adfe-342caf303225.gif"/>
        <div class="col-white fs-12">{{item.watch}}观看</div>
      </div>
      <div class="title">{{item.title}}</div>
    </div>
  </div>
</template>

<script>
import {Toast} from 'vant';
export default {
  name: "LiveList",
  props: {
    data: Array
  },
  setup(){
    const domain=process.env.VUE_APP_a;
    const goUrl=()=>{
      Toast("开发中..(●'◡'●)");
    }
    return {
      domain,
      goUrl
    }
  }
}
</script>

<style scoped>
.live .content .title{
  position: absolute;
  left: 5px;
  bottom: 0;
  font-size: 14px;
  color: #ffffff;
  overflow: hidden;
  padding: 5px 0;
  text-overflow: ellipsis;
  right: 5px;
  white-space: nowrap;
  text-align: left;
}
.live .content .views{
  background: rgba(0,0,0,.5);
  border-radius: 0px 0px 5px 0px;
}
.live .content .views div{
  padding: 0 3px;
}
.live .content .views img{
  width: 58px;
  height: 16px;
}
.live .content .views{
  position: absolute;
  top: 0;
  left: 0;
}
.live .content .img-box, .content .img-box img{
  width: 100%;
  height: 100%;
  border-radius: 3px;
}
.live .content{
  position: relative;
  width: 172px;
  height: 258px;
}
.live-box .live{
  flex-wrap: wrap;
  padding: 0 10px 10px 10px;
}
</style>
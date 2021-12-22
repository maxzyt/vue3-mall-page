<template>
<div class="goodlist">
  <div class="top">
  <van-nav-bar
      :title="headName"
      left-text=""
      right-text=""
      left-arrow
      @click-left="onClickLeft"
  />
  <div class="flex flex-jc-sb sort-box bg-white">
    <div class="flex" :class="orderby == 0 ? 'active' : ''" @click="switchOrderby(0)">
      <span>综合</span>
      <i class="iconfont icon-xiajiantou fs-20 jiantou1"></i>
    </div>
    <div :class="orderby == 1 ? 'active' : ''" @click="switchOrderby(1)">
      <span>销量</span>
    </div>
    <div class="flex pr" :class="orderby == 2 ? 'active' : ''" @click="switchOrderby(2)">
      <span>价格</span>
      <div class="flex flex-column icon-box">
        <i class="iconfont icon-caret-up fs-12" :class="orderby == 2 && pricesort == 0 ? 'active' : ''"></i>
        <i class="iconfont icon-xiajiantou fs-12" :class="orderby == 2 && pricesort == 1 ? 'active' : ''"></i>
      </div>
    </div>
  </div>
  </div>
  <!--商品列表开始-->
  <van-list
      v-model:loading="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
  >
    <div class="list-box">
      <div class="good-box" v-for="(item, index) in goodItems" :key="item.id" @click="goDetail(item.id)">
        <div>
          <img :src="domain+item.image"/>
        </div>
        <div class="info-box pd10">
          <p>{{item.name}}</p>
          <p class="col-gray fs-12 pd-10-0">{{ item.policy }}</p>
          <p>
            <span class="col-red">¥</span>
            <span class="col-red fs-16">{{ item.price }}</span>
            <span class="fs-12 col-gray">已拼{{ item.sale }}件</span>
<!--            <img :src="item.headPic"/>-->
          </p>
        </div>
      </div>
    </div>
  </van-list>
  <!--商品列表结束-->
</div>
</template>

<script>
import {reactive, toRefs, onMounted} from 'vue'
import { useRouter, useRoute } from 'vue-router'
import GoodCpt from "../components/GoodListCpt";
import { NavBar,List } from 'vant';
import {goodList} from '../api/gooddetail';
export default {
  name: "goodlist",
  components: {
    GoodCpt,
    [NavBar.name]: NavBar,
    [List.name]: List
  },
  setup() {
    const router = useRouter()
    const route = useRoute()
    const domain=process.env.VUE_APP_a
    const state = reactive({
      headName: '商品列表',
      id:0,
      page:1,
      limit:6,
      orderby: 0,//0综合1销量2价格
      pricesort: 1, //0升序1降序
      loading: false,
      finished: false,
      goodItems: [
      ],
    })
    onMounted(() => {
      const { id } = route.params;console.log('id:'+id);
      state.id=id;
    })
    const onLoad = () => {
      setTimeout(() => {
        console.log('cid:'+state.id);
        goodList({cid:state.id,page:state.page,limit:state.limit,priceSort:state.pricesort,orderby:state.orderby}).then((res)=>{
          if(res.code==1){
            state.goodItems=state.goodItems.concat(res.data);
          }
          // 加载状态结束
          state.loading = false;
          if(res.data.length==0){
            state.finished=true;
          }else{
            state.page=state.page+1;
          }
        })
      }, 0);
    };
    const switchOrderby = (param) => {
      state.orderby = param
      if(param == 2) {
        state.pricesort = 1-state.pricesort
      }
      state.page=1;
      goodList({cid:state.id,page:state.page,limit:state.limit,priceSort:state.pricesort,orderby:state.orderby}).then((res)=>{
        if(res.code==1){
          state.goodItems=res.data;
        }
        // 加载状态结束
        state.loading = false;
        if(res.data.length==0){
          state.finished=true;
        }else{
          state.page=state.page+1;
        }
      })
    }
    const goDetail = (id) => {
      router.push(`/gooddetail/${id}`);
    }
    const onClickLeft = () => {
      window.history.back();
    }
    return {
      goDetail,
      switchOrderby,
      onClickLeft,
      ...toRefs(state),
      onLoad,
      domain
    }
  }
}
</script>

<style scoped>
#app{
  padding-bottom: 0;
}
.goodlist{
  padding-top: 90px;
}
.top{
  position: fixed;
  top: 0;
  width: 100%;
  height: 45px;
  box-sizing: border-box;
  z-index: 999;
  background-color: #ffffff;
}
.banner-box img{
  width: 100%;
}
.top{
  border-bottom: 1px solid #f2f2f2;
}
.top .active, .top .active .jiantou1{
  color: #e02e24!important;
}
.iconfont{
  color: #ccc;
}
.sort-box{
  padding: 10px 20px;
}
.pr .icon-box{
  width: 10px;
}
.pr div i:nth-child(2){
  position: absolute;
  top: 5px;
}
.pr div i:first-child{
  position: absolute;
  top: -3px;
}
.list-box{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  background-color: #ffffff;
}
.good-box{
  width: 49.5%;
}
.info-box p:first-child{
  height: 20px;
  overflow: hidden;
  white-space: nowrap;
  /*word-break: break-all;*/
}
.info-box p{
  text-align: left;
}
.info-box img{
  float: right;
  width: 20px;
  height: 20px;
  border-radius: 50%;
}
.banner-box img{
  width: 100%;
}
</style>
<template>
<div class="member-box">
  <div class="top pd20">
    <div class="flex">
      <div class="header">
        <img src="../assets/images/Q0R4VnJ5dmVEZlhoem5LZ0FDRmJ0dW9NdmNEUGh3RmVZUT09djA0-1604142726.png"/>
      </div>
      <div class="nickname flex flex-ai-center">
        <span class="fs-20">洋滔</span>
        <i class="iconfont icon-shouji fs-20"></i>
      </div>
    </div>
    <div class="flex flex-jc-sb order-header mg-20-0">
      <div class="fs-18">我的订单</div>
      <div class="col-gray" @click="goOrder(0)">
        <span>查看全部</span>
        <i class="iconfont icon-youjiantou"></i>
      </div>
    </div>
    <div class="flex flex-jc-sb order-list">
      <div class="flex flex-column flex-ai-center" @click="goOrder(1)">
        <i class="iconfont icon-daifukuan fs-26"></i>
        <span>待付款</span>
      </div>
      <div class="flex flex-column flex-ai-center" @click="goOrder(2)">
        <i class="iconfont icon-shizhong fs-26"></i>
        <span>待发货</span>
      </div>
      <div class="flex flex-column flex-ai-center" @click="goOrder(3)">
        <i class="iconfont icon-daifahuo1 fs-26"></i>
        <span>待收货</span>
      </div>
      <div class="flex flex-column flex-ai-center" @click="goOrder(4)">
        <i class="iconfont icon-pingjia fs-26"></i>
        <span>评价</span>
      </div>
    </div>
  </div>
  <background height="10px"></background>
  <div class="pd20 tool-box">
    <div class="flex flex-jc-sb tool-list">
      <div class="flex flex-column flex-ai-center" @click="editAddress">
        <i class="iconfont icon-dizhi1 fs-26"></i>
        <span>收货地址</span>
      </div>
      <div class="flex flex-column flex-ai-center" @click="collect">
        <i class="iconfont icon-shangpinshoucang fs-26"></i>
        <span>商品收藏</span>
      </div>
      <div class="flex flex-column flex-ai-center" @click="history">
        <i class="iconfont icon-lishiliulan fs-26"></i>
        <span>历史浏览</span>
      </div>
      <div class="flex flex-column flex-ai-center" @click="set">
        <i class="iconfont icon-shezhi fs-26"></i>
        <span>设置</span>
      </div>
    </div>
  </div>
  <background height="10px"></background>
  <div class="recommend-box">
    <div class="flex flex-jc-center pd10">
      <div class="tuijian-box flex flex-jc-center flex-ai-center">
        <i class="iconfont icon-weibiaoti2fuzhi13 col-white"></i>
      </div>
      <div class="col-red ml-10 flex flex-jc-center flex-ai-center">精选推荐</div>
    </div>
    <van-list
        v-model:loading="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
    >
    <GoodCpt :data="goodItems"></GoodCpt>
    </van-list>
  </div>
  <FooterBar></FooterBar>
</div>
</template>

<script>
import { onMounted, reactive, toRefs } from 'vue'
import { useRouter } from 'vue-router'
import {List} from 'vant';
import background from "../components/background";
import GoodCpt from "../components/GoodListCpt"
import FooterBar from "../components/FooterBar";
import {recommend} from "../api";
import {history} from "../api/user";

export default {
  name: "member",
  components: {
    FooterBar,
    background,
    GoodCpt,
    [List.name]: List,
  },
  setup() {
    const router = useRouter()
    const domain=process.env.VUE_APP_a;
    const state = reactive({
      goodItems: [
      ],
      loading: false,
      finished: false,
      page:1,
      limit:4
    });
    const goOrder = (type) => {
      router.push(`/order/${type}`)
    }
    const editAddress = () => {
      router.push(`/address`)
    }
    const collect = () => {
      router.push(`/collect`);
    }
    const history = () => {
      router.push(`/history`);
    }
    const set = () => {
      router.push(`/set`);
    }
    const onLoad = () => {
      recommend({page:state.page,limit:state.limit}).then((res)=>{
        // 加载状态结束
        state.loading = false;
        if(res.code==1){
          state.goodItems=state.goodItems.concat(res.data);
          state.page++;
        }else{
          state.finished=true;
        }
      })
    };
    return {
      ...toRefs(state),
      goOrder,
      editAddress,
      collect,
      history,
      set,
      onLoad,
      domain
    }
  }
}
</script>

<style scoped>
.header img{
  width: 60px;
  height: 60px;
  border-radius: 50%;
}
.nickname{
  padding-left: 10px;
}
.icon-shouji{
  color: cornflowerblue;
  padding-left: 5px;
}
.order-list div span, .tool-list div span{
  padding-top:10px;
}
.order-list div i{
  color: #9c9c9c;
}
.tool-list div i{
  color: #e02e24;
}
.tuijian-box{
  background-color: #e02e24;
  border-radius: 50%;
  width: 25px;
  height: 25px;
}
</style>
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
      <div class="flex flex-column flex-ai-center">
        <i class="iconfont icon-daifukuan fs-26"></i>
        <span>待付款</span>
      </div>
      <div class="flex flex-column flex-ai-center">
        <i class="iconfont icon-shizhong fs-26"></i>
        <span>待发货</span>
      </div>
      <div class="flex flex-column flex-ai-center">
        <i class="iconfont icon-daifahuo1 fs-26"></i>
        <span>待收货</span>
      </div>
      <div class="flex flex-column flex-ai-center">
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
        <span>收获地址</span>
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
    <GoodCpt :data="goodItems"></GoodCpt>
  </div>
  <FooterBar></FooterBar>
</div>
</template>

<script>
import { onMounted, reactive, toRefs } from 'vue'
import { useRouter } from 'vue-router'
import background from "../components/background";
import GoodCpt from "../components/GoodListCpt"
import FooterBar from "../components/FooterBar";
export default {
  name: "member",
  components: {
    FooterBar,
    background,
    GoodCpt
  },
  setup() {
    const router = useRouter()
    const state = reactive({
      goodItems: [
        {
          id: 1,
          img: require('../assets/images/goodlist1.png'),
          title: '夏季2021学院风',
          desc: '极速退款',
          price: 18.96,
          pinAmount: '3万',
          headPic: require('../assets/images/headpic.png')
        },
        {
          id: 2,
          img: require('../assets/images/goodlist2.png'),
          title: '雪纺套装裙女夏季2021新款时尚气质宽松显瘦两件套碎花半身裙子潮',
          desc: '买贵包赔',
          price: 45,
          pinAmount: '4.7万',
          headPic: require('../assets/images/headpic.png')
        },
        {
          id: 3,
          img: require('../assets/images/goodlist3.png'),
          title: '2021新款夏季甜美日系修身显瘦短衫褶皱设计可爱搭肩+挂脖小吊带',
          desc: '24小时发货',
          price: 39,
          pinAmount: '3.6万',
          headPic: require('../assets/images/headpic.png')
        },
        {
          id: 4,
          img: require('../assets/images/goodlist4.png'),
          title: '单/夏季新款韩版小清新宽松背带连衣裙女+短袖碎花上衣两件套装潮',
          desc: '退货包运费',
          price: 69,
          pinAmount: '4.9万',
          headPic: require('../assets/images/headpic.png')
        }
      ]
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
    console.log(window.history);
    return {
      ...toRefs(state),
      goOrder,
      editAddress,
      collect,
      history,
      set
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
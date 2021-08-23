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
  <GoodCpt :data="goodItems"/>
  <!--商品列表结束-->
</div>
</template>

<script>
import {reactive, toRefs, onMounted} from 'vue'
import { useRouter, useRoute } from 'vue-router'
import GoodCpt from "../components/GoodListCpt";
import { NavBar } from 'vant';
export default {
  name: "goodlist",
  components: {
    GoodCpt,
    [NavBar.name]: NavBar
  },
  setup() {
    const router = useRouter()
    const route = useRoute()
    const state = reactive({
      headName: '商品列表',
      orderby: 0,//0综合1销量2价格
      pricesort: 1, //0升序1降序
      goodItems: [
        {
          id: 1,
          img: require('../assets/images/goodlist1.png'),
          title: '夏季2021学院风',
          desc: '极速退款',
          price: 18.96,
          pinAmount: '3万',
          headPic: require('../assets/images/headpic.png'),
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
      ],
    })
    onMounted(() => {
      const { id } = route.params;
      console.log(id);
    })
    const switchOrderby = (param) => {
      state.orderby = param
      if(param == 2) {
        state.pricesort = 1-state.pricesort
      }
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
      ...toRefs(state)
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
</style>
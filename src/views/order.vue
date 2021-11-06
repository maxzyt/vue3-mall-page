<template>
  <Navbar headName="我的订单"></Navbar>
<div class="order-box bg-gray">
  <div class="top pd10">
    <div class="search-box flex flex-jc-center bg-white">
      <i class="iconfont icon-sousuo fs-22"></i>
      <span class="ml-5">搜索订单</span>
    </div>
  </div>
  <div class="navBox">
    <ul class="ul">
      <li
          class="li"
          :class="{'li-activate': navIndex == index}"
          v-for="(item, index) in items"
          :key="index"
          @click="goList(index)"
      >
        {{item.label}}
      </li>
    </ul>
  </div>
  <div class="orderlist-box">
    <div v-for="(item, index) in orderItem" :key="item.id" class="pd10 order-box bg-white">
      <div class="flex flex-jc-sb" @click="goDetail(item.id)" v-for="(item2,index2) in item.ordergood" :key="item2.id">
        <div class="img-box">
          <img :src="domain+item2.good_image"/>
        </div>
        <div class="basic-info ml-10 flex1">
          <div class="good-name">{{ item2.good_name }}</div>
          <div class="attr-name col-gray fs-13 overhideline1">{{ item2.specs }}</div>
          <div class="policy col-white mt-5"><span>{{ item2.policy }}</span></div>
        </div>
        <div class="price">
          <div>￥{{ item2.amount }}</div>
          <div class="tl-right">×{{ item2.price }}</div>
        </div>
      </div>
      <div class="ordermoney flex flex-rr">
        <div>应付：￥{{ item.money }}(免运费)</div>
      </div>
      <div class="btn-box flex flex-rr">
<!--        <div>再次拼单</div>-->
        <div>删除订单</div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import { onMounted, reactive, toRefs } from 'vue';
import { useRoute , useRouter } from 'vue-router'
import background from "../components/background";
import Navbar from "../components/Navbar";
import {orderList} from "../api/order";

export default {
  name: "order",
  components: {
    background,
    Navbar
  },
  setup() {
    const domain=process.env.VUE_APP_a
    const router = useRouter()
    const route = useRoute()
    const state = reactive({
      navIndex: 0,
      items: [
        {
          label: '全部'
        },
        {
          label: '待付款'
        },
        {
          label: '待发货'
        },
        {
          label: '待收货'
        },
        {
          label: '评价'
        }
      ],
      orderItem: [
      ]
    })
    onMounted(()=>{
      const {type} = route.params;
      state.navIndex=type;
      orderList({status:state.navIndex}).then((res)=>{
        if(res.code==1){
          state.orderItem=res.data;
        }
      })
    })
    const goList = (index) => {
      console.log(index)
      state.navIndex=state.status=index;
      orderList({status:state.status}).then((res)=>{
        if(res.code==1){
          state.orderItem=res.data;
        }else{
          state.orderItem=[];
        }
      })
    }
    const goDetail = (id) =>
    {
      router.push(`/orderdetail/${id}`)
    }
    return {
      ...toRefs(state),
      goList,
      goDetail,
      domain
    }
  }
}
</script>

<style scoped>
.img-box{
  width: 82px;
  height: 82px;
}
.orderlist-box .img-box img{
  width: 82px!important;
  height: 82px;
}
.search-box{
  height: 35px;
  line-height: 35px;
  color: #9C9CA3;
}
.navBox {
  width: 100%;
  height: 44px;
  background: #ffffff;
}
.navBox .ul {
  width: 100%;
  padding: 0;
  margin: 0;
  list-style: none;
  overflow: auto;
  -webkit-overflow-scrolling : touch;
  white-space: nowrap;
  position: relative;
  padding: 0 5px;
  box-sizing: border-box;
  border-bottom: 1px solid #ededed;
}
.navBox .ul .li {
  width: auto;
  height: 100%;
  line-height: 44px;
  margin: 0 15px;
  display: inline-block;
  position: relative;
  font-size: 14px;
}
.navBox .ul .li .navBox-li-line {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background: #e02e24;
}
.navBox .ul .li-activate {
  border-bottom: 3px solid #E02E24;
  color: #e02e24;
}
.navBox .ul::-webkit-scrollbar {
  display: none;
}
.basic-info{
  width: 213px;
}
.policy span{
  background-color: #25b513;
  border-radius: 3px;
  padding: 3px;
}
.ordermoney{
  margin: 20px 0;
}
.btn-box div{
  padding: 5px;
  font-size: 15px;
  border: 1px solid #ccc;
  border-radius: 3px;
  margin-right: 10px;
}
.btn-box div:first-child{
  margin-right: 0;
}
.orderlist-box{
  margin-top:10px;
}
.orderlist-box:first-child{
  margin-top: 0;
}
</style>
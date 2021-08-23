<template>
<Navbar :headName="headName" @dosomething="dosomething"></Navbar>
<div class="orderdetail-box bg-white">
  <div class="top pd20">
    <div class="flex order-status col-white">
      <i class="iconfont icon-duihao fs-24"></i>
      <span class="ml-10 fs-18">待付款</span>
    </div>
  </div>
  <div class="address bg-white">
    <div class="content pd20">
      <div class="flex col-black">
        <i class="iconfont icon-dizhi fs-18"></i>
        <span class="ml-5">王小儿</span>
        <span class="ml-10 flex flex-ai-center">15288389899</span>
      </div>
      <div class="mt-10 col-gray">
        北京市东城区南无厘
      </div>
    </div>
  </div>
  <div class="pd20 order-box bg-white mt-10">
    <div class="flex flex-jc-sb">
      <div class="img-box">
        <img :src="orderGoods.img"/>
      </div>
      <div class="basic-info ml-10 flex1">
        <div class="good-name">{{ orderGoods.goodName }}</div>
        <div class="attr-name col-gray fs-13 overhideline1">{{ orderGoods.goodAttr }}</div>
        <div class="policy col-white mt-5"><span>{{ orderGoods.policy }}</span></div>
      </div>
      <div class="price">
        <div>￥{{ orderGoods.goodNum }}</div>
        <div class="tl-right">×{{ orderGoods.goodPrice }}</div>
      </div>
    </div>
  </div>
  <background height="10px"></background>
  <div class="order-info pd20">
    <div class="ordersn">
      <div>
        订单编号：&nbsp;&nbsp;{{ order.ordersn }}
      </div>
      <div class="mt-10">
        下单时间：&nbsp;&nbsp;{{ order.time }}
      </div>
      <div class="h20"></div>
    </div>
    <div class="mt-20 flex flex-jc-sb">
      <div>商品金额</div>
      <div>￥ {{ order.payMoney }}</div>
    </div>
    <div class="mt-20 flex flex-jc-sb">
      <div>运费</div>
      <div>￥ 0.00</div>
    </div>
    <div class="mt-20 flex flex-jc-sb">
      <div>优惠券</div>
      <div>无可用</div>
    </div>
  </div>
  <div class="footer flex flex-rr pd-10-0">
    <div class="ml-10">
      <van-button round color="linear-gradient(to right,#fc672b, #f63119)">立即支付</van-button>
    </div>
    <div>
      <van-button round plain>取消订单</van-button>
    </div>
  </div>
</div>
</template>

<script>
import { onMounted , reactive, toRefs } from 'vue'
import { useRouter , useRoute } from 'vue-router'
import background from "../components/background";
import { Button, NavBar } from 'vant'
import Navbar from "../components/Navbar";
export default {
  name: "orderdetail",
  components: {
    background,
    [Button.name]: Button,
    [NavBar.name]: NavBar,
    Navbar,
  },
  setup() {
    const route = useRoute()
    const state = reactive({
      order: {
        time: '2021-08-01 15:00:09',
        ordersn: 'MALL87658028990',
        status: 0,
        status_text: '待付款',
        consignee: '张三',
        mobile: '15290938567',
        address: '河南省许昌市华生大道212号',
        payMoney: 99
      },
      orderGoods: {
        img: require('../assets/images/order1.png'),
        goodName: '[超低价]陕西红富士苹果当季冰糖心丑苹果新鲜水果5/10斤整箱批发',
        goodAttr: '精选红富士,带箱10斤【精选特大果】更脆更甜',
        goodPrice: 99,
        goodNum: 1,
        policy: '包退换'
      },
      headName: '订单详情'
    })
    const dosomething = () => console.log('dosomething');
    onMounted(() => {
      const { id } = route.params
      console.log(id)
    })
    return {
      ...toRefs(state),
      dosomething,
    }
  }
}
</script>

<style scoped>
.top{
  background: linear-gradient(to right,#fc672b, #f63119);
  height: 100px;
}
.address{
  width: calc(100% - 20px);
  margin:0 auto;
  margin-top: -50px;
  border-radius: 10px;
  box-shadow:0px 3px 3px #f2f3f5;
}
.img-box{
  width: 82px;
  height: 82px;
}
.basic-info{
  width: 213px;
}
.policy span{
  background-color: #25b513;
  border-radius: 3px;
  padding: 3px;
}
.ordersn{
  border-bottom: 1px solid #dcdee0;
}
.footer{
  position: fixed;
  bottom: 0;
  width: 100%;
  border-top: 1px solid #dcdee0;
}

</style>
<template>
  <Navbar :headName="headName" @dosomething="dosomething"></Navbar>
  <div class="orderdetail-box bg-white">
    <div class="top pd20">
      <div class="flex order-status col-white">
        <i class="iconfont icon-duihao fs-24"></i>
        <span class="ml-10 fs-18">{{ order.status_text }}</span>
      </div>
    </div>
    <div class="address bg-white">
      <div class="content pd20">
        <div class="flex col-black">
          <i class="iconfont icon-dizhi fs-18"></i>
          <span class="ml-5">{{ order.consignee }}</span>
          <span class="ml-10 flex flex-ai-center">{{ order.mobile }}</span>
        </div>
        <div class="mt-10 col-gray">
          {{ order.address }}
        </div>
      </div>
    </div>
    <div class="pd20 order-box bg-white mt-10">
      <div class="flex flex-jc-sb" v-for="(item,index) in orderGoods" :key="item.id">
        <div class="img-box">
          <img :src="domain+item.good_image"/>
        </div>
        <div class="basic-info ml-10 flex1">
          <div class="good-name">{{ item.good_name }}</div>
          <div class="attr-name col-gray fs-13 overhideline1">{{ item.specs }}</div>
          <div class="policy col-white mt-5"><span>{{ item.policy }}</span></div>
        </div>
        <div class="price">
          <div>￥{{ item.amount }}</div>
          <div class="tl-right">×{{ item.price }}</div>
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
          下单时间：&nbsp;&nbsp;{{ order.createtime_text }}
        </div>
        <div class="h20"></div>
      </div>
      <div class="mt-20 flex flex-jc-sb">
        <div>商品金额</div>
        <div>￥ {{ order.money }}</div>
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
      <div class="ml-10" v-if="!order.status">
        <van-button round color="linear-gradient(to right,#fc672b, #f63119)">立即支付</van-button>
      </div>
      <div v-if="!order.status">
        <van-button round plain>取消订单</van-button>
      </div>
    </div>
  </div>
</template>

<script>
import {onMounted, reactive, toRefs} from 'vue'
import {useRouter, useRoute} from 'vue-router'
import background from "../components/background";
import {Button, NavBar} from 'vant'
import Navbar from "../components/Navbar";
import {orderDetail} from "../api/order";

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
    const domain = process.env.VUE_APP_a;
    const state = reactive({
      order: {
      },
      orderGoods: {
      },
      headName: '订单详情'
    })
    const dosomething = () => console.log('dosomething');
    onMounted(() => {
      const {id} = route.params
      console.log(id)
      orderDetail({id: id}).then((res) => {
        console.log(res);
        if (res.code == 1) {
          state.order = res.data;
          state.orderGoods = res.data.ordergood
        }
      })
    })
    return {
      ...toRefs(state),
      domain,
      dosomething,
    }
  }
}
</script>

<style scoped>
.top {
  background: linear-gradient(to right, #fc672b, #f63119);
  height: 100px;
}

.address {
  width: calc(100% - 20px);
  margin: 0 auto;
  margin-top: -50px;
  border-radius: 10px;
  box-shadow: 0px 3px 3px #f2f3f5;
}

.img-box {
  width: 82px;
  height: 82px;
}

.basic-info {
  width: 213px;
}

.policy span {
  background-color: #25b513;
  border-radius: 3px;
  padding: 3px;
}

.ordersn {
  border-bottom: 1px solid #dcdee0;
}

.footer {
  position: fixed;
  bottom: 0;
  width: 100%;
  border-top: 1px solid #dcdee0;
}

</style>
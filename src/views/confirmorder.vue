<template>
  <Navbar headName="确认订单"></Navbar>
  <div class="confirmorder-box">
    <div class="flex flex-jc-sb address-box pd10">
      <div class="plus tl-center">+</div>
      <div class="flex1 tl-left" @click="addAddress">手动添加收货地址</div>
      <i class="iconfont icon-youjiantou"></i>
    </div>
    <div class="bg-white default-address flex flex-jc-sb pd20" v-if="address">
      <div class="left">
        <div class="fs-18">
          <span>{{address.name}}</span>
          <span class="ml-10">{{address.mobile}}</span>
        </div>
        <div class="mt-10">
          <span class="default-label">默认</span>
          <span>{{address.address}}</span>
        </div>
      </div>
    </div>
    <div class="flex flex-jc-sb good-box pd10">
      <div class="img-box">
        <img :src="domain+good.image"/>
      </div>
      <div class="flex1">
        <div class="mb-5">{{good.name}}</div>
        <div class="col-gray attr-text" v-for="(item,index) in specs">{{item.specs.name}}:{{item.name}}</div>
        <div class="mt-5">
          <span>¥{{good.price}}/件</span>
          <span class="speed-refund fs-12">极速退款</span>
        </div>
      </div>
    </div>
    <div>
      <van-cell center title="购买数量">
        <template #value>
          <van-stepper v-model="amount"></van-stepper>
        </template>
      </van-cell>
    </div>
    <background height="10px"/>
    <div>
      <van-radio-group v-model="payway">
        <van-cell-group>
          <van-cell title="微信支付" clickable @click="payway = '1'">
            <template #right-icon>
              <van-radio name="1"/>
            </template>
          </van-cell>
          <van-cell title="支付宝" clickable @click="payway = '2'">
            <template #right-icon>
              <van-radio name="2"/>
            </template>
          </van-cell>
        </van-cell-group>
      </van-radio-group>
    </div>
    <div class="footer">
      <Picc></Picc>
      <div class="flex pay-box">
        <div class="left flex1">
          <span>实付款:</span>
          <span class="fs-20 col-red">
          <i>¥</i>
          {{paid}}
        </span>
          <span class="col-red">免运费</span>
        </div>
        <div class="pay-btn fs-16" @click="createOrder">立即支付</div>
      </div>
    </div>
  </div>
</template>

<script>
import {onMounted, reactive, toRefs,watch} from 'vue'
import {useRoute, useRouter} from 'vue-router'
import background from "../components/background"
import Picc from "../components/Picc"
import {Cell, Stepper, CellGroup, RadioGroup, Radio} from "vant"
import Navbar from "../components/Navbar";
import {createOrderApi,initOrder} from "../api/order";
import {Toast} from 'vant';
export default {
  name: "confirmorder",
  components: {
    Picc,
    background,
    Navbar,
    [Stepper.name]: Stepper,
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup,
    [RadioGroup.name]: RadioGroup,
    [Radio.name]: Radio,
  },
  setup() {
    const route = useRoute()
    const router = useRouter()
    const domain=process.env.VUE_APP_a
    const state = reactive({
      id:0,
      ids:'',
      amount: 1,
      payway: '1',
      good:{},
      specs:[],
      address:{},
      paid:0
    })
    watch(()=>state.amount,(newVal,oldVal)=>{
      console.log('old:'+oldVal+'new:'+newVal)
      state.paid=newVal*(state.good.price);
    });
    onMounted(() => {
      const {id, ids, amount} = route.params;
      console.log(id)
      console.log(ids)
      console.log(amount)
      state.id=id;
      state.ids=ids;
      state.amount = amount;
      initOrder({goodId:id,attrIds:ids,amount:amount}).then((res)=>{
        if(res.code==1){
          state.good=res.data.row;
          state.specs=res.data.specs;
          state.address=res.data.address;
          state.paid=state.amount*res.data.row.price;
        }
      })
    })
    const createOrder = () => {
      const params = {goodId: state.id, specs: state.ids, amount: state.amount, payWay: state.payway};
      console.log(params);
      createOrderApi(params).then((res)=>{
        if(res.code==1){
          Toast(res.msg)
          setTimeout(()=>{
            router.push(`/orderdetail/`+res.data);
          },1000)
        }
      })
    }
    const addAddress = () => {
      router.push(`/addaddress`);
    }
    return {
      addAddress,
      ...toRefs(state),
      createOrder,
      domain
    }
  }
}
</script>

<style scoped>
.footer {
  width: 100%;
  position: fixed;
  bottom: 0;
}

.pay-box .left {
  line-height: 53px;
  padding-left: 30px;
  background-color: #ffffff;
}

.pay-box .pay-btn {
  width: 146px;
  height: 53px;
  line-height: 53px;
  background-color: #e02e24;
  color: #fff;
  text-align: center;
}

.footer .pay-box {
  border-top: 1px solid #e0e0e0;
}

.pay-box .left span i {
  padding: 0 3px;
  font-style: normal;
}

.plus {
  background-color: #e02e24;
  color: #fff;
  width: 17px;
  height: 17px;
  line-height: 17px;
  font-size: 18px;
}

.address-box div:nth-child(2) {
  padding-left: 10px;
}

.address-box {
  border-bottom: 1px solid #e0e0e0;
}

.good-box {
  background-color: #f4f4f4;
}

.good-box .img-box {
  width: 90px;
  height: 90px;
}

.good-box img {
  width: 100%;
  height: 100%;
}

.good-box .speed-refund {
  padding: 4px;
  border: 1px solid #339B29;
  color: #339B29;
  border-radius: 2px;
  margin-left: 2px;
}

.good-box .flex1 {
  padding-left: 10px;
}

.good-box .flex1 div {
  text-align: left;
  font-size: 13px;
}

.attr-text {
  font-size: 11px;
}

.confirmorder-box {
  background-color: #f4f4f4;
  height: 100vh;
}

.address-box {
  background-color: #ffffff;
}
.default-address .default-label{
  background-color: #e02e24;
  color: #fff;
  font-size: 12px;
  padding: 4px;
  border-radius: 10px;
}
.default-label + span{
  padding: 4px;
}
</style>
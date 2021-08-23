<template>
  <Navbar headName="确认订单"></Navbar>
<div class="confirmorder-box">
  <div class="flex flex-jc-sb address-box pd10">
    <div class="plus tl-center">+</div>
    <div class="flex1 tl-left" @click="addAddress">手动添加收货地址</div>
    <i class="iconfont icon-youjiantou"></i>
  </div>
  <div class="flex flex-jc-sb good-box pd10">
    <div class="img-box">
      <img src="../assets/images/confirmorder.png"/>
    </div>
    <div class="flex1">
      <div class="mb-5">夏季2021新款学院风修身显瘦甜美减龄格子翻领短袖衬衫女时尚套装</div>
      <div class="col-gray attr-text">颜色:套装</div>
      <div class="col-gray attr-text">尺码:M</div>
      <div class="mt-5">
        <span>¥28.10/件</span>
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
            <van-radio name="1" />
          </template>
        </van-cell>
        <van-cell title="支付宝" clickable @click="payway = '2'">
          <template #right-icon>
            <van-radio name="2" />
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
          19.8
        </span>
        <span class="col-red">免运费</span>
      </div>
      <div class="pay-btn fs-16">立即支付</div>
    </div>
  </div>
</div>
</template>

<script>
import { onMounted, reactive, toRefs } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import background from "../components/background"
import Picc from "../components/Picc"
import { Cell, Stepper, CellGroup, RadioGroup, Radio } from "vant"
import Navbar from "../components/Navbar";
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
    const state = reactive({
      amount: 1,
      payway: '1'
    })
    onMounted(() => {
      const {id, ids, attrids} = route.params;
      console.log(id)
      console.log(ids)
      console.log(attrids)
    })
    const addAddress = () => {
      router.push(`/addaddress`);
    }
    return {
      addAddress,
      ...toRefs(state)
    }
  }
}
</script>

<style scoped>
.footer{
  width: 100%;
  position: fixed;
  bottom: 0;
}
.pay-box .left{
  line-height: 53px;
  padding-left: 30px;
  background-color: #ffffff;
}

.pay-box .pay-btn{
  width: 146px;
  height: 53px;
  line-height: 53px;
  background-color: #e02e24;
  color: #fff;
  text-align: center;
}
.footer .pay-box{
  border-top:1px solid #e0e0e0;
}
.pay-box .left span i{
  padding: 0 3px;
  font-style: normal;
}
.plus{
  background-color: #e02e24;
  color: #fff;
  width: 17px;
  height: 17px;
  line-height: 17px;
  font-size: 18px;
}
.address-box div:nth-child(2){
  padding-left: 10px;
}
.address-box{
  border-bottom: 1px solid #e0e0e0;
}
.good-box{
  background-color: #f4f4f4;
}
.good-box .img-box{
  width: 90px;
  height: 90px ;
}
.good-box img{
  width: 100%;
  height: 100%;
}
.good-box .speed-refund{
  padding: 4px;
  border:1px solid #339B29;
  color: #339B29;
  border-radius: 2px;
  margin-left: 2px;
}
.good-box .flex1{
  padding-left: 10px;
}
.good-box .flex1 div{
  text-align: left;
  font-size: 13px;
}
.attr-text{
  font-size: 11px;
}
.confirmorder-box{
  background-color: #f4f4f4;
  height: 100vh;
}
.address-box{
  background-color: #ffffff;
}
</style>
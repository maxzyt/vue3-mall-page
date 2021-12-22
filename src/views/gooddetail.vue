<template>
  <Navbar headName="商品详情" url="" @dosomething="dsm"></Navbar>
  <div class="gooddetail-box">
    <van-swipe lazy-render>
      <van-swipe-item v-for="image in images" :key="image">
        <img :src="domain+image"/>
      </van-swipe-item>
      <template #indicator="{ active }">
        <div class="custom-indicator">{{ active + 1 }}/{{ flashCount }}</div>
      </template>
    </van-swipe>
    <div class="good-info pd10">
      <div class="flex flex-jc-sb price">
        <div class="left">
          <span class="col-red fs-12">¥</span>
          <span class="col-red fs-20 fw-b">{{ row.price }}</span>
          <span class="col-red fs-12">起</span>
          <del class="col-black">¥{{ row.market_price }}</del>
        </div>
        <div class="right col-black">
          已售{{ row.sale }}件
        </div>
      </div>
      <div class="name fs-16">
        <span>{{ row.name }}</span>
        <span class="btn col-white">极速退款</span>
      </div>
      <div class="flex flex-jc-sb col-gray">
        <div>全场包邮</div>
        <div class="flex flex-jc-center flex-ai-center col-gray point">
          <div></div>
        </div>
        <div class="point2">7天无理由退货</div>
        <div class="flex flex-jc-center flex-ai-center col-gray point">
          <div></div>
        </div>
        <div class="point2">48小时发货</div>
        <div class="flex flex-jc-center flex-ai-center col-gray point">
          <div></div>
        </div>
        <div class="point2">极速退款</div>
      </div>
    </div>
    <background height="10px"/>
    <div class="content pd10">
      <p>商品详情</p>
      <div class="article-box" v-html="row.content">
      </div>
    </div>
    <div class="footer flex flex-jc-sb">
      <div class="left pd10 flex flex-jc-sb flex1">
        <div>
          <div>
            <i class="iconfont icon-zujian-icon-32"></i>
          </div>
          <div>更多</div>
        </div>
        <div @click="addCollectFnc" :class="isCollect?'col-red':''">
          <div>
            <i class="iconfont icon-icon_collect fs-18"></i>
          </div>
          <div>收藏</div>
        </div>
        <div>
          <div>
            <i class="iconfont icon-liaotian fs-18"></i>
          </div>
          <div>客服</div>
        </div>
      </div>
      <div class="right flex col-white">
        <div class="flex flex-column flex-jc-center flex1 selfbuy" @click="showPopup">
          <div class="tl-center">¥{{ row.market_price }}</div>
          <div class="tl-center">单独购买</div>
        </div>
        <div class="flex flex-column flex-jc-center flex1 teambuy" @click="showPopup">
          <div class="tl-center">¥{{ row.price }}</div>
          <div class="tl-center">发起拼单</div>
        </div>
      </div>
    </div>
  </div>
  <van-popup
      v-model:show="show"
      closeable
      position="bottom"
      :style="{ overflow: 'visible' }"
  >
    <div class="popup pd10">
      <div class="good-info flex-jc-center">
        <img :src="domain+row.image">
        <div class="flex1">
          <div class="col-red fs-18">¥20.58</div>
          <div>已选：{{ selected }}</div>
        </div>
      </div>
      <div class="attr-box" v-for="(item, key) in attrs" :key="item.id">
        <div class="tl-left fs-16">{{ item.name }}</div>
        <div class="flex flex-wrap mt-10">
          <div class="attr-text" @click="switchAttr(item2.id, item.id, item2.name)"
               :class="classObject(item2.id, item.id)" v-for="(item2, key2) in item.specsvalue" :key="item2.id">
            {{ item2.name }}
          </div>
        </div>
      </div>
      <!--    <div class="attr-box">-->
      <!--      <div class="tl-left fs-16">尺寸</div>-->
      <!--      <div class="flex flex-wrap mt-10">-->
      <!--        <div class="attr-text active">S</div>-->
      <!--        <div class="attr-text">M</div>-->
      <!--        <div class="attr-text">L</div>-->
      <!--      </div>-->
      <!--    </div>-->
      <div class="amount-box flex flex-jc-sb">
        <div class="fs-16">数量</div>
        <div class="flex">
          <div class="fs-20 flex flex-jc-center flex-ai-center" :class="amount==1?'bg-gray':'bg-normal'" @click="dec">
            -
          </div>
          <input type="number" v-model="amount"/>
          <div class="fs-20 flex flex-jc-center flex-ai-center bg-normal" @click="inc">+</div>
        </div>
      </div>
      <div class="btn-box">
        <van-button type="danger" size="large" @click="confirmOrder">确定</van-button>
      </div>
    </div>
  </van-popup>
</template>
<script>
import {useRoute, useRouter} from 'vue-router'
import {reactive, toRefs, onMounted} from 'vue'
import {Swipe, SwipeItem, Popup, Button, Toast} from 'vant'
// import background from "../components/background";
import Background from "../components/background";
import Navbar from "../components/Navbar";
import {goodDetail, addCollect} from '../api/gooddetail';

export default {
  name: "gooddetail",
  components: {
    Navbar,
    Background,
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem,
    [Popup.name]: Popup,
    [Button.name]: Button,
    Toast
  },
  setup() {
    const domain = process.env.VUE_APP_a;
    const route = useRoute()
    const router = useRouter()
    const state = reactive({
      id: 0,
      isCollect: false,
      row: {},
      images: [],
      attrs: [],
      attrResult: [],
      selected: '',
      flashCount: 2,
      amount: 1,
      show: false
    })
    onMounted(async () => {
      const {id} = route.params
      console.log(id);
      state.id = id
      await goodDetail({id: id}).then((res) => {
        state.images = res.data.gallery;
        state.row = res.data.row;
        state.attrs = res.data.specs;
        state.flashCount = res.data.gallery.length;
        state.isCollect = res.data.isCollect;
        for (var i = 0; i < res.data.specs.length; i++) {
          console.log(res.data.specs[i].id);
          state.attrResult[i] = {'id': res.data.specs[i].id, 'result': 0, 'text': ''};
        }
        console.log(state.attrResult);
      })
    })
    const showPopup = () => {
      state.show = true
    }
    const inc = () => {
      state.amount++;
    }
    const dec = () => {
      if (state.amount > 1) {
        state.amount--;
      }
    }
    const switchAttr = (attrid, id, text) => {
      state.selected = ''
      state.attrResult.forEach(function (val, index) {
        // console.log(val)
        // console.log(index)
        // val.id = index+10
        //console.log(val)
        if (val.id == id) {
          val.result = attrid
          val.text = text
          // state.attrResult[index].result = attrid;
        }
        state.selected = state.selected + val.text;
      })
    }
    const classObject = (attrid, id) => {
      var flag = false;
      state.attrResult.forEach(function (val, index) {
        if (val.id == id && val.result == attrid) {
          flag = true;
        }
      })
      return {
        'active': flag
      }
    }
    const confirmOrder = () => {
      if (state.selected == '') {
        Toast('请选择规格')
        return
      }
      const attrids = [];
      state.attrResult.forEach(function (val, index) {
        attrids[index] = val.result;
      })
      const attrid = attrids.join(',');
      const id = state.id
      router.push(`/confirmorder/${id}/${attrid}/${state.amount}`);
    }
    const addCollectFnc = () => {
      addCollect({id: state.id}).then((res) => {
        Toast(res.msg);
        if (res.code == 1) {
          state.isCollect = true;
        }
      })
    }
    const dsm = () => {
      console.log('dsm')
    }
    return {
      ...toRefs(state),
      showPopup,
      inc,
      dec,
      switchAttr,
      classObject,
      confirmOrder,
      domain,
      addCollectFnc,
      dsm
    }
  }
}
</script>

<style scoped>
.good-info {
}

.name {
  text-align: left;
}

.name span:first-child {
  font-weight: bold;
  text-align: left;
}

.name .btn {
  padding: 1px;
  background-color: #25b513;
}

.name {
  margin: 20px 0 30px 0;
}

.custom-indicator {
  color: #ffffff;
  position: absolute;
  right: 5px;
  bottom: 5px;
  padding: 2px 5px;
  font-size: 12px;
  background: rgba(0, 0, 0, .3409);
  border-radius: 5px;
}

.point {
  position: relative;
}

.point div {
  width: 2px;
  height: 2px;
  background-color: #777;
  border-radius: 2px;
}

.left span:nth-child(2) {
  margin: 0 2px;
}

.content p {
  text-align: left;
}

.article-box img {
  max-width: 100%;
}

.selfbuy {
  width: 106px;
  background-color: #f3aba7;
}

.teambuy {
  width: 134px;
  background-color: #e02e24;
}

.footer {
  height: 60px;
  width: 100%;
  background-color: #ffffff;
  position: fixed;
  bottom: 0;
  border-top: 1px solid #eaeaea;
}

.content {
  padding-bottom: 60px;
}

.popup {
  position: relative;
  padding-bottom: 55px;
}

.popup .good-info img {
  width: 98px;
  height: 98px;
}

.popup .good-info div {
  text-align: left;
}

.good-info .flex1 {
  padding-left: 110px;
}

.popup .good-info {
  position: relative;
  min-height: 100px;
}

.popup .good-info img {
  position: absolute;
  background-color: #ffffff;
  left: 0;
  top: -40px;
  border-radius: 5px;
}

.attr-box {
  padding-bottom: 20px;
}

.attr-text {
  background-color: #f5f5f5;
  padding: 5px 10px;
  margin-left: 10px;
  color: #151516;
}

.attr-text:first-child {
  margin-left: 0;
}

.bg-gray {
  background-color: #f5f5f5;
  color: #cccccc;
}

.bg-normal {
  background-color: #e0e0e0;
}

.amount-box input {
  width: 25px;
  text-align: center;
  border: 0;
}

.amount-box {
  height: 28px;
}

.amount-box div:nth-child(2) div {
  height: 28px;
  width: 28px;
}

.btn-box {
  height: 50px;
  width: 100%;
  margin-left: -10px;
  margin-right: -10px;
  position: absolute;
  bottom: 0;
}

.active {
  background-color: #e02e24;
  color: #ffffff;
  border-radius: 5px;
}
</style>
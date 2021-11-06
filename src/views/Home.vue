<template>
  <div class="home">
    <!--    <img alt="Vue logo" src="../assets/logo.png">
        <HelloWorld msg="Welcome to Your Vue.js App"/>-->
    <div class="top">
      <div class="search-box">
        <div class="box flex pr pd-5-0">
          <div>
            <i class="iconfont icon-sousuo fs-20"></i>
            <label class="fs-16"> 女装2021新款潮</label>
          </div>
          <div class="maxicon-right">
            <i class="iconfont icon-xiangji fs-18"></i>
          </div>
        </div>
      </div>
      <div class="top-nav">
        <div class="box">
          <ul>
            <li :class="cid == item.id ? 'active' : ''" v-for="(item, index) in newsList" :key="item.id"
                @click="recommendGoodsFnc(item.id)">
              <span>{{ item.name }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!--菜单导航栏开始-->
    <div class="menu fs-12">
      <div class="flex flex-wrap flex-jc-sb">
        <div class="flex flex-column max-pd5">
          <img src="../assets/images/seckill.png"/>
          <span>限时秒杀</span>
        </div>
        <div class="flex flex-column max-pd5">
          <img src="../assets/images/clear.png"/>
          <span>清仓甩卖</span>
        </div>
        <div class="flex flex-column max-pd5">
          <img src="../assets/images/find-good.png"/>
          <span>精选好货</span>
        </div>
        <div class="flex flex-column max-pd5">
          <img src="../assets/images/point.png"/>
          <span>积分商城</span>
        </div>
        <div class="flex flex-column max-pd5">
          <img src="../assets/images/nine.png"/>
          <span>9.9会员</span>
        </div>
        <div class="flex flex-column max-pd5">
          <img src="../assets/images/recharge.png"/>
          <span>闪电充值</span>
        </div>
        <div class="flex flex-column max-pd5">
          <img src="../assets/images/agent.png"/>
          <span>代理中心</span>
        </div>
        <div class="flex flex-column max-pd5">
          <img src="../assets/images/sign.png"/>
          <span>每日签到</span>
        </div>
        <div class="flex flex-column max-pd5">
          <img src="../assets/images/guide.png"/>
          <span>新手指引</span>
        </div>
        <div class="flex flex-column max-pd5">
          <img src="../assets/images/rank.png"/>
          <span>销量榜单</span>
        </div>
      </div>
    </div>
    <!--菜单导航栏结束-->
    <background height="10px"/>
    <!--每日上新开始-->
    <div class="duoduo-box flex pd5">
      <div class="left-box flex flex-column flex-ai-center pd-0-5">
        <img src="../assets/images/new.png"/>
        <span class="fs-14 fw-b mg-5-0">每日上新</span>
        <span class="fs-12 col-gray">天天更新</span>
      </div>
      <div class="right-box flex flex-jc-sb flex1">
        <div class="box" v-for="(item,index) in dayGood" :key="item.id" @click="goDetail(item.id)">
          <div class="img-box">
            <img :src="domain+item.image"/>
          </div>
          <div>
            <span class="fw-b col-red fs-14">￥{{ item.price }}</span>
          </div>
        </div>
      </div>
    </div>
    <!--多多买菜结束-->
    <background height="10px"/>
    <!--百亿补贴开始-->
    <div class="duoduo-box flex pd5">
      <div class="left-box flex flex-column flex-ai-center pd-0-5">
        <img src="../assets/images/butie.png"/>
        <span class="fs-14 fw-b mg-5-0">百亿补贴</span>
        <span class="fs-12 col-gray">买就返</span>
      </div>
      <div class="right-box flex flex-jc-sb flex1">
        <div class="box" v-for="(item,index) in butieGood" :key="item.id" @click="goDetail(item.id)">
          <div class="img-box">
            <img :src="domain+item.image"/>
          </div>
          <div>
            <span class="fw-b col-red fs-14">￥{{ item.price }}</span>
          </div>
        </div>
      </div>
    </div>
    <!--百亿补贴结束-->
    <background height="10px"/>
    <!--商品列表开始-->
    <div class="product-box pd5">
      <div class="content flex" v-for="(item, index) in goodList" :key="item.id" @click="goDetail(item.id)">
        <div class="img-box">
          <img :src="domain+item.image"/>
        </div>
        <div class="right-box flex flex-column flex-jc-sb flex1">
          <div class="goods-name fs-14">{{ item.name }}</div>
          <div class="goods-price flex flex-jc-sb">
            <div>
              <span class="fs-14 fw-b col-red">￥{{ item.price }}</span>
              <span class="fs-12 col-gray">已售{{ item.sale }}件</span>
            </div>
            <div class="pintuan">
              <img src="../assets/images/8.png"/>
              <img src="../assets/images/8.png"/>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--商品列表结束-->
    <FooterBar/>
  </div>

</template>

<script>
// @ is an alias to /src
//import { createApp } from 'vue'
import {inject, reactive, onMounted, toRefs} from "vue";
import {useRouter} from 'vue-router';
import {getIndex, recommendGoods} from "../api/index.js";
import HelloWorld from '@/components/HelloWorld.vue'
import background from '@/components/background.vue'
import FooterBar from "../components/FooterBar";
import {Button, Toast} from 'vant';

export default {
  name: 'Home',
  components: {
    FooterBar,
    background,
    [Button.name]: Button,
    //Toast
  },
  setup() {
    console.log(process.env.VUE_APP_a);
    const domain = process.env.VUE_APP_a;
    const dt = reactive({
      newsList: [],
      goodList: [],
      dayGood: [],
      butieGood: [],
      cid: 0
    })
    const router = useRouter();
    onMounted(async () => {
      await getIndex().then((res) => {
        console.log(res);
        dt.newsList = res.data.secondCategory;
        dt.goodList = res.data.recommendGood;
        dt.dayGood = res.data.dayGood;
        dt.butieGood = res.data.butieGood;
        dt.cid = res.data.secondCategory[0].id;
      });
    })
    const goDetail = (id) => {
      router.push(`/gooddetail/${id}`);
    }
    const recommendGoodsFnc = (id) => {
      dt.cid = id;
      recommendGoods({id: id}).then((res) => {
        dt.goodList = res.data;
      })
    }
    return {
      ...toRefs(dt),
      domain,
      goDetail,
      recommendGoodsFnc
    }
  },
  created() {
    console.log('created')
    // this.$toast.fail('success');
    // this.$toast.loading({
    //   message: '加载中...',
    //   forbidClick: true,
    // });
    //this.gewNewsList();
  },
  // methods: {
  //   gewNewsList() {
  //     console.log(this.common)
  //     console.log(this.foo)
  //     console.log(this)
  //     this.$toast('提示内容');
  //     this.common.axiosPost(indexApi.getNew, {userId: 9, type: 'all', page: {current: 1, size: 10}})
  //     .then(res => {
  //       //console.log(res);
  //       this.newsList = res;
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     })
  //   }
  // }
}
</script>
<style scoped>
.home {
  padding-bottom: 50px;
}

.product-box .pintuan {
  position: relative;
}

.product-box .content {
  margin-top: 10px;
}

.product-box .right-box .goods-name {
  text-align: left;
}

.product-box .right-box {
  padding-left: 5px;
}

.product-box .pintuan img:nth-child(2) {
  position: relative;
  right: 10px;
}

.product-box .pintuan img {
  width: 20px;
  height: 20px;
  border-radius: 50%;
}

.product-box .content .img-box {
  width: 156px;
  height: 156px;
}

.duoduo-box .right-box {
  padding-left: 5px;
}

.right-box .box .img-box {
  width: 64px;
  height: 64px;
}

.duoduo-box .left-box {
  border-right: 1px solid #ebe3e3;
}

.duoduo-box .left-box img {
  width: 39px;
  height: 39px;
}

.menu div div {
}

.menu span {
  margin-top: 5px;
  white-space: nowrap;
}

.menu {
  padding: 10px 15px;
}

.menu img {
  width: 50px;
  height: 50px;
}

.active span {
  color: yellow !important;
}

.active {
  border-bottom: 2px solid yellow;
}

.top-nav .box ul li span {
  color: #fff;
  font-size: 16px;
}

.top-nav .box ul li {
  display: inline-block;
  margin-left: 10px;
  padding: 5px 0 10px 0;
}

.top-nav .box ul {
  overflow-x: auto;
  overflow-y: hidden;
  white-space: nowrap;
  text-align: left;
}

.top-nav .box {
  max-width: 768px;
  width: 100%;
}

.top {
  background-color: #e02e24;
  background-image: url('../assets/images/6636c560-6432-41ae-aea1-9d9470201426.jpeg');
  background-position: center bottom;
  background-size: 100% auto;
  background-repeat: no-repeat;
}

.search-box {
  padding: 5px 10px;
}

.search-box .box {
  background-color: #EDEDED;
  justify-content: center;
  border-radius: 5px;
  color: #9C9C9C;
}

.maxicon-right {
  position: absolute;
  right: 5px;
}
</style>
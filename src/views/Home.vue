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
            <li :class="index == 0 ? 'active' : ''" v-for="(item, index) in newsList" :key="index">
              <span>{{item.label}}</span>
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
        <div class="box">
          <div class="img-box">
            <img src="../assets/images/toy.png"/>
          </div>
          <div>
            <span class="fw-b col-red fs-14">￥1.8</span>
          </div>
        </div>
        <div class="box">
          <div class="img-box">
            <img src="../assets/images/toy.png"/>
          </div>
          <div>
            <span class="fw-b col-red fs-14">￥1.8</span>
          </div>
        </div>
        <div class="box">
          <div class="img-box">
            <img src="../assets/images/toy.png"/>
          </div>
          <div>
            <span class="fw-b col-red fs-14">￥1.8</span>
          </div>
        </div>
        <div class="box">
          <div class="img-box">
            <img src="../assets/images/toy.png"/>
          </div>
          <div>
            <span class="fw-b col-red fs-14">￥1.8</span>
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
        <div class="box">
          <div class="img-box">
            <img src="../assets/images/coldmachine.png"/>
          </div>
          <div>
            <span class="fw-b col-red fs-14">￥4589</span>
          </div>
        </div>
        <div class="box">
          <div class="img-box">
            <img src="../assets/images/coldmachine.png"/>
          </div>
          <div>
            <span class="fw-b col-red fs-14">￥315</span>
          </div>
        </div>
        <div class="box">
          <div class="img-box">
            <img src="../assets/images/coldmachine.png"/>
          </div>
          <div>
            <span class="fw-b col-red fs-14">￥25</span>
          </div>
        </div>
        <div class="box">
          <div class="img-box">
            <img src="../assets/images/coldmachine.png"/>
          </div>
          <div>
            <span class="fw-b col-red fs-14">￥2685</span>
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
          <img :src="item.img"/>
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
import { inject, reactive, onMounted, toRefs } from "vue";
import { useRouter } from 'vue-router';
import { getLiveCategory } from "../api/index.js";
import HelloWorld from '@/components/HelloWorld.vue'
import background from '@/components/background.vue'
import FooterBar from "../components/FooterBar";
import { Button } from 'vant';
import { Toast } from 'vant';
export default {
  name: 'Home',
  components: {
    FooterBar,
    background,
    [Button.name]: Button,
    //Toast
  },
  // data() {
  //   return {
  //     newsList: []
  //   }
  // },
  setup(){
    const dt = reactive({
      newsList: [],
      goodList: []
    })
    const router = useRouter();
    onMounted(async () => {
      //const { data } = await getLiveCategory({})
      dt.newsList = [
        {
          id: 1,
          label: '推荐'
        },
        {
          id: 2,
          label: '新鲜水果'
        },
        {
          id: 3,
          label: '手机数码'
        },
        {
          id: 4,
          label: '家用电器'
        },
        {
          id: 5,
          label: '儿童玩具'
        },
        {
          id: 6,
          label: '母婴用品'
        }
      ]
      dt.goodList = [
        {
          id: 1,
          name: '166升两门双门小型冰箱 家用办公宿舍租房小冰箱 166LR2EH',
          img: require('../assets/images/good1.jpg'),
          price: 255,
          sale: 200
        },
        {
          id: 2,
          name: '压缩毛巾一次性洗脸巾旅行便携装纯棉无菌加厚加大美容洁面擦脸巾',
          img: require('../assets/images/tower.jpg'),
          price: 25,
          sale: 200
        },
        {
          id: 3,
          name: '男士潮流 青春靓丽 网红主打 白色板鞋',
          price: 75,
          img: require('../assets/images/shoe.jpg'),
          sale: 200
        },
      ]
    })
    const goDetail = (id) => {
      router.push(`/gooddetail/${id}`);
    }
    return{
      ...toRefs(dt),
      goDetail
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
  .home{
    padding-bottom: 50px;
  }
  .product-box .pintuan{
    position: relative;
  }
  .product-box .content{
    margin-top: 10px;
  }
  .product-box .right-box .goods-name{
    text-align: left;
  }
  .product-box .right-box{
    padding-left: 5px;
  }
  .product-box .pintuan img:nth-child(2){
    position: relative;
    right: 10px;
  }
  .product-box .pintuan img{
    width: 20px;
    height: 20px;
    border-radius: 50%;
  }
  .product-box .content .img-box{
    width: 156px;
    height: 156px;
  }
  .duoduo-box .right-box{
    padding-left: 5px;
  }
  .right-box .box .img-box{
    width: 64px;
    height: 64px;
  }
  .duoduo-box .left-box{
    border-right: 1px solid #ebe3e3;
  }
  .duoduo-box .left-box img{
    width: 39px;
    height: 39px;
  }
  .menu div div{
  }
  .menu span{
    margin-top: 5px;
    white-space: nowrap;
  }
  .menu{
    padding: 10px 15px;
  }
  .menu img{
    width: 50px;
    height: 50px;
  }
  .active span{
    color: yellow!important;
  }
  .active{
    border-bottom: 2px solid yellow;
  }
  .top-nav .box ul li span{
    color: #fff;
    font-size: 16px;
  }
  .top-nav .box ul li{
    display: inline-block;
    margin-left: 10px;
    padding: 5px 0 10px 0;
  }
  .top-nav .box ul{
    overflow-x: auto;
    overflow-y: hidden;
    white-space: nowrap;
    text-align: left;
  }
  .top-nav .box{
    max-width: 768px;
    width: 100%;
  }
  .top{
    background-color: #e02e24;
    background-image: url('../assets/images/6636c560-6432-41ae-aea1-9d9470201426.jpeg');
    background-position: center bottom;
    background-size: 100% auto;
    background-repeat: no-repeat;
  }
  .search-box{
    padding: 5px 10px;
  }
  .search-box .box{
    background-color: #EDEDED;
    justify-content: center;
    border-radius: 5px;
    color: #9C9C9C;
  }
  .maxicon-right{
    position: absolute;
    right: 5px;
  }
</style>
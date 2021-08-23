<template>
  <div class="live">
    <div class="top pd10">
      <h3 class="fs-16 tl-left">关注的直播</h3>
      <h3 class="fs-16 tl-center pd-10-0">还没有登录哦</h3>
      <h3 class="fs-14 tl-center col-gray">登录后可查看关注的直播动态</h3>
      <div class="login-box">
        <button class="login-btn" @click="goLogin">登录</button>
      </div>
    </div>
    <background height="10px"/>
    <div class="live-box">
      <!--导航栏开始-->
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
      <!--导航栏结束-->
      <!--直播开始-->
      <LiveList :data="lives"/>
      <!--直播结束-->
    </div>
  </div>
  <FooterBar/>
</template>

<script>
import { reactive, toRefs, onMounted} from "vue";
import { useRouter } from "vue-router";
import background from "../components/background.vue";
import LiveList from "../components/LiveList.vue";
import FooterBar from "../components/FooterBar.vue";
import { getLiveCategory } from "../api/index.js";
import { Toast } from "vant";
export default {
  name: "Live",
  components: {
    FooterBar,
    background,
    LiveList
  },
  setup() {
    const router = useRouter();
    const dt = reactive({
      lives: [
        {
          img: require('../assets/images/live1.png'),
          title: '速来全场大放漏1',
          views: '90.3万',
          id: 1
        },
        {
          img: require('../assets/images/live2.png'),
          title: '直播福利大列巴面包现做现做2',
          views: '2.3万',
          id: 2
        },
        {
          img: require('../assets/images/live3.png'),
          title: '旗袍工厂夏季新款大甩卖3',
          views: '3.1万',
          id: 3
        },
      ],
      navIndex: 0,
      items: [],
      subRouteUrl: [
        '',
        '',
        '',
        '',
        '',
        ''
      ],
    })
    onMounted(async () => {
      //const { data } = await getLiveCategory();
      dt.items = [
        {
          id: 1,
          label: '推荐'
        },
        {
          id: 2,
          label: '大牌疯抢'
        },
        {
          id: 3,
          label: '品牌清仓'
        },
        {
          id: 4,
          label: '运动'
        },
        {
          id: 5,
          label: '中国风'
        }
      ];
    })
    const goList = (index) => {
      dt.navIndex = index;
      //Toast(item.label)
    }
    const goLogin = () => {
      router.push('/login');
    }
    return {
      ...toRefs(dt),
      goList,
      goLogin
    }
  },
  created () {
    let path = this.$route.path;
    for(let i = 0; i < this.subRouteUrl.length; i++){
      if(path == this.subRouteUrl[i]){
        this.navIndex = i;
      }
    }
  }
}
</script>

<style scoped>
.live-box{
  padding-bottom: 50px;
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
  border-bottom: 1px solid #c9c3c3;
}
.navBox .ul .li {
  width: auto;
  height: 100%;
  line-height: 44px;
  margin-right: 5px;
  display: inline-block;
  position: relative;
  font-size: 16px;
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
.login-box{
  margin-top: 10px;
}
.login-btn{
  border: 0;
  width: 100%;
  height: 45px;
  line-height: 45px;
  text-align: center;
  font-size: 16px;
  background-color: #E02E24;
  color: #ffffff;
  border-radius: 5px;
}
.top h3{
  font-weight: normal;
}
.top h3:nth-child(1){
  color: #000;
}
.top h3:nth-child(2){
  color: #58595b;
}
</style>
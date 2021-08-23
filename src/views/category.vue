<template>
<div class="category-box">
  <div class="top">
    <div class="search-box">
      <i class="iconfont icon-sousuo fs-20"></i>
      <span>黄色玩具</span>
    </div>
  </div>
  <div class="content flex">
    <div class="left-box">
      <div style="overflow:auto;">
      <div class="active tl-center">女装</div>
      <div class="tl-center">食品</div>
      <div class="tl-center">男装</div>
      <div class="tl-center">男装</div>
      <div class="tl-center">男装</div>
      <div class="tl-center">男装</div>
      <div class="tl-center">男装</div>
      <div class="tl-center">男装</div>
      <div class="tl-center">男装</div>
      <div class="tl-center">男装</div>
      <div class="tl-center">男装</div>
      <div class="tl-center">男装</div>
      <div class="tl-center">男装</div>
      <div class="tl-center">男装</div>
      <div class="tl-center">男装</div>
      <div class="tl-center">男装</div>
      <div class="tl-center">男装</div>
      </div>
    </div>
    <div class="right-box flex1">
      <div style="overflow: auto">
      <div class="content-detail">
        <p>套装</p>
        <div class="flex flex-jc-sb">
          <div class="flex flex-column" @click="goList(1)">
            <img src="../assets/images/category1.png"/>
            <div class="goods-name">套装裙</div>
          </div>
          <div class="flex flex-column" @click="goList(1)">
            <img src="../assets/images/category1.png"/>
            <div class="goods-name">套装裙</div>
          </div>
          <div class="flex flex-column" @click="goList(1)">
            <img src="../assets/images/category1.png"/>
            <div class="goods-name">套装裙</div>
          </div>
        </div>
      </div>
      <div class="content-detail">
        <p>套装</p>
        <div class="flex flex-jc-sb">
          <div class="flex flex-column" @click="goList(1)">
            <img src="../assets/images/category1.png"/>
            <div class="goods-name">套装裙</div>
          </div>
          <div class="flex flex-column" @click="goList(1)">
            <img src="../assets/images/category1.png"/>
            <div class="goods-name">套装裙</div>
          </div>
          <div class="flex flex-column" @click="goList(1)">
            <img src="../assets/images/category1.png"/>
            <div class="goods-name">套装裙</div>
          </div>
        </div>
      </div>
      <div class="content-detail">
        <p>套装</p>
        <div class="flex flex-jc-sb">
          <div class="flex flex-column" @click="goList(1)">
            <img src="../assets/images/category1.png"/>
            <div class="goods-name">套装裙</div>
          </div>
          <div class="flex flex-column" @click="goList(1)">
            <img src="../assets/images/category1.png"/>
            <div class="goods-name">套装裙</div>
          </div>
          <div class="flex flex-column" @click="goList(1)">
            <img src="../assets/images/category1.png"/>
            <div class="goods-name">套装裙</div>
          </div>
        </div>
      </div>
      <div class="content-detail">
        <p>套装</p>
        <div class="flex flex-jc-sb">
          <div class="flex flex-column">
            <img src="../assets/images/category1.png"/>
            <div class="goods-name">套装裙</div>
          </div>
          <div class="flex flex-column">
            <img src="../assets/images/category1.png"/>
            <div class="goods-name">套装裙</div>
          </div>
          <div class="flex flex-column">
            <img src="../assets/images/category1.png"/>
            <div class="goods-name">套装裙</div>
          </div>
        </div>
      </div>
      <div class="content-detail">
        <p>套装</p>
        <div class="flex flex-jc-sb">
          <div class="flex flex-column">
            <img src="../assets/images/category1.png"/>
            <div class="goods-name">套装裙</div>
          </div>
          <div class="flex flex-column">
            <img src="../assets/images/category1.png"/>
            <div class="goods-name">套装裙</div>
          </div>
          <div class="flex flex-column">
            <img src="../assets/images/category1.png"/>
            <div class="goods-name">套装裙</div>
          </div>
        </div>
      </div>
      <div class="content-detail">
        <p>套装</p>
        <div class="flex flex-jc-sb">
          <div class="flex flex-column">
            <img src="../assets/images/category1.png"/>
            <div class="goods-name">套装裙</div>
          </div>
          <div class="flex flex-column">
            <img src="../assets/images/category1.png"/>
            <div class="goods-name">套装裙</div>
          </div>
          <div class="flex flex-column">
            <img src="../assets/images/category1.png"/>
            <div class="goods-name">套装裙</div>
          </div>
        </div>
      </div>
      <div class="content-detail">
        <p>套装</p>
        <div class="flex flex-jc-sb">
          <div class="flex flex-column">
            <img src="../assets/images/category1.png"/>
            <div class="goods-name">套装裙</div>
          </div>
          <div class="flex flex-column">
            <img src="../assets/images/category1.png"/>
            <div class="goods-name">套装裙</div>
          </div>
          <div class="flex flex-column">
            <img src="../assets/images/category1.png"/>
            <div class="goods-name">套装裙</div>
          </div>
        </div>
      </div>
      </div>
    </div>
  </div>
</div>
  <FooterBar/>
</template>

<script>
import { useRouter } from "vue-router"
import FooterBar from "../components/FooterBar";
export default {
  name: "category",
  components: {
    FooterBar
  },
  setup() {
    const router = useRouter();
    const goList = (id) => {
      router.push(`/goodlist/${id}`)
    }
    return {
      goList
    }
  }
}
</script>

<style scoped>
.left-box .active:before{
  content: "";
  position: absolute;
  left: 0;
  top:16px;
  display: inline-block;
  width: 4px;
  height: 20px ;
  background-color: #e02e24;
}
.left-box .active{
  color: #e02e24;
}
.content-detail .goods-name{
  margin-top:10px;
}
.content-detail img{
  width: 56px;
  height: 56px;
}
.content-detail p{
  text-align: left;
  padding: 10px 0;
}
.right-box, .left-box{
  /*height: 100vh;*/
  overflow: auto;
  padding-bottom: 50px;
}
.right-box .content-detail:first-child{
  padding-top: 0;
}
.right-box .content-detail{
  padding: 10px 0;
}
.right-box{
  padding-right: 10px;
}
.content .left-box div div{
  position: relative;
  height: 52px;
  line-height: 52px;
}
.content .left-box{
  width: 100px;
}
.top .search-box{
  color: #9C9C9C;
  background-color: #ededed;
  border-radius: 5px;
  height: 38px;
  line-height: 38px;
  text-align: center;
}
.top{
  border-bottom: 1px solid #ededed;
  padding: 10px 20px;
}
.category-box{
  position: absolute;
  width: 100%;
  height: 100%;
  top:0;
  left:0
}
.category-box .content{
  height: calc(100vh - 60px);
}
body{
  overflow: hidden;
}
</style>
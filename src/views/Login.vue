<template>
<div class="login flex flex-column">
  <div class="before-login" v-if="!state.showLogin">
    <div class="top flex1">
      <img src="../assets/images/logo.png"/>
    </div>
    <div class="btn pd20">
      <van-button icon="iconbg" color="#fb0" size="large" @click="loginSwitch">手机登录</van-button>
<!--      <div class="safe flex-jc-center tl-center">-->
<!--        <i class="iconfont icon-safe"></i>-->
<!--        <span>平台用户信息安全由</span>-->
<!--        <img class="picc-img" src="../assets/images/brand_picc_new.png"/>-->
<!--        <span>承保</span>-->
<!--      </div>-->
          <Picc></Picc>
    </div>
  </div>
  <div class="login-box" v-else>
      <van-field
          v-model="state.account"
          clearable
          label=""
          left-icon="manager-o"
          placeholder="手机号码"
      />
      <van-field
          v-model="state.pwd"
          clearable
          label=""
          left-icon="eye-o"
          placeholder="密码"
      />
      <div class="pd20">
        <van-button color="#e02e24" size="large">登录</van-button>
        <background height="10px"/>
        <van-button plain color="#e02e24" size="large" @click="loginSwitch">返回</van-button>
      </div>
      <div class="footer col-gray">
        <p class="fs-12">登录即表示同意 <a>服务协议与隐私政策</a><a class="reg" @click="reg">免费注册</a></p>
      </div>
  </div>
</div>

</template>

<script>
import { reactive } from "vue"
import { useRouter } from "vue-router"
import { Button, Field, CellGroup } from "vant"
import background from "../components/background";
import Picc from "../components/Picc";
export default {
  name: "Login",
  components: {
    [Button.name]: Button,
    [Field.name]: Field,
    background,
    Picc
  },
  setup() {
    const router = useRouter()
    const state = reactive({
      showLogin: false,
      account: '',
      pwd: ''
    })
    const loginSwitch = () => {
      state.showLogin = !state.showLogin
    }
    const reg = () => {
      router.push('/reg')
    }
    return {
      state,
      loginSwitch,
      reg
    }
  }
}
</script>

<style scoped>
.footer .reg{
  float: right;
  color: cornflowerblue;
}
.footer a{
  color: #58595b;
}
.footer p{
  text-align: left;
}
.footer{
  padding: 0px 20px 10px 20px;
}
/*.safe{*/
/*  margin-top:20px;*/
/*}*/
/*.safe span{*/
/*  color: #9C9C9C;*/
/*}*/
/*.safe i{*/
/*  color: #25b513;*/
/*  position: relative;*/
/*  top: 1px;*/
/*}*/
/*.safe{*/
/*  font-size: 12px;*/
/*}*/
/*.picc-img{*/
/*  width: 87px;*/
/*  height: 12px;*/
/*  vertical-align: middle;*/
/*}*/
.login .btn{

}
#app{
  display: flex;
}
.login{
  width: 100%;
  height: 100%;
  background-color: #f4f4f4;
  position: absolute;
}
.top{
  text-align: center;
  padding: 130px 0 110px 0;
}
.top img{
  width: 137px;
  height: 50px;
}
</style>
<template>
<div class="reg-box">
  <div class="top">
    <div>
      <p>嗨，你好</p>
      <p>欢迎来注册</p>
    </div>
  </div>
  <div class="content">
    <div class="title pd20">新用户注册</div>
    <div class="border-box"></div>
    <div class="input-box">
      <van-field
          v-model="state.account"
          clearable
          label=""
          left-icon="manager-o"
          placeholder="手机号码"
      />
    </div>
    <div class="border-box"></div>
    <div class="input-box">
      <van-field
          v-model="state.pwd"
          clearable
          label=""
          left-icon="eye-o"
          placeholder="请输入密码"
          type="password"
      />
    </div>
    <div class="border-box"></div>
    <div class="pd20">
      <van-button round color="#17A1FF" size="large">注册</van-button>
    </div>
    <div class="login-box">
      <p><router-link to="/login">账号登录</router-link></p>
    </div>
  </div>
</div>
</template>

<script>
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
import { Field, Button} from 'vant'
export default {
  name: "reg",
  components: {
    [Field.name]: Field,
    [Button.name]: Button
  },
  setup() {
    const state = reactive({
      account: '',
      pwd: ''
    })
    return {
      state
    }
  }
}
</script>

<style scoped>
.login-box p a{
  color: #9C9C9C;
}
.border-box{
  margin:0 20px;height: 1px;background-color: #9C9C9C;
}
.content .input-box{
  padding: 20px 0;
}
.content .title{
  text-align: left;
  color: #17A1FF;
}
.top p{
  color: #fff;
  text-align: left;
  padding: 10px 20px;
  font-size: 16px;
}
.top{
  background-color: #17A1FF;
  padding: 100px 0 70px 0;
}
</style>
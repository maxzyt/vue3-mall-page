<template>
  <Navbar :headName="headName"></Navbar>
  <van-cell title="手机号码" :value="mobile">
  </van-cell>
  <van-cell title="清楚缓存" is-link/>
  <van-cell value="检查更新" is-link @click="checkUpdate">
    <!-- 使用 title 插槽来自定义标题 -->
    <template #title>
      <span class="custom-title">系统版本</span>
      <van-tag type="danger">{{ version }}</van-tag>
    </template>
  </van-cell>
  <van-cell title="安全退出" is-link @click="logoutFnc"/>
</template>

<script>
import {onMounted, reactive, toRefs} from 'vue';
import {useRouter} from 'vue-router';
import background from "../components/background";
import {Cell, Tag, Toast} from 'vant';
import Navbar from "../components/Navbar";
import {userinfo, logout} from "../api/user";

export default {
  name: "set",
  components: {
    Navbar,
    background,
    [Cell.name]: Cell,
    [Tag.name]: Tag
  },
  setup() {
    const router = useRouter();
    const state = reactive({
      headName: '设置',
      mobile: '',
      version: ''
    });
    onMounted(() => {
      userinfo([]).then((res) => {
        state.mobile = res.data.mobile;
        state.version = res.data.version;
      })
    })
    const logoutFnc = () => {
      logout().then((res) => {
        localStorage.setItem('token', '');
        router.push(`/`);
      })
    }
    const checkUpdate = () => {
      Toast('已是最新版本');
    }
    return {
      ...toRefs(state),
      logoutFnc,
      checkUpdate
    }
  }
}
</script>

<style scoped>

</style>
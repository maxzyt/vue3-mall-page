<template>
  <Navbar :headName="headName"></Navbar>
  <van-cell title="手机号码" :value="mobile">
  </van-cell>
  <van-cell title="清楚缓存" is-link />
  <van-cell value="检查更新" is-link>
    <!-- 使用 title 插槽来自定义标题 -->
    <template #title>
      <span class="custom-title">系统版本</span>
      <van-tag type="danger">{{ version }}</van-tag>
    </template>
  </van-cell>
  <van-cell title="安全退出" is-link />
</template>

<script>
import { onMounted, reactive, toRefs} from 'vue';
import background from "../components/background";
import { Cell, Tag } from 'vant';
import Navbar from "../components/Navbar";
export default {
  name: "set",
  components: {
    Navbar,
    background,
    [Cell.name]: Cell,
    [Tag.name]: Tag
  },
  setup() {
    const state = reactive({
      headName: '设置',
      mobile: '15290938565',
      version: '1.0.0'
    });
    onMounted(() => {
    })
    return {
      ...toRefs(state),
    }
  }
}
</script>

<style scoped>

</style>
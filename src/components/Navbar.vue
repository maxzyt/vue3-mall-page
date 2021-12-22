<template>
  <div style="z-index: 10000;">
<van-nav-bar
      :title="headName"
      left-text=""
      right-text=""
      left-arrow
      @click-left="onClickLeft"
  />
  </div>
</template>

<script>
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { NavBar } from 'vant'
export default {
  name: "Navbar",
  components: {
    [NavBar.name]: NavBar
  },
  props: {
    headName: {
      type: String,
      default: ''
    },
    url: {
      type: String,
      default: ''
    }
  },
  emits: ['dosomething'],
  setup(props, context) {
    const router = useRouter()
    onMounted(() => {
    })
    const onClickLeft = () => {
      console.log(props);
      if(props.url != '') {
        router.replace({ path: props.url });
      }else {
        router.go(-1);
      }
      context.emit('dosomething');
    }
    return {
      onClickLeft,
    }
  }
}
</script>

<style scoped>
.header{
  text-align: center;
  background: #fff;
}
</style>
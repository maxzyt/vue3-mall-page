<template>
  <router-view/>

</template>
<script>
console.log('App.vue')
import { provide ,ref ,readonly} from "vue";
export default {
  name: 'App',
  setup() {
    //用ref包裹可使location变为响应式
    let location=ref('location')
    const updataLocation=()=>{
      location.value='变身后的大Location'
    }
    const test = () => {

    }
    /*readonly包裹后可以在组件内引用时不被改变值。
    否则在组件内可以直接通过location.value=***将值改变，
    包裹后只能通过updataLocation()方法改变*/
    provide('location',readonly(location))
    provide('updataLocation',updataLocation)
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  color: #2c3e50;
  font-size: 14px;
}
body{
  /*overflow: hidden;*/
}

</style>

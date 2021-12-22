<template>
  <div class="list-box">
    <div class="good-box" v-for="(item, index) in data" :key="item.id" @click="goDetail(item.id)">
      <div>
        <img :src="domain+item.image"/>
      </div>
      <div class="info-box pd10">
        <p>{{item.name}}</p>
        <p class="col-gray fs-12 pd-10-0">{{ item.policy }}</p>
        <p>
          <span class="col-red">¥</span>
          <span class="col-red fs-16">{{ item.price }}</span>
          <span class="fs-12 col-gray">已售{{ item.sale }}件</span>
          <img src="../assets/images/8.png"/>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
export default {
  name: "GoodCpt",
  components:{
  },
  props: {
    data: Array
  },
  setup() {
    const domain=process.env.VUE_APP_a;
    const router = useRouter()
    const goDetail = (id) => {
      router.push(`/gooddetail/${id}`);
    }
    return {
      goDetail,
      domain
    }
  }
}
</script>

<style scoped>
.list-box{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  background-color: #ffffff;
}
.good-box{
  width: 49.5%;
}
.info-box p:first-child{
  height: 20px;
  overflow: hidden;
  white-space: nowrap;
}
.info-box p{
  text-align: left;
}
.info-box img{
  float: right;
  width: 20px;
  height: 20px;
  border-radius: 50%;
}
.banner-box img{
  width: 100%;
}
</style>
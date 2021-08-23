<template>
  <div class="list-box">
    <div class="good-box" v-for="(item, index) in data" :key="item.id" @click="goDetail(item.id)">
      <div>
        <img :src="item.img"/>
      </div>
      <div class="info-box pd10">
        <p>{{item.title}}</p>
        <p class="col-gray fs-12 pd-10-0">{{ item.desc }}</p>
        <p>
          <span class="col-red">¥</span>
          <span class="col-red fs-16">{{ item.price }}</span>
          <span class="fs-12 col-gray">已拼{{ item.pinAmount }}件</span>
          <img :src="item.headPic"/>
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
  props: {
    data: Array
  },
  setup() {
    console.log(123456)
    const router = useRouter()
    const goDetail = (id) => {
      router.push(`/gooddetail/${id}`);
    }
    return {
      goDetail
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
  word-break: break-all;
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
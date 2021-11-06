<template>
  <div>
<Navbar headName="我的收藏" url="/member"></Navbar>
  </div>
  <div style="margin-top: 20px">
<van-list
    v-model:loading="loading"
    :finished="finished"
    finished-text="没有更多了"
    @load="onLoad"
>
<van-swipe-cell v-for="(item, index) in list" :key="item.id">
  <van-card
      :price="item.good.price"
      :desc="item.good.policy"
      :title="item.good.name"
      class="goods-card"
      :thumb="domain+item.good.image"
      @click="goDetail(item.good_id)"
  />
  <template #right>
    <van-button square text="删除" type="danger" class="delete-button" @click="del(item.id)"/>
  </template>
</van-swipe-cell>
</van-list>
  </div>
</template>

<script>
import { reactive, toRefs } from 'vue';
import { useRouter } from 'vue-router';
import { SwipeCell, Card, Button, List } from 'vant';
import Navbar from "../components/Navbar";
import {collect} from "../api/user";

export default {
  name: "collect",
  components: {
    [SwipeCell.name]: SwipeCell,
    [Card.name]: Card,
    [Button.name]: Button,
    [List.name]: List,
    Navbar
  },
  setup() {
    const router = useRouter();
    const domain=process.env.VUE_APP_a;
    const state = reactive({
      list: [

      ],
      page:1,
      limit:10,
      loading: false,
      finished: false,
    });
    const del = (id) => {
      console.log(id);
    }
    console.log(window.history);
    const onLoad = () => {
      collect({page:state.page,limit:state.limit}).then((res)=>{
        // 加载状态结束
        state.loading = false;
        if(res.data.length){
          state.list=state.list.concat(res.data);
          state.page++;
        }else{
          state.finished=true;
        }
      })
    };
    const goDetail = (id) => {
      router.push(`/gooddetail/${id}`);
    }
    return {
      ...toRefs(state),
      del,
      onLoad,
      goDetail,
      domain
    }
  }
}
</script>

<style scoped>
.goods-card {
  margin: 0;
  background-color: #ffffff;
}

.delete-button {
  height: 100%;
}
.date-title{
  text-indent: 10px;
}
</style>
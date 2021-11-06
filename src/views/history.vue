<template>
  <div>
    <Navbar headName="浏览历史" url="/member"></Navbar>
  </div>
  <div style="margin-top: 20px">
    <van-list
        v-model:loading="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
    >
      <div v-for="(item, index) in list" :key="item.id">
        <h4 class="date-title">{{ item.createtime_text }}</h4>
        <van-swipe-cell v-for="(item2, index2) in item.goodData" :key="item2.id">
          <van-card
              :price="item2.price"
              :desc="item2.policy"
              :title="item2.name"
              class="goods-card"
              :thumb="domain+item2.image"
              @click="goDetail(item2.id)"
          />
          <template #right>
            <van-button square text="删除" type="danger" class="delete-button" @click="del(item.id,item2.id)"/>
          </template>
        </van-swipe-cell>
      </div>
    </van-list>
  </div>
</template>

<script>
import { reactive, toRefs } from 'vue';
import { useRouter } from 'vue-router';
import {SwipeCell, Card, Button, List, Toast} from 'vant';
import Navbar from "../components/Navbar";
import {history,delHistory} from "../api/user";

export default {
  name: "history",
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
      loading: false,
      finished: false,
      page:1,
      limit:10
    });
    const del = (id,id2) => {
      delHistory({id:id,goodId:id2}).then((res)=>{
        Toast(res.msg);
        if(res.code==1){
          for(var i=0;i<state.list.length;i++){
            if(state.list[i].id==id){
              for(var j=0;j<state.list[i].goodData.length;j++){
                if(state.list[i].goodData[j].id==id2){
                  state.list[i].goodData.splice(j,1);
                }
              }
              if(state.list[i].goodData.length==0){
                state.list.splice(i,1);
              }
            }
          }
        }
      })
    }
    console.log(window.history);
    const onLoad = () => {
      history({page:state.page,limit:state.limit}).then((res)=>{
        // 加载状态结束
        state.loading = false;
        if(res.data.length>0){
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
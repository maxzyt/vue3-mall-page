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
      <van-swipe-cell v-for="(item, index) in list" :key="item.id">
        <h4 class="date-title">2021-08-13</h4>
        <van-card
            :price="item.price"
            :desc="item.desc"
            :title="item.title"
            class="goods-card"
            :thumb="item.thumb"
            @click="goDetail(item.id)"
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
    const state = reactive({
      list: [

      ],
      loading: false,
      finished: false,
    });
    const del = (id) => {
      console.log(id);
    }
    console.log(window.history);
    const onLoad = () => {
      // setTimeout 仅做示例，真实场景中一般为 ajax 请求
      setTimeout(() => {
        for (let i = 0; i < 6; i++) {
          state.list.push(
              {
                id: i+1,
                price: 10*(i+1),
                desc: '描述信息'+(1+i),
                title: '商品标题'+(1+i),
                thumb: 'https://img.yzcdn.cn/vant/cat.jpeg'
              }
          );
        }

        // 加载状态结束
        state.loading = false;

        // 数据全部加载完成
        if (state.list.length >= 40) {
          state.finished = true;
        }
      }, 2000);
    };
    const goDetail = (id) => {
      router.push(`/gooddetail/${id}`);
    }
    return {
      ...toRefs(state),
      del,
      onLoad,
      goDetail
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
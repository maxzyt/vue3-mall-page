<template>
  <Navbar headName="地址列表"></Navbar>
  <van-address-list
      v-model="chosenAddressId"
      :list="list"
      default-tag-text="默认"
      @add="onAdd"
      @edit="onEdit"
      @select="onSelect"
  />
</template>

<script>
import { ref, onMounted, reactive } from 'vue';
import { AddressList } from 'vant';
import Navbar from "../components/Navbar";
import { useRouter } from 'vue-router';
export default {
  name: "address",
  components: {
    Navbar,
    [AddressList.name]: AddressList
  },
  setup() {
    const router = useRouter();
    const chosenAddressId = ref('1');
    const list = [
      {
        id: '1',
        name: '张三',
        tel: '13000000000',
        address: '浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室',
        isDefault: true,
      },
      {
        id: '2',
        name: '李四',
        tel: '1310000000',
        address: '浙江省杭州市拱墅区莫干山路 50 号',
      },
    ];
    const onAdd = () => {
      router.push(`/addaddress`);
    }
    const onEdit = (item, index) => {
      console.log(item);
      console.log(index);
      router.push(`/editaddress`);
    };
    const onSelect = (item, index) => console.log('切换地址：'+index);
    return {
      list,
      onAdd,
      onEdit,
      onSelect,
      chosenAddressId,
    };
  },
}
</script>

<style scoped>

</style>
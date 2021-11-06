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
import {address} from "../api/user";

export default {
  name: "address",
  components: {
    Navbar,
    [AddressList.name]: AddressList
  },
  setup() {
    const router = useRouter();
    const chosenAddressId = ref('');
    const chosenAddressId2 = ref('');
    const list = ref([]);
    onMounted(async ()=>{
      await address({}).then((res)=>{
        if(res.data.length){
          for (var i=0;i<res.data.length;i++){
            if(res.data[i].default==1){
              chosenAddressId2.value=res.data[i].id;
            }
            list.value.push({id:res.data[i].id,name:res.data[i].name,tel:res.data[i].mobile,address: res.data[i].address,isDefault: res.data[i].default==1?true:false});
          }
        }
      })
      chosenAddressId.value=chosenAddressId2.value;
    })
    const onAdd = () => {
      router.push(`/addaddress`);
    }
    const onEdit = (item, index) => {
      console.log(item);
      console.log(index);
      router.push(`/editaddress/${item.id}`);
    };
    const onSelect = (item, index) => {
      console.log(item)
    }
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
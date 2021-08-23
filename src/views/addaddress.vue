<template>
  <Navbar headName="添加地址"></Navbar>
  <van-address-edit
      :area-list="areaList"
      show-postal
      show-set-default
      :area-columns-placeholder="['请选择', '请选择', '请选择']"
      @save="onSave"
  />
</template>

<script>
import { ref, onMounted } from 'vue';
import Navbar from "../components/Navbar";
import { AddressEdit } from 'vant';
import { areaList } from '@vant/area-data';
export default {
  name: "addaddress",
  components: {
    Navbar,
    [AddressEdit.name]: AddressEdit
  },
  setup() {
    const onSave = (content) => {
      console.log(content);

    }

    return {
      onSave,
      areaList,
    };
  },
}
</script>

<style scoped>

</style>
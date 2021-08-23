<template>
  <Navbar headName="编辑地址"></Navbar>
  <van-address-edit
      :area-list="areaList"
      :address-info="state.addressInfo"
      show-postal
      show-set-default
      :area-columns-placeholder="['请选择', '请选择', '请选择']"
      @save="onSave"
  />
</template>

<script>
import { ref, onMounted, reactive, toRefs } from 'vue';
import Navbar from "../components/Navbar";
import { AddressEdit } from 'vant';
import { areaList } from '@vant/area-data';
export default {
  name: "addressedit",
  components: {
    Navbar,
    [AddressEdit.name]: AddressEdit
  },
  setup() {
    const state = reactive({
      addressInfo: {}
    });
    onMounted(() => {
      state.addressInfo.name = '张三';
      state.addressInfo.tel = '15290938565';
      state.addressInfo.province = '北京市';
      state.addressInfo.city = '北京市';
      state.addressInfo.country = '东城区';
      state.addressInfo.addressDetail = '清华大学';
      state.addressInfo.areaCode = '110101';
      state.addressInfo.postalCode = '123456';
      state.addressInfo.isDefault = true;
    })
    const onSave = (content) => {
      console.log(content);

    }

    return {
      onSave,
      areaList,
      state
    };
  },
}
</script>

<style scoped>

</style>
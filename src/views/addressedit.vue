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
import {useRoute} from 'vue-router';
import Navbar from "../components/Navbar";
import {AddressEdit, Toast} from 'vant';
import { areaList } from '@vant/area-data';
import {oneAddress,editAddress} from "../api/user";

export default {
  name: "addressedit",
  components: {
    Navbar,
    [AddressEdit.name]: AddressEdit
  },
  setup() {
    const route=useRoute();
    const state = reactive({
      addressInfo: {},
      id:0
    });
    onMounted(() => {
      const {id} = route.params;
      state.id=id;
      oneAddress({id:id}).then((res)=>{
        if(res.code==1){
          state.addressInfo.name = res.data.name;
          state.addressInfo.tel = res.data.mobile;
          state.addressInfo.province = res.data.province;
          state.addressInfo.city = res.data.city;
          state.addressInfo.country = res.data.area;
          state.addressInfo.addressDetail = res.data.address;
          state.addressInfo.areaCode = res.data.areacode;
          state.addressInfo.postalCode = res.data.postal_code;
          state.addressInfo.isDefault = res.data.default==1?true:false;
        }
      })

    })
    const onSave = (content) => {
      console.log(content);
      content.id=state.id;console.log(content);
      editAddress(content).then((res)=>{
        if(res.code==1){
          Toast('修改成功');
          window.history.back();
        }
      });
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
import { defineStore } from "pinia";
import {ref} from 'vue';

export const useCartStore = defineStore('cart',() =>{
    //1、定义status
    const cartList = ref([])
    //2、action
    const addcart = (goods) =>{
        //添加购物车操作
        const item = cartList.value.find((item) => goods.skuId === item.skuId)
        if(item){
            //找到了
            item.count++
        }else{
            cartList.value.push(goods)
        }
    }

    return{
        cartList,
        addcart
    }
},{
    persist:true,
})
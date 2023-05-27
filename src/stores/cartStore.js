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

    //删除购物车
    const delCart = (skuId) =>{
        //思路：
        //1、找到要删除的下标值
        //2、使用数组的过滤方法
        const idx = cartList.value.findIndex((item) => skuId === item.id)
        cartList.value.splice(idx,1)
    }
    return{
        cartList,
        addcart,
        delCart
    }
},{
    persist:true,
})
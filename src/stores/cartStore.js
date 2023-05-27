import { defineStore } from "pinia";
import {computed, ref} from 'vue';

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
    //计算属性
    //1、总的数量 所有项的count之和
    const allCount = computed(() => cartList.value.reduce((a,c) => a+c.count,0))
    //2、总价 所有项的count*price之和
    const allPrice = computed(() => cartList.value.reduce((a,c) => a + c.count * c.price,0))
    return{
        allCount,
        allPrice,
        cartList,
        addcart,
        delCart
    }
},{
    persist:true,
})
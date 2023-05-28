import { selectGroupKey } from "element-plus";
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
    //单选功能
    const singleCheck = () =>{
        //通过skuId找到要修改的那一项 然后把它的selected修改为传过来的selected
        const item = cartList.value.find((item) => item.skuId === skuId)
        item.selected = selected
    }
    //全选功能
    const allCheck = (selected) =>{
        //把cartList中的每一项的selected都设置为当前的全选框状态
        cartList.value.forEach(item => item.selected = selected)
    }
    //是否全选
    const isAll = computed(() => cartList.value.every((item) => item.selected))
    //计算属性
    //1、总的数量 所有项的count之和
    const allCount = computed(() => cartList.value.reduce((a,c) => a+c.count,0))
    //2、总价 所有项的count*price之和
    const allPrice = computed(() => cartList.value.reduce((a,c) => a + c.count * c.price,0))
    return{
        allCount,
        allPrice,
        cartList,
        isAll,
        addcart,
        delCart,
        singleCheck,
        allCheck
    }
},{
    persist:true,
})
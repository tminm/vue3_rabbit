import { getCategoryAPI } from "@/apis/category.js";
import { ref, onMounted } from "vue";
import { useRoute, onBeforeRouteUpdate } from "vue-router";
export function useCategory() {
    
    const categoryData = ref({});
    const route = useRoute();
    const getCategory = async (id = route.params.id) => {
        const res = await getCategoryAPI(id);
        categoryData.value = res.result;
    };

    onMounted(() => getCategory());
    onBeforeRouteUpdate((to) => {
        console.log('路由变化了');
        //存在问题
        getCategory(to.params.id)
    })

    return{
        categoryData
    }
}
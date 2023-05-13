import httpInstance from '@/utils/http'

//获取Banner轮播图数据
export function getBannerAPI(){
    return httpInstance({
        url:'/home/banner'
    })
}
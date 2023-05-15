import { useIntersectionObserver } from '@vueuse/core'
import { getBannerAPI } from "@/apis/home.js";
export const lazyPlugin = {
    install(app) {
        app.directive('img-lazy', {
            mounted(el, binding) {
               const {stop} = useIntersectionObserver(
                    el,
                    ([{ isIntersecting }]) => {
                        //进入视口区域
                        if (isIntersecting) {
                            el.src = binding.value
                            stop()
                        }
                    },
                )
            }
        })
    }
}
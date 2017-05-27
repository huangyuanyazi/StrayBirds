import PatentIndex from '../page/patent/index.vue'
import PatentDetail from '../page/patent/detail.vue'
import PatentSearch from '../page/patent/search.vue'
export default [
    {
        path: "/patent/",
        component: PatentIndex,
    },
    {
        path: "/patent/detail/",
        component: PatentDetail,
    },
    {
        path: "/patent/search/",
        component: PatentSearch,
    }
]
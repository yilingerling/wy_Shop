import Home from '../pages/Home/Home.vue'
import Classification from '../pages/Classification/Classification.vue'
import Good from '../pages/Good/Good.vue'
import Commodity from '../pages/Commodity/Commodity.vue'
import Personal from '../pages/Personal/Personal.vue'
import CRight from "../pages/Classification/cRight.vue"
export default [
    {
        path: "/",
        component: Home
    },
    {
        path: "/home",
        component: Home
    },
    {
        path: "/classification",
        component: Classification,
        children:[
            {
                path: "/classification/cRight/:id",
                component: CRight
            }
        ]
    },
    {
        path: "/good",
        component: Good
    },
    {
        path: "/commodity",
        component: Commodity
    },
    {
        path: "/personal",
        component: Personal
    },
    
]
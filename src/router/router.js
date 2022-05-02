import Vue from 'vue'
import Router from 'vue-router';
Vue.use(Router);
import About from '../components/About'
import Food from '../components/Food'
import Traditions from '../components/Tranditions'
import Craft from '../components/Craft'
import Music from '../components/Music'
import Places from '../components/Places'
let router= new Router({
    routes:[
        {path:'/',name:'about',component:About},
        {path:'/food',name:'food',component:Food,},
        {path:'/traditions',name:'traditions',component:Traditions},
        {path:'/crafts',name:'crafts',component:Craft},
        {path:'/music',name:'music',component:Music},
        {path:'/places',name:'places',component:Places},
       
    ],
    linkActiveClass: "active",
    
})
export default router;
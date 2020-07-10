import Vue from 'vue';
import Router from 'vue-router';
import Search from './routes/Search.vue';
import Profile from './routes/Profile.vue';

Vue.use(Router);

export default new Router({
    mode:'history',
    routes:[
        {
            path:'/',
            title: 'GitProfile',
            name:'search',
            component: Search
        },
        {
            path:'/user/:username',
            title:'GitProfile | :username',
            name:'user',
            component: Profile
        }
    ]
});
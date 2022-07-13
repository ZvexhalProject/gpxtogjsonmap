import Vue from 'vue'
import VueRouter from 'vue-router'

import Upload from '../components/Upload'
import PlayGround from '../components/PlayGround'
import Map from '../components/Map'

Vue.use(VueRouter)

const routes = [
    {
        path: "/",
        name: "upload",
        component: Upload
    },
    {
        path: "/map",
        name: "map",
        component: Map
    },
    {
        path: "/pg", 
        name: "playground",
        component: PlayGround
    }
];

const router = new VueRouter({
    mode: 'hash',
    routes: routes
});

export default router;
import Vue from 'vue'
import Router from 'vue-router'

import Table from '@/page/user/Table'
import Chart from '@/page/user/Chart'
import Index from '@/page/authority/Index'
import Card from '@/page/authority/Card'
import Form from '@/page/analyse/Form'
import Add from '@/page/analyse/Add'


Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/user/table',
            name: 'index',
            component: Table
        },
        {
            path: '/user/chart',
            name: "user",
            component: Chart
        },
        {
            path: '/authority/index',
            name: "index",
            component: Index
        },
        {
            path: '/authority/card',
            name: "card",
            component: Card
        },
        {
            path: '/analyse/add',
            name: "index",
            component: Add
        },
        {
            path: '/analyse/form',
            name: "card",
            component: Form
        }
    ]
})

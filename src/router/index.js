import Vue from 'vue'
import Router from 'vue-router'
// import Home from '../pages/home'
import Store from '@/vuex/store'
Vue.use(Router)
const router = new Router({
    mode: 'hash', //'history',
    routes: [{
            path: '/',
            redirect: '/overView/chart2',
        },
        // {
        //     path: '/home',
        //     name: 'Home',
        //     components: {
        //         Cont: resolve => {
        //             require(["../pages/home"], resolve)
        //         }
        //     },
        // },
        // {
        //     path: '/home/list',
        //     name: 'List',
        //     components: {
        //         Cont: resolve => {
        //             require(["../pages/home/list/"], resolve)
        //         }
        //     },
        // },
        
        {
            path: '/overView/chart1',
            name: 'chart1',
            components: {
                Cont: resolve => {
                    require(["../pages/overView/myChart/chart1"], resolve)
                },
                Aside: resolve => {
                    require(["../layout/sider/sider_2"], resolve)
                }

            },
        },
        {
            path: '/overView/chart2',
            name: 'chart1',
            components: {
                Cont: resolve => {
                    require(["../pages/overView/myChart/chart2"], resolve)
                },
                Aside: resolve => {
                    require(["../layout/sider/sider_2"], resolve)
                }

            },
        },
        {
            path: '/overView/chart3',
            name: 'chart1',
            components: {
                Cont: resolve => {
                    require(["../pages/overView/myChart/chartAndLine"], resolve)
                },
                Aside: resolve => {
                    require(["../layout/sider/sider_2"], resolve)
                }

            },
        },
        {
            path: '/overView/chart4',
            name: 'chart1',
            components: {
                Cont: resolve => {
                    require(["../pages/overView/myChart/chartAndLine"], resolve)
                },
                Aside: resolve => {
                    require(["../layout/sider/sider_2"], resolve)
                }

            },
        },
        {
            path: '/overView/chart5',
            name: 'chart1',
            components: {
                Cont: resolve => {
                    require(["../pages/overView/myChart/chart5"], resolve)
                },
                Aside: resolve => {
                    require(["../layout/sider/sider_2"], resolve)
                }

            },
        },
        {
            path: '/overView/chart6',
            name: 'chart1',
            components: {
                Cont: resolve => {
                    require(["../pages/overView/myChart/chart6"], resolve)
                },
                Aside: resolve => {
                    require(["../layout/sider/sider_2"], resolve)
                }

            },
        },
        {
            path: '/overView/chart7',
            name: 'chart1',
            components: {
                Cont: resolve => {
                    require(["../pages/overView/myChart/chartAndPie"], resolve)
                },
                Aside: resolve => {
                    require(["../layout/sider/sider_2"], resolve)
                }

            },
        },
        {
            path: '/overView/chart8',
            name: 'chart1',
            components: {
                Cont: resolve => {
                    require(["../pages/overView/myChart/chartAndLine"], resolve)
                },
                Aside: resolve => {
                    require(["../layout/sider/sider_2"], resolve)
                }

            },
        },
        {
            path: '/overView/chart9',
            name: 'chart1',
            components: {
                Cont: resolve => {
                    require(["../pages/overView/myChart/chartAndPie"], resolve)
                },
                Aside: resolve => {
                    require(["../layout/sider/sider_2"], resolve)
                }

            },
        },
        //以后删除结束
    ]
})

// router.beforeEach((to, from, next) => {
//     Store.dispatch('IS_PAGELOADING/incrementAsync', {
//             isShow: true,
//             msg: "正在加载中……"
//         })

//     next();
// })

// router.afterEach((to, from) => {

//     Store.dispatch('IS_PAGELOADING/incrementAsync', {
//         isShow: false,
//         msg: "正在加载中……"
//     })
// })


export default router
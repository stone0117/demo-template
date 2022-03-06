import Layout from '@/layout'

export default  [
  { path: '/redirect', component: Layout, hidden: true, children: [{ path: '/redirect/:path(.*)', component: () => import('@/views/redirect/index') }] },
  { path: '/404', component: () => import('@/views/error-page/404'), hidden: true },
  { path: '/401', component: () => import('@/views/error-page/401'), hidden: true },
  {
    path    : '/', component: Layout, redirect: '/dashboard',
    children: [
      {
        path     : 'dashboard',
        component: () => import('@/views/dashboard/index'),
        name     : 'Dashboard',
        meta     : {
          title: '首页',
          icon : 'el-icon-house',
          // icon : 'el-icon-s-home',
          // icon : 'dashboard',
          affix: true,
          // noCache: true,
        },
      },
    ],
  },
  {
    path      : '/demo-management',
    component : Layout,
    redirect  : '/demo-management/table-management',
    alwaysShow: true,
    name      : 'DemoManagement',
    meta      : { title: 'Demo管理', icon: 'el-icon-folder' },
    children  : [
      {
        path     : 'immutable-test',
        component: () => import('@/views/demo-management/immutable-test'),
        name     : 'ImmutableTest',
        meta     : {
          title  : 'immutable-test',
          noCache: true,
        },
      },
    ],
  },
  { path: '*', redirect: '/404', hidden: true },
]

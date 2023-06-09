const MainRoutes = {
    path: '/main',
    meta: {
        requiresAuth: true
    },
    redirect: '/main',
    component: () => import('@/layouts/full/FullLayout.vue'),
    children: [
        {
            name: 'Dashboard',
            path: '/',
            component: () => import('@/views/dashboard/index.vue')
        },
        {
            name: 'Typography',
            path: '/ui/typography',
            component: () => import('@/views/components/Typography.vue')
        },
        {
            name: 'Shadow',
            path: '/ui/shadow',
            component: () => import('@/views/components/Shadow.vue')
        },
        {
            name: 'Icons',
            path: '/icons',
            component: () => import('@/views/pages/Icons.vue')
        },
        {
            name: 'UserTable',
            path: '/userTable',
            component: () => import('@/components/user/ConsultaTable.vue')
        },
        {
            name: 'Statistic',
            path: '/statistic',
            component: () => import('@/views/pages/Statistics.vue')
        },
        {
            name: 'UserManager',
            path: '/userManager',
            component: () => import('@/views/pages/UserManager.vue')
        },
        {
            name: 'EditorTable',
            path: '/editorTable',
            component: () => import('@/views/pages/EditorTable.vue')
        },
        {
            name: 'Item',
            path: '/item/:id',
            component: () => import('@/views/pages/ItemCraft.vue')
          },
          {
            name: 'Chassi',
            path: '/chassi/:id',
            component: () => import('@/views/pages/ChassiProfile.vue')
          },
          
    ]
};

export default MainRoutes;

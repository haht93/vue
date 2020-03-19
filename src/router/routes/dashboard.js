export default {
  path: '/dashboard',
  component: () => import('@/pages/dashboard/Layout.vue'),
  children: [
    {
      path: '',
      component: () => import('@/pages/dashboard/Top.vue'),
    },
    {
      path: 'profile',
      component: () => import('@/pages/dashboard/Profile.vue'),
    }
  ],
}

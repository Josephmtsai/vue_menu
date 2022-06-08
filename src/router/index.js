import { createRouter, createWebHistory } from 'vue-router';
const routes = [
  {
    path: '/',
    name: 'BasicLayout',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../layout/BasicLayout.vue'),
    children: [
      {
        path: '',
        name: 'veeValidate',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "validate" */ '../views/VeeValidate.vue'),
      },
      {
        path: '/vee-validate-steppers',
        name: 'veeValidateMultiSteppers',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "validate" */ '../views/VeeValidate.vue'),
      },
      {
        path: '/error-sample',
        name: 'SampleError',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "validate" */ '../views/ErrorSample.vue'),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

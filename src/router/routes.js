
const routes = [
  {
    
    path: '',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '/inbox', component: () => import('pages/inbox.vue') },
      {path: '/outbox', component:() => import('pages/outbox.vue')},
      {path:'/trash', component:() => import('pages/trash.vue')}
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes

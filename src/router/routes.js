
const routes = [
  {
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: 'alchemie', component: () => import('pages/alchemie.vue') },
      { path: 'kochkunst', component: () => import('pages/kochkunst.vue') },
      { path: 'ingi', component: () => import('pages/ingi.vue') },
      { path: 'inschrift', component: () => import('pages/inschrift.vue') },
      { path: 'juwe', component: () => import('pages/juwe.vue') },
      { path: 'schmiede', component: () => import('pages/schmiede.vue') },
      { path: 'schneider', component: () => import('pages/schneider.vue') },
      { path: 'verzauber', component: () => import('pages/verzauber.vue') },
    ],
  },
];

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue'),
  });
}

export default routes;

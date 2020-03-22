
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [

      {
        path: '', component: () => import('pages/Index.vue')
      },
      // Toolbar Icon page
      {
        path: 'tool', component: () => import('pages/ToolbarIconPage.vue')
      },
      // Products page
      {
        path: 'products', component: () => import('pages/ProductsPage.vue')
      },
      // Solutions Photos page
      {
        path: 'photos', component: () => import('pages/SolutionsPhotosPage.vue')
      },
      // Solutions Videos page
      {
        path: 'videos', component: () => import('pages/SolutionsVideosPage.vue')
      },
      // Solution Articles page
      {
        path: 'articles', component: () => import('pages/SolutionsArticlesPage.vue')
      },
      // Header Banner page
      {
        path: 'banner', component: () => import('pages/HeaderBannerPage.vue')
      },
      // IBM Spectrum Protect Plus page
      {
        path: 'protect', component: () => import('pages/ProtectPlusPage.vue')
      },
      // Get Started Free Link page
      {
        path: 'free', component: () => import('pages/GetStartedFreePage.vue')
      }
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

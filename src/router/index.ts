import AccountComponent from '@/components/AccountComponent.vue'
import CategoryComponent from '@/components/CategoryComponent.vue'
import ChannelComponent from '@/components/ChannelComponent.vue'
import HistoryComponent from '@/components/HistoryComponent.vue'
import HomeComponent from '@/components/HomeComponent.vue'
import LoginComponent from '@/components/Pages/LoginComponent.vue'
import SettingComponent from '@/components/SettingComponent.vue'
import SingleChannelComponent from '@/components/SingleChannelComponent.vue'
import SubscriptionComponent from '@/components/SubscriptionComponent.vue'
import UploadComponent from '@/components/UploadComponent.vue'
import UploadVideoComponent from '@/components/UploadVideoComponent.vue'
import VideoPageComponent from '@/components/VideoPageComponent.vue'
import AdminLayout from '@/views/layout/admin/AdminLayout.vue'
import LoginLayout from '@/views/layout/auth/LoginLayout.vue'
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeComponent,
    meta: {
      layout: AdminLayout
    }
  },
  {
    path: '/channels',
    name: 'channel',
    component: ChannelComponent,
    meta: {
      layout: AdminLayout
    }
  },
  {
    path: '/single-channels',
    name: 'single-channel',
    component: SingleChannelComponent,
    meta: {
      layout: AdminLayout
    }
  },
  {
    path: '/videos',
    name: 'video',
    component: VideoPageComponent,
    meta: {
      layout: AdminLayout
    }
  },
  {
    path: '/upload-videos',
    name: 'upload-video',
    component: UploadVideoComponent,
    meta: {
      layout: AdminLayout
    }
  },
  {
    path: '/upload',
    name: 'upload',
    component: UploadComponent,
    meta: {
      layout: AdminLayout
    }
  },
  {
    path: '/histories',
    name: 'history',
    component: HistoryComponent,
    meta: {
      layout: AdminLayout
    }
  },
  {
    path: '/categories',
    name: 'category',
    component: CategoryComponent,
    meta: {
      layout: AdminLayout
    }
  },
  {
    path: '/account',
    name: 'account',
    component: AccountComponent,
    meta: {
      layout: AdminLayout
    }
  },
  {
    path: '/subscriptions',
    name: 'subscriptions',
    component: SubscriptionComponent,
    meta: {
      layout: AdminLayout
    }
  },
  {
    path: '/settings',
    name: 'settings',
    component: SettingComponent,
    meta: {
      layout: AdminLayout
    }
  },
  {
    path: '/auth',
    name: 'auth',
    component: LoginLayout
  },

  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

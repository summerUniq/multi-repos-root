import Vue from 'vue'
import VueRouter from 'vue-router'
import SellerPage from '@/views/SellerPage'
import TrendPage from '@/views/TrendPage'
import HotPage from '@/views/HotPage'
import MapPage from '@/views/MapPage'
import RankPage from '@/views/RankPage'
import StockPage from '@/views/StockPage'

Vue.use(VueRouter)

const routes = [
  { path: '/sellerpage', component: SellerPage },
  { path: '/trendpage', component: TrendPage },
  {
    path: '/hotpage', component: HotPage
  },
  {
    path: '/mappage', component: MapPage
  },
  {
    path: '/rankPage', component: RankPage
  },
  {
    path: '/stockpage', component: StockPage
  }
]

const router = new VueRouter({
  routes
})

export default router

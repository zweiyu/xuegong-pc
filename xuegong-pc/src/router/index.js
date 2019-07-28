import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// 动态import，实现路由懒加载
//首页
const Home = () => import('@/pages/home/index')
//登录页
const Login = () => import('@/pages/login/index')
//首页的其他页面
const HomeOtherIndex = () => import('@/pages/home-other/index')
const HelpGuide = () => import('@/pages/home-other/children/help-guide')
const Contact = () => import('@/pages/home-other/children/contact')
const Introduction = () => import('@/pages/home-other/children/introduction')
//个人信息
const Information = () => import('@/pages/information/index')
const CollectInfo = () => import('@/pages/information/children/collect-info')
const BasicInfo = () => import('@/pages/information/children/basic-info')
const FamilyInfo = () => import('@/pages/information/children/family-info')
const Journal = () => import('@/pages/information/children/journal')

// 全局路由导航
const beforeEach = ((to, from, next) => {
  
})

const afterEach = ((to,from,next) => {
  
})

// 滚动行为，实现切换路由是滚动到顶部
const scrollBehavior = (to, from, savedPosition) => {
  return { x: 0, y: 0 }
}

export default new Router({
  beforeEach,
  afterEach,
  scrollBehavior,
  routes: [
    //首页
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    //登录页
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    //首页的其他页面
    {
      path: '/HomeOtherIndex',
      name: 'HomeOtherIndex',
      component: HomeOtherIndex,
      children: [
        {
          path: '/HelpGuide',
          name: 'HelpGuide',
          component: HelpGuide
        },
        {
          path: '/Contact',
          name: 'Contact',
          component: Contact
        },
        {
          path: '/Introduction',
          name: 'Introduction',
          component: Introduction
        },
      ]
    },
    //个人信息
    {
      path: '/Information',
      name: 'Information',
      component: Information,
      children: [
        {
          path: '/CollectInfo',
          name: 'CollectInfo',
          component: CollectInfo
        },
        {
          path: '/BasicInfo',
          name: 'BasicInfo',
          component: BasicInfo
        },
        {
          path: '/FamilyInfo',
          name: 'FamilyInfo',
          component: FamilyInfo
        },
        {
          path: '/Journal',
          name: 'Journal',
          component: Journal
        },
      ]
    }
  ]
})

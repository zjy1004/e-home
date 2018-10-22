import Vue from 'vue'
import Router from 'vue-router'

const components = {
  index: () => import('@/views/index/index'),
  inform: () => import('@/views/inform/index'),
  login: () => import('@/views/login/index'),

  mine: () => import('@/views/mine/index'),
  updateInfo: () => import('@/views/mine/updateInfo'),
  info: () => import('@/views/mine/info'),
  intergral: () => import('@/views/mine/intergral'),
  changePwd: () => import('@/views/mine/changePwd'),
  pay: () => import('@/views/mine/pay'),



  newsContent: () => import('@/views/newsContent/index'),


  neweyes: () => import('@/views/newsPages/neweyes'),
  oneclick: () => import('@/views/newsPages/oneclick'),
  showid: () => import('@/views/newsPages/showid'),
  today: () => import('@/views/newsPages/today'),

  life: () => import('@/views/life/index'),
  politics: () => import('@/views/newsPages/politics'),
  report: () => import('@/views/life/report'),
  summarize: () => import('@/views/life/summarize'),
  critic: () => import('@/views/life/critic'),
  find: () => import('@/views/life/find'),


  interaction: () => import('@/views/interaction/index'),

  anytimestudy: () => import('@/views/newsPages/anytimestudy'),
  anytimephoto: () => import('@/views/newsPages/anytimephoto'),
  system: () => import('@/views/newsPages/system'),
  activity: () => import('@/views/newsPages/activity'),

};

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/index'
    },
    {
      path: '/index',
      name: '首页',
      component: components.index,
    },
    {
      path: '/inform',
      name: '通知早知道',
      component: components.inform
    },
    {
      path: '/login',
      name: '登陆',
      component: components.login
    },
    {
      path: '/mine',
      name: '我的党建',
      component: components.mine
    },
    {
      path: '/intergral',
      name: '个人量化积分',
      component: components.intergral
    },
    {
      path: '/changePwd',
      name: '修改密码',
      component: components.changePwd
    },
    {
      path: '/pay',
      name: '党费缴纳',
      component: components.pay
    },
    {
      path: '/info',
      name: '个人信息',
      component: components.info
    },
    {
      path: '/updateInfo',
      name: '修改个人信息',
      component: components.updateInfo
    },


    {
      path: '/newsContent/:id',
      name: '新闻详情',
      component: components.newsContent
    },

    {
      path: '/neweyes',
      name: '信工新闻眼',
      meta: {
        type: 0
      },
      component: components.neweyes
    },
    {
      path: '/life',
      name: '掌上组织生活',
      component: components.life
    },
    {
      path: '/politics',
      name: '政治学习',
      meta: {
        type: 8
      },
      component: components.politics
    },
    {
      path: '/report',
      name: '思想汇报',
      component: components.report
    },
    {
      path: '/summarize',
      name: '心得总结',
      component: components.summarize
    },
    {
      path: '/critic',
      name: '民主评议',
      component: components.critic
    },
    {
      path: '/find',
      name: '流动党员找组织',
      component: components.find
    },

    {
      path: '/interaction',
      name: '党员云互动',
      component: components.interaction
    },
    {
      path: '/oneclick',
      name: '党建一点通',
      meta: {
        type: 3
      },
      component: components.oneclick
    },
    {
      path: '/showid',
      name: '党员亮身份',
      meta: {
        type: 5
      },
      component: components.showid
    },
    {
      path: '/today',
      name: '党史上的今天',
      component: components.today
    },

    {
      path: '/anytimephoto',
      name: '随时随地拍',
      meta: {
        type: 7
      },
      component: components.anytimephoto
    },
    {
      path: '/anytimestudy',
      name: '随时随地学',
      meta: {
        type: 6
      },
      component: components.anytimestudy
    },
    {
      path: '/system',
      name: '制度建设',
      meta: {
        type: 4
      },
      component: components.system
    },
    {
      path: '/activity',
      name: '特色活动',
      meta: {
        type: 1
      },
      component: components.activity
    },




  ]
})

import Vue from 'vue';
import Router from 'vue-router';
const routerPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error=> error)
}

Vue.use(Router)

const Routers = [
  {
    path:'/index',
    name:'home',
    component:resolve=>(require(["@/components/home"],resolve)),
  },
  {
    path:'*',
    redirect:'/index'
  },
  {
    path:'/login',
    name:'login',
    component:resolve=>(require(["@/components/login/login"],resolve))
  },
  {
    path:'/aiSmartAppList', //AI智能应用列表页
    name:'aiSmartAppList',
    component:resolve=>(require(["@/components/aismartapp/aiSmartAppList"],resolve))
  },
  {
    path:'/textReocList', //文字识别列表页
    name:'textReocList',
    component:resolve=>(require(["@/components/aismartapp/textReocList"],resolve)) 
  },
  {
    path:'/faceRecoList', //人脸识别列表页
    name:'faceRecoList',
    component:resolve=>(require(["@/components/aismartapp/faceRecoList"],resolve)) 
  },
  {
    path:'/VideoRecoList', //视频识别列表页
    name:'VideoRecoList',
    component:resolve=>(require(["@/components/aismartapp/VideoRecoList"],resolve)) 
  },
  {
    path:'/aiSmartAppDetail', //AI智能应用详情页
    name:'aiSmartAppDetail',
    component:resolve=>(require(["@/components/aismartapp/aiSmartAppDetail"],resolve)) 
  },
  {
    path:'/shortSpeechRecoDetail', //段语音识别详情页
    name:'shortSpeechRecoDetail',
    component:resolve=>(require(["@/components/aismartapp/shortSpeechRecoDetail"],resolve))  
  },
  {
    path:'/searchDetail', //搜索详情页
    name:'searchDetail',
    component:resolve=>(require(["@/components/aismartapp/searchDetail"],resolve))  
  },
  {
    path:'/opinionAnalysisDetail', //舆情分析详情
    name:'opinionAnalysisDetail',
    component:resolve=>(require(["@/components/aismartapp/opinionAnalysisDetail"],resolve))  
  },
  {
    path:'/recommendDetail', //推荐详情页
    name:'recommendDetail',
    component:resolve=>(require(["@/components/aismartapp/recommendDetail"],resolve))  
  },
  {
    path:'/obserStarList', //观星台列表页
    name:'obserStarList',
    component:resolve=>(require(["@/components/obserStar/obserStarList"],resolve))
  },
  {
    path:'/obserStarLiveDetail', //观星台民生类详情
    name:'obserStarLiveDetail',
    component:resolve=>(require(["@/components/obserStar/obserStarLiveDetail"],resolve))
  },
  {
    path:'/obserStarPoliticDetail', //观星台政治类详情
    name:'obserStarPoliticDetail',
    component:resolve=>(require(["@/components/obserStar/obserStarPoliticDetail"],resolve))
  },
  {
    path:'/obserStarEconoDetail', //观星台经济类详情
    name:'obserStarEconoDetail',
    component:resolve=>(require(["@/components/obserStar/obserStarEconoDetail"],resolve))
  },
  {
    path:'/obserStarCulturDetail', //观星台文化类详情
    name:'obserStarCulturDetail',
    component:resolve=>(require(["@/components/obserStar/obserStarCulturDetail"],resolve))
  },
  {
    path:'/obserStarData', //观星台数据部分
    name:'obserStarData',
    component:resolve=>(require(["@/components/obserStar/obserStarData"],resolve))
  },
  {
    path:'/insightData', //数据洞察部分
    name:'insightData',
    component:resolve=>(require(["@/components/insightData/insightData"],resolve))
  },
  {
    path:'/houseData', //数据洞察部分
    name:'houseData',
    component:resolve=>(require(["@/components/houseData/houseData"],resolve))
  }
];

const RouterConfig = {
  mode:'history',
  routes:Routers
};

export default new Router(RouterConfig);

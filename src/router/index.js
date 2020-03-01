import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import MovieList from '@/components/MovieList'
import content from '@/components/content'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path:'/movielist',
      name:'MovieList',
      component:MovieList

    },
    {
      path:'/content',
      name:'content',
      component:content

    },
  ],
})

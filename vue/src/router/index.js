import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import two from  '@/components/two'
import three from '@/components/three'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
    	path: '/two',
    	name: 'two',
    	component: two
    },
    {
    	path: '/three',
    	name: 'three',
    	component: three
    }
  ]
});

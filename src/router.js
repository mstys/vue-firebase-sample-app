import Vue from 'vue';
import Router from 'vue-router';
import firebase from 'firebase';

import Home from './views/Home.vue';
import Beers from './views/Beers.vue';
import Login from '@/views/Login.vue';
import Dashboard from '@/views/Dashboard.vue';
import CreateUser from '@/views/CreateUser.vue';
import Modal from '@/components/Modal.vue';

import HelloWorld from '@/components/HelloWorld.vue';


Vue.use(Router);

const RouterVue = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/about-conf',
      name: 'aboutProject',
      components: {
        default: Home,
        modal: Modal
      },
      props: {
        modal: () => ({ content: HelloWorld })
      }
    },
    {
      path: '/beers',
      name: 'beers',
      component: Beers,
    },
    {
      path: '/login',
      name: 'login',
      components: {
        default: Home,
        modal: Modal
      },
      props: {
        modal: () => ({ content: Login })
      }
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard,
      meta: {
        private: true
      }
    },
    {
      path: '/dashboard/create',
      name: 'createUser',
      components: {
        default: Dashboard,
        modal: Modal
      },
      props: {
        modal: () => ({ content: CreateUser })
      },
      meta: {
        private: true
      }
    },
  ]
});

RouterVue.beforeEach((to, from, next) => {
  const { currentUser } = firebase.auth();

  if (to.matched.some(route => route.meta.private) && !currentUser) {
    next('/login');
  } else {
    next();
  }
});

export default RouterVue;

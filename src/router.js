import Vue from 'vue';
import Router from 'vue-router';
import firebase from 'firebase';

import Home from './views/Home.vue';
import Beers from './views/Beers.vue';
import Meals from './views/Meals.vue';
import Login from '@/views/Login.vue';
import Dashboard from '@/views/Dashboard.vue';
import BeerDetails from '@/components/BeerDetails.vue';
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

      meta: {
        showModal: false
      }
    },
    {
      path: '/beers',
      name: 'beers',
      component: Beers,

      children: [
        {
          path: ':id/details',
          name: 'beerDetails',
          components: {
            modal: BeerDetails
          },
          meta: {
            showModal: true
          }
        }
      ]
    },
    {
      path: '/meals',
      name: 'meals',
      component: Meals
      // props: {
      //   modal: { content: HelloWorld },
      // },
    },
    {
      path: '/meals/create',
      name: 'createMeal',
      components: {
        default: Meals,
        modal: Modal
      },
      props: {
        modal: () => ({ content: HelloWorld })
      }
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
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard,
      meta: {
        private: true
      }
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
});

RouterVue.beforeEach((to, from, next) => {
  const currentUser = firebase.auth().currentUser;
  console.log('User', currentUser);

  if (to.matched.some(route => route.meta.private) && !currentUser) {
    next('/login');
  } else {
    next();
  }
});

export default RouterVue;

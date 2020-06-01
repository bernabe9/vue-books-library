import Vue from 'vue';
import VueRouter from 'vue-router';

import Books from './pages/Books.vue';
import BookDetails from './pages/BookDetails.vue';

Vue.use(VueRouter);

const routes = [
  { path: '/', component: Books },
  { path: '/books/:id', component: BookDetails }
];

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes
});

export default router;

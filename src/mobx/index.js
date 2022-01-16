/*
 * @Description: 
 * @Autor: lifenglei
 * @Date: 2021-10-26 15:03:11
 */


import { IndexStore } from './store/index';
import { IndexAction } from './action/index';
import { IndexComputed } from './computed/index';

const store = {
  Index: new IndexStore(),
};
const action = {
  Index: new IndexAction(store),
};
const computed = {
  Index: new IndexComputed(store),
};
export default {
  store,
  action,
  computed,
};

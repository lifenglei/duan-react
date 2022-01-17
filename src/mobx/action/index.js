/*
 * @Description: 
 * @Autor: lifenglei
 * @Date: 2022-01-16 10:45:08
 */
import { action, runInAction, toJS } from "mobx";
export class IndexAction{
  constructor({ Index }) {
    this.Index = Index;
  }
  @action('初始化图片')
  InitImage(url) {
    this.Index.imageUrl = url
  }
}

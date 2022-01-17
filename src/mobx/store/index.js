/*
 * @Descriptio 首页数据
 * @Autor: lifenglei
 * @Date: 2022-01-16 10:35:08
 */

import { makeAutoObservable } from 'mobx';

export class IndexStore {
  constructor() {
    makeAutoObservable(this)
  }
  imageUrl = 'https://beijing.xstore.qihu.com/qihoo-im-ccwork-beijing-private/image/20210607/a1/a1f8b02354846fc97cd0c63cbceaefb8.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=f238395948be7a5b7fba8358b0d654c7%2F20210607%2Fbeijing%2Fs3%2Faws4_request&X-Amz-Date=20210607T073646Z&X-Amz-Expires=31536000&X-Amz-SignedHeaders=host&response-content-disposition=attachment%3B%20filename%3D%222021%205%E5%A4%87%E4%BB%BD%202%2Epng%22&X-Amz-Signature=ad257bf0ba622b08add25e1ef37d7a40b3e7cecee8c7a7018002f4cabaf7f490';
}


/*
 * @Description: 
 * @Autor: lifenglei
 * @Date: 2022-01-16 10:50:21
 */
import React, { Component } from 'react';
import './index.scss';
import mobx from '../../mobx/index'
import { observer } from 'mobx-react';
import {requestUrl} from '../../api/http'
const { store, action } = mobx;
import { Image } from 'antd-mobile'
@observer
 class PageIndex extends Component{
  constructor(props) {
    super(props);
    this.state = {
      
    }
  }
  componentDidMount(){
    requestUrl({
      url:'./mock/index.json',
      method:'GET',
      params:{},
      successCallBack:(res)=>{
        console.log(res)
      },
      errorCallBack:(error)=>{
        console.log(error)
      }
    })
  }
  render() {
    const { imageUrl } = store.Index;
    return (
      <div className="page-wrap">
        <Image src={imageUrl}  fit='fill' />
        <p className="word">这是一段文字</p>
      </div>
    )
  }
}
export default PageIndex

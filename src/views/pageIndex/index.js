/*
 * @Description: 
 * @Autor: lifenglei
 * @Date: 2022-01-16 10:50:21
 */
import React, { Component } from 'react';
import './index.scss';
import mobx from '../../mobx/index'
import { observer } from 'mobx-react';
const { store, action } = mobx;
import { Image } from 'antd-mobile'
@observer
 class PageIndex extends Component{
  constructor(props) {
    super(props);
    this.state = {
      
    }
  }
  render() {
    const { imageUrl } = store.Index;
    return (
      <div className="page-wrap">
        <Image src={imageUrl}  fit='fill' />
      </div>
    )
  }
}
export default PageIndex

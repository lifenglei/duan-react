/**
 * 设置请求头
 */

const header = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
};

/**
 * 
 * @param {*} url  请求地址
 * @param {*} method  请求方法
 * @param {*} params  请求参数
 * @param {*} successCallBack 成功回调
 * @param {*} errorCallBack  失败的回调
 */

export function requestUrl({url,method,params,successCallBack,errorCallBack}){
    if ('GET' === method) {
        get(url, params, successCallBack, errorCallBack);
      }
      else {
        post(url, params, successCallBack, errorCallBack);
      }
}

/**
 * get请求
 */
async function get (url, params, successCallBack, errorCallBack){
    let str = toQueryString(params);
    if (str && str.length > 0) url += '?' + str;
    try {
        let response = await fetch(url);
        console.log('reqyestUrl:' + url);
        let responseJson = await response.json();
        return successCallBack(responseJson);
    } catch (error) {
        return errorCallBack(error);
  }
}

/**
 * post请求
 */
 async function post(url, params, successCallBack, errorCallBack) {
    try {
      // 注意这里的await语句，其所在的函数必须有async关键字声明
      let response = await fetch(url, {
        method: 'POST',
        headers: header,
        body: JSON.stringify(params)
      });
  
      console.log('reqyestUrl:' + url);
      let responseJson = await response.json();
  
      return successCallBack(responseJson);
    } catch (error) {
      return errorCallBack(error);
    }
  }

  /**
 * 用于对对象编码以便进行传输
 * @param obj 对象参数
 * @returns {string} 返回字符串
 */
function toQueryString(obj) {
    let str = '';
    if (obj) {
      let keys = [];
      for (let key in obj) {
        keys.push(key);
      }
      keys.forEach((key, index) => {
        str += key + '=' + obj[key];
        if (index !== keys.length - 1) {
          str += '&';
        }
      });
    }
    return str;
  }

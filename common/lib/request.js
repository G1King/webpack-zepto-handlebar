/*
 * @Author: Leo
 * @Date: 2018-09-10 10:01:53
 * @Last Modified by: Leo
 * @Last Modified time: 2019-07-03 13:51:55
 */

/*
 * type              请求的方式  默认为get
 * url               发送请求的地址
 * param             发送请求的参数
 * isShowLoader      是否显示loader动画  默认为false
 * dataType          返回JSON数据  默认为JSON格式数据
 * callBack          请求的回调函数
 */
export default function httpRequest (opts) {
  var _defalut = opts
  _defalut.type = opts.type || 'GET'
  _defalut.param = opts.param || {}
  _defalut.url = opts.url
  _defalut.isShowLoader = opts.isShowLoader || false
  _defalut.ShowLoaderText = opts.ShowLoaderText || '内容提交中'
  _defalut.dataType = opts.dataType || 'json'
  _defalut.success = opts.success
  _defalut.error = opts.error || ''
  _defalut.complete = opts.complete || ''

  _defalut.param['userId'] = (_defalut.param['userId'] == undefined ? window.localStorage.getItem('userId') : _defalut.param['userId'])
  _defalut.param['token'] = window.localStorage.getItem('token')
  if (_defalut.type.toUpperCase() === 'POST') {
    if (_defalut.url.indexOf('\?') !== -1) {
      _defalut.url += '&token=' + window.localStorage.getItem('token')
    } else {
      _defalut.url += '?token=' + window.localStorage.getItem('token')
    }
    if (!(typeof _defalut.param === 'string')) {
      _defalut.param = JSON.stringify(_defalut.param)
    }
  }
  return $.ajax({
    type: _defalut.type,
    url: _defalut.url,
    data: _defalut.param,
    dataType: _defalut.dataType,
    timeout: 20000,
    traditional: true,
    contentType: 'application/json; charset=utf-8'
  })
}

import $ from '../../common/lib/zepto.min'
// import $ from '../../static/zepto.min.js'
// import aside from '../components/aside.hbs'
// import header from '../components/header.hbs'
// import content from '../components/content.hbs'
// import list from '../components/list-item.hbs'
import indexBar from '@c/index.hbs'
import '../css/index.css'
import '../../common/css/reset.css'
// $('#index').append(header({}))
// $('#index').append(aside({}))
$(function () {
  $('#index').append(indexBar([{
    title: '主页',
    desc: '数据列表'
  }]))
})
// $('.tr-id').click(function () {
//   alert('111')
//   location.href = '../htmls/detail.html'
// })
// $('#btn').on('click', function () {
//   $('#box').html(list({
//     list: [{
//       name: 'list',
//       age: 15,
//       id: 4
//     },
//     {
//       name: 'www',
//       age: 16,
//       id: 5
//     }
//     ]
//   }))
// })
// $('#data_table').on('click', 'td a.opt-delete', function (ev) {
//   const target = ev.target
//   console.log('删除的id为', target.dataset.id)
// })
// $('#data_table').on('click', 'td a.opt-update', function (ev) {
//   const target = ev.target
//   console.log('更新的id为', target.dataset.id)
// })

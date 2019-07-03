import $ from '../../common/lib/zepto.min'
import '../../common/lib/flexible.min'
import '../css/index.css'
import '../../common/css/reset.css'
import HTTP from '../../common/lib/request'
import indexBar from '@c/index.hbs'

$(function () {
  $('#index').append(indexBar([{
    title: '主页',
    desc: '数据列表'
  }]))
  $('.request').tap(function () {
    HTTP({
      url: 'http://ldtest.spicu.com.cn/leaderAppApi/test/study/userMedalRanking/getMedalNum',
      param: {
        specialId: '6d2f4a0e085c4827be468452874eca41',
        userId: '46db28cef871485f88fc1e1b3ba77521',
        token: '46db28cef871485f88fc1e1b3ba77521B9D903E696C54E070705EE5C69E25316'

      }
    }).done(r => {
      console.log(r)
    })
  })
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

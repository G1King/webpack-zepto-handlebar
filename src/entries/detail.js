import $ from '../../common/lib/zepto.min'
import '../../common/lib/flexible.min'
import HTTP from '../../common/lib/request'
import header from '@c/header.hbs'
import '../../common/css/reset.css'
$('#detail').html(header({
  title: '我是编译过来的'
}))

$('h1').click(function () {
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

import $ from '../../common/lib/zepto.min'
import header from '@c/header.hbs'
import {_html} from '../../common/lib/zepto-handlebar.js'
import '../../common/css/reset.css'
$('#detail').html(header({
  title: '我是编译过来的'
}))
alert(_html)

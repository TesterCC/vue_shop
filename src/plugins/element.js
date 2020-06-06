import Vue from 'vue'
import { Button } from 'element-ui'
import { Form, FormItem, Input } from 'element-ui'   //1.导入组件, 可多个导入

Vue.use(Button)
Vue.use(Form)  // 2.注册为全局可用组件
Vue.use(FormItem)
Vue.use(Input)

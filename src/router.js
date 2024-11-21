/* 
   存放controller中的逻辑
*/
const test = require("./controller/test")
const home_search = require('./controller/home_search')
const shop_list = require('./controller/shop_list')

/* 
   定义接口函数模块
   向外暴露一个函数，并传递一个参数server
   定义的app就是参数server
*/
module.exports = (app) => {
   /* 
      app是创建的应用
      app.use使用路由中间件?(路由是特定的中间件，用来处理特定url请求的逻辑)
      第一个参数是请求的url(设置路由链接(如：/api/test))
      第二个参数是处理函数,一般在controller里处理数据的函数
   */
   app.use('/api/test', test)
   app.use('/api/homeSearch', home_search)
   app.use('/api/shopList', shop_list)
}
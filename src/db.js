/* 
   包含多个返回数据的函数
   调用返回的 数据，如果数据不用处理直接返回的不用到controller里面再去定义
*/
const test = require('../data/test')
const home_page = require("../data/home_page")
const shop_list = require("../data/shop_list")


function getHomePageData(data) {
    return {
        code: 0,
        msg: "请求成功",
        data
    }
}

module.exports = () => {
    return {
        test: test(), //test()获取的测试数据
        homePage: getHomePageData(home_page()), //home_page()获取数据
        shopList: shop_list()
    }
}
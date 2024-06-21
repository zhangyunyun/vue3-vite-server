/* 
   可以包含多个函数
   处理定义的数据的逻辑函数
        处理的数据就是data文件夹下定义的数据
*/
const test = require("../../data/test")
module.exports = (req, res, next) => {
    //获取测试数据
    const testData = test()
    console.log('=====================')
    console.log(testData)
        //手动修改测试数据
    testData.desc = '我是被修改的初始测试数据'
        //响应数据(即返回前台的数据)
        // res.reject(testData)
    res.success(testData)
        // res.fail("哈哈,请求失败了哦~")
}
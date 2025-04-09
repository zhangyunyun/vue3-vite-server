const getHomeSearchData = require("../../data/home_search") //引入后台定义的数据
module.exports = (req, res) => {
    const { labelLike } = req.query //获取前台传递过来的参数属性属性名(和前端传递的属性名保持一致)
    const searchAllData = getHomeSearchData() //获取后台定义的mock数据
    const listData = searchAllData.list.filter((v) => v.label.includes(labelLike)) //从后台数据过滤获取到包含有label参数(前端传递的参数)的数据
    console.log(list)
        //加个延迟(加载的效果)
    setTimeout(() => {
        return res.success({
            listData
        })
    }, 600);
}
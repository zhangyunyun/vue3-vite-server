const path = require('path')
const jsonServer = require('json-server')
const router = require("./router")
const db = require("./db")() //调用文件里面暴露的函数,执行这个函数来获取返回的数据

//创建server实例
const server = jsonServer.create()

//定义默认的中间件
const middlewares = jsonServer.defaults({
    static: path.join(__dirname, '../public')
})
//使用中间件
server.use(middlewares)

//处理默认req.body(请求体解析中间件,将请求体数据解析成json,使用req.body访问请求数据的内容)
server.use(jsonServer.bodyParser)

//响应处理
server.use((req, res, next) => {
    const json = res.json.bind(res)
    res.success = (data) => {
        return json({
            code: 0,
            msg: '请求成功',
            data
        })
    }
    res.fail = (msg, code = -1, data) => {
        return json({
            code,
            msg,
            data
        })
    }
    next()
})

//处理自定义路由
router(server)
//设置json-server的路由
const jsonRouter = jsonServer.router(db)

//使用中间件添加请求数据延时
server.use((req,res,next) => {
    setTimeout(next, 1000);
})

server.use('/api', jsonRouter)

//监听端口
server.listen(8000, () => {
    console.log('JSON Server is running at 8000')
})
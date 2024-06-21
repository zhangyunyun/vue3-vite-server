module.exports = () => {
    return {
        /* 
           查询的结果列表 
           1为搜索 2为店铺      
        */
        list: [{
                type: 1,
                label: '比萨',
                resultCount: 453
            },
            {
                type: 1,
                label: '达乐美比萨',
                resultCount: 1
            }, {
                type: 1,
                label: '尊宝比萨',
                resultCount: 5
            },
            {
                type: 1,
                label: '马上诺比萨',
                resultCount: 10
            },
            {
                type: 2,
                label: '榴莲比萨',
                resultCount: 35
            }
        ]
    }
}
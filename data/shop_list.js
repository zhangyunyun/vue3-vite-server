/* 
    多个商铺列表
*/
const getItemData = () => ({
  id: 1,
  postUrl: '/imgs/index_page/shop-list/post1.png',
  shopName: '切果NOW！切果NOW！',
  branch: 'XXX店',
  score: 4.7,
  monthlyCount: 7020,
  deliveryTime: '30分钟',
  deliveryDistance: '849m',
  deliveryStratingPrice: '￥20.0',
  deliveryStrategy: '满0.01配送￥0', // 免配送费
  deliveryTags: ['蓝骑士专送'],
  comments: ['“红柚红心火龙果凤梨约600g三拼”'],
  tops: ['XX区水果热销第2名'],
  activitys: [{
      // 满减
      type: 2,
      infos: ['49减3', '59减6', '79减8', '99减18'],
    },
    {
      // 特价
      type: 3,
      tips: '特价4选1',
    },
  ],
  services: [{
      tpye: 1,
      label: '坏品包退',
    },
    {
      tpye: 2,
      label: '极速退款',
    },
    {
      tpye: 3,
      label: '果蔬商超红包',
    },
    {
      tpye: 4,
      label: '支持预订',
    },
    {
      tpye: 5,
      label: '开发票',
    },
  ],
}, {
  id: 2,
  postUrl: '/imgs/index_page/shop-list/post2.png',
  shopName: '切果NOW！切果NOW！',
  branch: 'XXX店',
  score: 4.7,
  monthlyCount: 7020,
  deliveryTime: '40分钟',
  deliveryDistance: '949m',
  deliveryStratingPrice: '￥15.0',
  deliveryStrategy: '满0.01配送￥0', // 免配送费
  deliveryTags: ['蓝骑士专送'],
  comments: ['“红柚红心火龙果凤梨约500g三拼”'],
  tops: ['XX区水果热销第3名'],
  activitys: [{
      // 满减
      type: 2,
      infos: ['40减3', '60减6', '80减8', '100减18'],
    },
    {
      // 特价
      type: 3,
      tips: '特价4选1',
    },
  ],
  services: [{
      tpye: 1,
      label: '坏品包退',
    },
    {
      tpye: 2,
      label: '极速退款',
    },
    {
      tpye: 3,
      label: '果蔬商超红包',
    },
    {
      tpye: 4,
      label: '支持预订',
    },
    {
      tpye: 5,
      label: '开发票',
    },
  ],
})

module.exports = () => {
  //默认先给50条数据
  const TOTAL = 50
  const result = []
  for (let i = 0; i < TOTAL; i++) {
    const item = getItemData()
    item.id = i

    result.push(item)
  }
  return result
}
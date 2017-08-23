/**
 * Created by 胡茜 on 2017/8/23.
 */
var boardData =['images/b1.jpg', 'images/b2.jpg', 'images/b3.jpg','images/b4.jpg','images/b5.jpg','images/b6.jpg','images/b7.jpg', 'images/b1.jpg'];

var slideData = [
    [
        {
            'src': 'images/s1-1.jpg',
            'name': 'HUAWEI P10',
            'price': '￥3988'
        },
        {
            'src': 'images/s1-2.jpg',
            'name': '荣耀8青春版',
            'price': '￥3988'
        },
        {
            'src': 'images/s1-3.jpg',
            'name': 'HUAWEI MATE9',
            'price': '￥3988'
        },
        {
            'src': 'images/s1-4.jpg',
            'name': '荣耀V9',
            'price': '￥3988'
        }
    ],
    [
        {
            'src': 'images/s1-1.jpg',
            'name': 'HUAWEI P10',
            'price': '￥3988'
        },
        {
            'src': 'images/s1-2.jpg',
            'name': '荣耀8青春版',
            'price': '￥3988'
        },
        {
            'src': 'images/s1-3.jpg',
            'name': 'HUAWEI MATE9',
            'price': '￥3988'
        },
        {
            'src': 'images/s1-4.jpg',
            'name': '荣耀V9',
            'price': '￥3988'
        }
    ],
    [
        {
            'src': 'images/s1-1.jpg',
            'name': 'HUAWEI P10',
            'price': '￥3988'
        },
        {
            'src': 'images/s1-2.jpg',
            'name': '荣耀8青春版',
            'price': '￥3988'
        },
        {
            'src': 'images/s1-3.jpg',
            'name': 'HUAWEI MATE9',
            'price': '￥3988'
        },
        {
            'src': 'images/s1-4.jpg',
            'name': '荣耀V9',
            'price': '￥3988'
        }
    ],
    [
        {
            'src': 'images/s1-1.jpg',
            'name': 'HUAWEI P10',
            'price': '￥3988'
        },
        {
            'src': 'images/s1-2.jpg',
            'name': '荣耀8青春版',
            'price': '￥3988'
        },
        {
            'src': 'images/s1-3.jpg',
            'name': 'HUAWEI MATE9',
            'price': '￥3988'
        },
        {
            'src': 'images/s1-4.jpg',
            'name': '荣耀V9',
            'price': '￥3988'
        }
    ],
    [
        {
            'src': 'images/s1-1.jpg',
            'name': 'HUAWEI P10',
            'price': '￥3988'
        },
        {
            'src': 'images/s1-2.jpg',
            'name': '荣耀8青春版',
            'price': '￥3988'
        },
        {
            'src': 'images/s1-3.jpg',
            'name': 'HUAWEI MATE9',
            'price': '￥3988'
        },
        {
            'src': 'images/s1-4.jpg',
            'name': '荣耀V9',
            'price': '￥3988'
        }
    ],
    [
        {
            'src': 'images/s1-1.jpg',
            'name': 'HUAWEI P10',
            'price': '￥3988'
        },
        {
            'src': 'images/s1-2.jpg',
            'name': '荣耀8青春版',
            'price': '￥3988'
        },
        {
            'src': 'images/s1-3.jpg',
            'name': 'HUAWEI MATE9',
            'price': '￥3988'
        },
        {
            'src': 'images/s1-4.jpg',
            'name': '荣耀V9',
            'price': '￥3988'
        }
    ]
];

var mListData = ['images/m2-1.jpg', 'images/m2-2.png', 'images/m2-3.png', 'images/m2-4.png'];

var hsData = [
    {
        'src': 'images/hotsell.jpg'
    },
    {
        'src': 'images/hs-1.jpg',
        'name': '荣耀V9',
        'info': '下单最高减200',
        'price': '￥3988'
    },
    {
        'src': 'images/hs-2.jpg',
        'name': '华为畅享7 PLUS',
        'info': '领券减100',
        'price': '￥3988'
    },
    {
        'src': 'images/hs-3.jpg',
        'name': '荣耀V9',
        'info': '下单最高减200',
        'price': '￥3988'
    },
    {
        'src': 'images/hs-4.jpg',
        'name': '荣耀畅玩6A',
        'info': '高配版领券立减50',
        'price': '￥3988'
    },
    {
        'src': 'images/hs-1.jpg',
        'name': '荣耀V9',
        'info': '下单最高减200',
        'price': '￥3988'
    },
    {
        'src': 'images/hs-2.jpg',
        'name': '华为畅享7 PLUS',
        'info': '领券减100',
        'price': '￥3988'
    },
    {
        'src': 'images/hs-3.jpg',
        'name': '荣耀V9',
        'info': '下单最高减200',
        'price': '￥3988'
    },
    {
        'src': 'images/hs-4.jpg',
        'name': '荣耀畅玩6A',
        'info': '高配版领券立减50',
        'price': '￥3988'
    }
];

var goodsData = [
    {
        'src': 'images/g-1.jpg',
        'name': '华为随行WiFi 2',
        'info': '4G全网通 3000mAh大电池',
        'price': '￥3988'
    },
    {
        'src': 'images/g-2.jpg',
        'name': '荣耀 NOTE 8',
        'info': '下单立减200',
        'price': '￥3988'
    },
    {
        'src': 'images/g-3.jpg',
        'name': '华为运动手环',
        'info': '独立GPS 50米防水游泳',
        'price': '￥3988'
    },
    {
        'src': 'images/g-4.jpg',
        'name': '荣耀畅玩平板2.7英寸',
        'info': '【高性价比】赠价值38元礼包',
        'price': '￥3988'
    },
    {
        'src': 'images/g-5.jpg',
        'name': 'HUAWEI WATCH 2',
        'info': '华为第二代运动手表',
        'price': '￥3988'
    },
    {
        'src': 'images/g-3.jpg',
        'name': '荣耀畅玩手环 2A',
        'info': '8.14-8.23整点购抢好礼',
        'price': '￥3988'
    },
    {
        'src': 'images/g-1.jpg',
        'name': '荣耀 NOTE 8',
        'info': '下单立减200',
        'price': '￥3988'
    },
    {
        'src': 'images/g-2.jpg',
        'name': '华为运动手环',
        'info': '独立GPS 50米防水游泳',
        'price': '￥3988'
    },
    {
        'src': 'images/g-3.jpg',
        'name': '荣耀畅玩平板2.7英寸',
        'info': '【高性价比】赠价值38元礼包',
        'price': '￥3988'
    },
    {
        'src': 'images/g-4.jpg',
        'name': 'HUAWEI WATCH 2',
        'info': '华为第二代运动手表',
        'price': '￥3988'
    },
    {
        'src': 'images/g-5.jpg',
        'name': '荣耀畅玩手环 2A',
        'info': '8.14-8.23整点购抢好礼',
        'price': '￥3988'
    },
    {
        'src': 'images/g-6.jpg',
        'name': '华为运动手环',
        'info': '独立GPS 50米防水游泳',
        'price': '￥3988'
    },
    {
        'src': 'images/g-4.jpg',
        'name': 'HUAWEI WATCH 2',
        'info': '华为第二代运动手表',
        'price': '￥3988'
    }
];

var floorData = ['images/ad-1.jpg', 'images/ad-2.jpg', 'images/ad-3.jpg', 'images/ad-4.jpg', 'images/ad-5.jpg'];

var phoneData = [
    {
        'src': 'images/sj-1.jpg'
    },
    {
        'src': 'images/sj-2.jpg',
        'name': 'HUAWEI MATE 9 Pro',
        'info': '最高直降400',
        'price': '￥3988'
    },
    {
        'src': 'images/sj-3.jpg',
        'name': '荣耀magic',
        'info': '限时优惠200',
        'price': '￥3988'
    },
    {
        'src': 'images/sj-4.jpg',
        'name': 'HUAWEI nova 2 Plus',
        'info': '会员领券享优惠',
        'price': '￥3988'
    },
    {
        'src': 'images/sj-2.jpg',
        'name': 'HUAWEI MATE 9 Pro',
        'info': '最高直降400',
        'price': '￥3988'
    },
    {
        'src': 'images/sj-3.jpg',
        'name': '荣耀magic',
        'info': '限时优惠200',
        'price': '￥3988'
    },
    {
        'src': 'images/sj-4.jpg',
        'name': 'HUAWEI nova 2 Plus',
        'info': '会员领券享优惠',
        'price': '￥3988'
    },
    {
        'src': 'images/sj-2.jpg',
        'name': 'HUAWEI MATE 9 Pro',
        'info': '最高直降400',
        'price': '￥3988'
    }
];

var padData = [
    {
        'src': 'images/pad-1.jpg'
    },
    {
        'src': 'images/pad-2.jpg',
        'name': 'HUAWEI MATE 9 Pro',
        'info': '最高直降400',
        'price': '￥3988'
    },
    {
        'src': 'images/pad-3.jpg',
        'name': '荣耀magic',
        'info': '限时优惠200',
        'price': '￥3988'
    },
    {
        'src': 'images/pad-4.jpg',
        'name': 'HUAWEI nova 2 Plus',
        'info': '会员领券享优惠',
        'price': '￥3988'
    },
    {
        'src': 'images/pad-2.jpg',
        'name': 'HUAWEI MATE 9 Pro',
        'info': '最高直降400',
        'price': '￥3988'
    },
    {
        'src': 'images/pad-3.jpg',
        'name': '荣耀magic',
        'info': '限时优惠200',
        'price': '￥3988'
    },
    {
        'src': 'images/pad-4.jpg',
        'name': 'HUAWEI nova 2 Plus',
        'info': '会员领券享优惠',
        'price': '￥3988'
    },
    {
        'src': 'images/pad-2.jpg',
        'name': 'HUAWEI MATE 9 Pro',
        'info': '最高直降400',
        'price': '￥3988'
    }
];


















var config = {
    lang: "zh-cn",       //汉化页面
    time: {              //时间格式设为24小时制
        timeFormat: 24
    },
    weather: {          //在天气显示这部分，选用的是和风天气API，所以需要去官网申请一个“钥匙”，并且得到城市对应的城市ID
        params: {
            cityid: "CN101090201",
            key: "7edb35ea9c073da2200256484d25ea52"
        }
    },
    tem_hum: {         //这一部分是原作者关于温湿度的相关配置
        mqttServer:"localhost",
		mqttServerPort:9001,
		mqttclientName:"magic_mirror_tem_hum",
		temperatureTopic:"/DHT"
    },
    compliments: {     //问候语的相关配置，可以直接在函数里更改显示的问候语内容
        interval: 30000,
        fadeInterval: 4000,
        morning: [
            '爷，今天又离称霸一方进了一步',
            '尽情享受新的一天吧！',
           // 'How was your sleep?'
        ],
        afternoon: [
            '谁是风一般的男子',
            '当然是您了，主人',
           // 'Looking good today!'
        ],
        evening: [
            'Wow, 天已黑',
            '该下班了，老板',
          // 'Hi, sexy!'
        ]
    },
    calendar: {
        maximumEntries: 10,
        url: ""
    },
    news: {         //新闻订阅的相关设置，在网上找到RSS新闻源，复制到下列语句里就行了
        feed: 'http://www.zhihu.com/rss'
    }
}

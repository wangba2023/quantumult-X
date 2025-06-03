#!name = 百度网盘
#!desc = 过滤百度网盘广告，解锁部分SVIP功能。
#!openUrl = https://apps.apple.com/app/id547166701
#!author = RuCu6[https://github.com/RuCu6], chxm1023[https://github.com/chxm1023], WeiGiegie[https://github.com/WeiGiegie], ddgksf2013[https://github.com/ddgksf2013], 可莉🅥[https://github.com/luestr/ProxyResource/blob/main/README.md]
#!tag = 去广告, 解锁会员
#!system = 
#!system_version = 
#!loon_version = 3.3.0(853)
#!homepage = https://github.com/sooyaaabo/Loon/blob/main/README.md
#!icon = https://raw.githubusercontent.com/sooyaaabo/Loon/main/Icon/App-Icon/BaiduNetDisk.png
#!date = 2025-05-13 22:00

# 2025-01-09
# https://github.com/chxm1023/Rewrite/blob/main/bdcloud.js
# 2024-11-16
# https://raw.githubusercontent.com/WeiGiegie/666/main/panda.js
# 2024-11-29
# https://gist.githubusercontent.com/ddgksf2013/f43026707830c7818ee3ba624e383c8d/raw/baiduCloud.adblock.js
# 2025-05-13 15:17:08
# https://kelee.one/Tool/Loon/Plugin/BaiduNetDisk_remove_ads.plugin

[Rewrite]
# RuCu6
^https?:\/\/pan\.baidu\.com\/(?:act\/|aipic\/|aisearch\/|api\/getsyscfg\?) reject-dict

# 可莉🅥
# 应用配置
^https:\/\/pan\.baidu\.com\/api\/getconfig reject-dict
^https:\/\/pan\.baidu\.com\/api\/getsyscfg reject-dict
# 签到任务配置
^https:\/\/pan\.baidu\.com\/api\/taskscore\/tasklist reject-dict
# 弹窗配置
^https:\/\/pan\.baidu\.com\/act\/api\/activityentry reject-dict
# 信息流广告
^https:\/\/pan\.baidu\.com\/act\/api\/activityentry reject-dict
# 我的 - 游戏中心
^https:\/\/pan\.baidu\.com\/rest\/2\.0\/membership\/user\?method=gamecenter reject-dict
# 我的页面 - 其他推广
^https:\/\/pan\.baidu\.com\/act\/v2\/welfare\/list reject-dict
# 广告配置
^https:\/\/pan\.baidu\.com\/rest\/\d\.\d\/pcs\/adv reject-dict

# ddgksf2013
# 启动弹窗
^https?:\/\/.*baidu\.com\/rest\/.*\/membership\/proxy\/guide reject-200
# 设置信息流
^https?:\/\/pan\.baidu\.com\/act\/v\d\/(bchannel|welfare)\/list reject-200
# 通用广告
^https?:\/\/pan\.baidu\.com\/rest\/.*\/pcs\/ad reject-200
# 活动推广
^https?:\/\/pan\.baidu\.com\/act\/api\/activityentry reject-200
# 热搜list
^https:\/\/pan\.baidu\.com\/feed\/hotlist reject-200
# 活动推广
^https?:\/\/.*zhangyuyidong\.cn\/api\/zysdk reject-200
# 搜索填词
^https:\/\/pan\.baidu\.com\/queryintent\/queryhint reject-200
# 金币乐园
^https:\/\/pan\.baidu\.com\/coins\/center\/notice reject-200

[Script]
# chxm1023
http-response ^https?:\/\/pan\.baidu\.com\/(youai\/(user\/.+\/getminfo|membership\/.+\/adswitch)|(rest\/.+\/membership\/user|act\/.+\/(bchannel|welfare)\/list|api\/usercfg)) script-path = https://raw.githubusercontent.com/chxm1023/Rewrite/main/bdcloud.js, requires-body = true, tag = [百度网盘]会员权益@chxm1023

# WeiGiegie
http-response ^https?:\/\/pan\.baidu\.com\.+(rest\/.+\/membership\/user|api\/user\/getinfo|act\/v2\/welfare\/list|api\/taskscore\/tasklist)\? script-path = https://raw.githubusercontent.com/WeiGiegie/666/main/panda.js, requires-body = true, tag = [百度网盘]会员权益@WeiGiegie

# RuCu6
http-response ^https:\/\/pan\.baidu\.com\/api\/getsyscfg\? script-path = https://raw.githubusercontent.com/sooyaaabo/Loon/main/Script/Baidu/BaiduNetDisk.js, requires-body = true, tag = [百度网盘]移除广告@RuCu6
http-response ^https:\/\/pan\.baidu\.com\/rest\/2\.0\/membership\/user script-path = https://raw.githubusercontent.com/sooyaaabo/Loon/main/Script/Baidu/BaiduNetDisk.js, requires-body = true, tag = [百度网盘]移除广告@RuCu6

# ddgksf2013
# 开屏广告
http-response ^https?:\/\/pan\.baidu\.com\/api\/getsyscfg script-path = https://gist.githubusercontent.com/ddgksf2013/f43026707830c7818ee3ba624e383c8d/raw/baiduCloud.adblock.js, requires-body = true, tag = [百度网盘]移除广告@ddgksf2013
# 广告推广
http-response ^https?:\/\/afd\.baidu\.com\/afd\/entry script-path = https://gist.githubusercontent.com/ddgksf2013/f43026707830c7818ee3ba624e383c8d/raw/baiduCloud.adblock.js, requires-body = true, tag = [百度网盘]移除广告@ddgksf2013
# 游戏广告
http-response ^https:\/\/pan\.baidu\.com\/rest\/.*\/membership\/user\?method=gamecenter script-path = https://gist.githubusercontent.com/ddgksf2013/f43026707830c7818ee3ba624e383c8d/raw/baiduCloud.adblock.js, requires-body = true, tag = [百度网盘]移除广告@ddgksf2013
# 首页信息流
http-response ^https:\/\/pan\.baidu\.com\/feed\/cardinfos script-path = https://gist.githubusercontent.com/ddgksf2013/f43026707830c7818ee3ba624e383c8d/raw/baiduCloud.adblock.js, requires-body = true, tag = [百度网盘]移除广告@ddgksf2013
# 视频倍速
http-request ^https:\/\/pan\.baidu\.com\/api\/streaming\?app_id=\d+&type=M3U8_HQ_1080 script-path = https://gist.githubusercontent.com/ddgksf2013/f43026707830c7818ee3ba624e383c8d/raw/baiduCloud.adblock.js, tag = [百度网盘]视频倍速@ddgksf2013
http-response ^https:\/\/pan\.baidu\.com\/rest\/.*\/membership\/user script-path = https://gist.githubusercontent.com/ddgksf2013/f43026707830c7818ee3ba624e383c8d/raw/baiduCloud.adblock.js, requires-body = true, tag = [百度网盘]视频倍速@ddgksf2013

[Mitm]
hostname = pan.baidu.com, afd.baidu.com

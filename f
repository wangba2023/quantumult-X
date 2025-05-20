// 节点信息查询（IP，服务商，国家，时区，经纬度，货币）
if ($response.statusCode != 200) {
  $done(null);
}

// ======== 常量定义 ========
var city0 = "高谭市";
var isp0 = "Cross-GFW.org";

// ======== 工具函数 ========
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function City_ValidCheck(para) {
  return para || city0;
  // 原注释掉的emoji逻辑: emojis[getRandomInt(emojis.length)]
}

function ISP_ValidCheck(para) {
  return para || isp0;
  // 原注释掉的emoji逻辑: emojis[getRandomInt(emojis.length)]
}

function Area_check(para) {
  return para == "中华民国" ? "台湾" : para;
}

// ======== 数据映射 ========
var flags = new Map([/* 保持原有映射数据不变 */]);

// ======== 主逻辑 ========
var body = $response.body;
var obj = JSON.parse(body);

// 修正点1：subtitle行结尾使用英文右括号
var title =  + Area_check(obj.country) + "❣️" + obj.timezone;
var subtitle = obj.query + "❣️" + obj.currency + "❣️" + obj.as;  // 修正中文全角括号为正常结束

// 修正点2：优化字符串拼接
var ip = obj.query + flags.get(obj.countryCode);

// 修正点3：使用模板字符串提升可读性
var description = `
------------------------------

🖥️服务商: ${obj.isp}

🌍地区: ${City_ValidCheck(obj.regionName)}

🗺️IP地址: ${obj.query}${flags.get(obj.countryCode)}

🕗时区: ${obj.timezone}

📍经纬度: ${obj.lon},${obj.lat}

🪙货币: ${obj.currency}${flags.get(obj.currency) || ""}`;

$done({ title, subtitle, ip, description });
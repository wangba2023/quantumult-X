(() => {
  const parse = JSON.parse($response.body);
  const pr = parse.playerResponse || {};
  
  // 移除广告相关字段
  ['adPlacements', 'playerAds', 'adSlots'].forEach(k => delete pr[k]);
  
  // 解锁区域限制
  if (pr.playabilityStatus?.status === 'LOGIN_REQUIRED') {
    pr.playabilityStatus.status = 'OK';
    pr.playabilityStatus.messages = [];
  }
  
  $done({ body: JSON.stringify(parse) });
})();
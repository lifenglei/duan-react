export const CC_MOBILE_CONFIG = {
  agentId: "1", //  是	''	应用ID
  corpId: "2", //  是	''	企业ID
  timeStamp: "3", //  是	''	生成签名的时间戳
  nonceStr: "4", //  是	''	生成签名的随机串
  signature: "5", //  是	''	签名
  jsApiList: [
    "biz.navigation.setTitle",
    "biz.navigation.setRight",
    "biz.user.getInfo",
    "ccwork.user.getInfo",
    "biz.util.openLink",
    "biz.util.imagePreview",
    "device.notification.alert",
    "device.notification.showPreloader",
    "device.notification.hidePreloader",
    "device.notification.toast",
    "ccwork.device.getConfig",
    "ccwork.utility.goUrl", // 跳转url,不保存页面
  ], //  是	[ ]	需要使用的jsapi列表
};

export const CC_PC_CONFIG = {
  agentId: "1", // 是	''	应用ID
  corpId: "2", // 是	''	企业ID
  timeStamp: "3", // 是	''	生成签名的时间戳
  nonceStr: "4", // 是	''	生成签名的随机串
  signature: "5", // 是	''	签名
  jsApiList: [
    "biz.navigation.setTitle",
    "biz.navigation.close",
    "biz.contact.complexPicker",
    "biz.contact.choose",
    "biz.user.getInfo",
    "biz.util.openLink",
    "ccwork.user.getInfo",
    "biz.util.imagePreview",
    "device.notification.showPreloader",
    "device.notification.toast",
    "device.notification.hidePreloader",
    "device.notification.confirm",
    "device.notification.alert",
    "ccwork.device.getConfig",
    "ccwork.utility.goUrl", // 跳转url,不保存页面
  ], // 是[ ]需要使用的jsapi列表
};

;(function (doc, win) {
  let docEl = doc.documentElement, // 获取html对象
    resizeEvt = "orientationchange" in window ? "orientationchange" : "resize", // 横屏是否支持，不支持则为浏览器大小改变
    // 计算页面字体大小
    recalc = function () {
      // 获取页面宽度
      let clientWidth = docEl.clientWidth
      // 获取不到页面宽度，直接返回
      if (!clientWidth) {
        return
      }
      let size = clientWidth / 7.5
      // 设置html字体大小(浏览器默认字体大小为16px)
      docEl.style.fontSize = (size > 200 ? 200 : size) + "px"
    }
  // 不支持addEventListener,返回
  if (!doc.addEventListener) {
    return
  }
  // 监听事件，获取当前html标签的字体大小
  win.addEventListener(resizeEvt, recalc, false)
  // dom内容加在完成事件
  doc.addEventListener("DOMContentLoaded", recalc, false)
})(document, window)

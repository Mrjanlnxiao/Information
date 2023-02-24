// 星期
export const WEEK = ['周日', '周一', '周二', '周三', '周四', '周五', '周六']

export const formatTime = (
time,
fmt
) => {
if (!time) return ''
const date = new Date(time)
const o = {
'M+': date.getMonth() + 1,//月
'd+': date.getDate(),//日
'H+': date.getHours(),//小时
'm+': date.getMinutes(),//分钟
's+': date.getSeconds(),//秒
'q+': Math.floor((date.getMonth() + 3) / 3),
S: date.getMilliseconds(),//获取当前毫秒数(0-999)
}
if (/(y+)/.test(fmt))
fmt = fmt.replace(
RegExp.$1,
(date.getFullYear() + '').substr(4 - RegExp.$1.length)
)
for (const k in o) {
if (new RegExp('(' + k + ')').test(fmt)) {
fmt = fmt.replace(
RegExp.$1,
// @ts-ignore: Unreachable code error
RegExp.$1.length === 1 ? o[k] : ('00' + o[k]).substr(('' + o[k]).length)
)
}}return fmt
}
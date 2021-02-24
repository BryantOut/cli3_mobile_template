// 隐藏手机号中间4位
export function formatPhone(phone = '') {
    return phone.replace(/(\d{3})\d*(\d{4})/g, '$1***$2')
}
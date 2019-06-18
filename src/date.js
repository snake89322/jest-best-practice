import dayjs from 'dayjs'

export function date (dateString) {
  return dayjs(dateString).format('{YYYY} MM-DDTHH:mm:ss SSS [Z] A')
}

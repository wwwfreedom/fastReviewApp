import dayjs from 'dayjs'
import localizedFormat from 'dayjs/plugin/localizedFormat'
dayjs.extend(localizedFormat)

export default function formatDate(dateObj, formatString = 'lll') {
  if (!dateObj) {
    throw new Error('missing dateobj arg')
  }

  return dayjs(dateObj).format(formatString)
}

function formatDate (dateToFormat: Date): string {
  const months = {
    1: 'Jan',
    2: 'Feb',
    3: 'Mar',
    4: 'Apr',
    5: 'May',
    6: 'Jun',
    7: 'Jul',
    8: 'Aug',
    9: 'Sep',
    10: 'Oct',
    11: 'Noc',
    12: 'Dec'
  }
  const date = new Date(dateToFormat)
  const day = date.getDate()
  const month = date.getMonth() + 1
  const year = date.getFullYear()

  return `${day} ${months[month]}, ${year}`
}

export {
  formatDate
}

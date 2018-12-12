import moment from 'moment'

export function genTagsMap(pages) {
  return genMap(pages, 'tags')
}

export function genCategoriesMap(pages) {
  return genMap(pages, 'categories')
}

export function genPostList(list, key) {
  return list.filter(item => item.path.indexOf(`/${key}/`) > -1).map(genTimeInfo).sort(timeDesc)
}

function genMap(list, key) {
  const map = {}

  list.forEach(item => {
    const value = item.frontmatter[key]
    if (value === undefined || value === null) return

    if (value.indexOf(',') > -1) {
      const arr = value.split(',')
      arr.forEach(v => {
        if (!map[v]) {
          map[v] = []
        }
        map[v].push(item)
      })
      return
    }


    if (!map[value]) {
      map[value] = []
    }
    map[value].push(item)
  })

  return map
}

function genTimeInfo(page) {
  const date = moment(page.frontmatter.date.replace(/[zZ]/g, ''))
  return {
    ...page,
    // time: date.format('YYYY年MM月DD日 HH:mm:ss'),
    time: date.format('YYYY年MM月DD日'),
    year: date.get('year'),
    month: date.get('month') + 1,
    day: date.get('date')
  }
}

function timeDesc(a, b) {
  return _genTimestamp(b) - _genTimestamp(a)
}

function _genTimestamp(data) {
  return new Date(data.frontmatter.date).getTime()
}
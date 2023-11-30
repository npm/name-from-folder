const { basename, dirname } = require('path')

const getName = (parent, base) =>
  parent.charAt(0) === '@' ? `${parent}/${base}` : base

module.exports = (dir) => {
  if (!dir) {
    return false
  }

  if (dir.length < 4 && (dir === '/' || dir.slice(1, 3) === ':\\')) {
    return dir
  }

  return getName(basename(dirname(dir)), basename(dir))
}

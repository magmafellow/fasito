
export function isElemInParent(elem: any, parent: any, deep: number = 0) {
  if (elem === null) {
    return false
  }
  if (elem === undefined || deep === 42) {
    return false
  }
  if (elem === parent) {
    return true
  } else {
    return isElemInParent(elem.parentNode, parent, deep+1)
  }
} 

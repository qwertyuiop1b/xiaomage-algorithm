// https://www.encora.com/insights/the-boyer-moore-horspool-algorithm
const allString = "hello world dfasdf= dfasdfosdfa sdfasdfjouferf"
const subString = "Pdfasdfa"

function searchString(substr, str) {
  if (subString.length > str.length) {return -1}
  const table = substr.split("").reduce((prev, cur, curIdx) => {
    if (curIdx === substr.length - 1) {
      prev[cur] = substr.length
      prev["*"] = substr.length
    } else {
      prev[cur] = substr.length - curIdx - 1
    }
    return prev
  }, {})

  let cur = substr.length
  let subCur = substr.length
  while (subCur > 0 && cur > 0 && cur <= str.length) {
    if (substr[subCur - 1] !== str[cur - 1]) {
      const offset = table[str[cur-1]] === undefined ? table["*"] : table[str[cur-1]] 
      cur += offset
      subCur = substr.length
    } else {
      cur--
      subCur--
    }
  }
  return cur >= str.length ? -1 : cur
}

console.log(searchString(subString, allString))
console.log(allString.indexOf(subString))
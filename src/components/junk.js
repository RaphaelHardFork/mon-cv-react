/*
let languages = 'Anglais,Français,Spanish'
let level = 'Moyen, parlé couramment, mauvais'

languages = languages.split(',')
console.log(languages)
let langID = []
for (let elem of languages) {
  langID.push('langue')
}
console.log(langID)

level = level.split(', ')
console.log(level)

const langObj = (first, second) => {
  return first.reduce((acc, val, ind) => {
    acc[val] = second[ind]
    return acc
  }, {})
}

console.log(langObj(langID, languages))
*/

let langue = 'Anglais, Français, Spanish, Allemand'.split(', ')
let levels = 'Moyen, parlé couramment, mauvais, horrible'.split(', ')

const listToObjArray = (langue, level) => {
  langue = langue.split(', ')
  level = level.split(', ')

  let keysTab = ['langue', 'level']
  let valuesTab = []
  let langObj = []

  const langObjBuilt = (first, second) => {
    return first.reduce((acc, val, ind) => {
      acc[val] = second[ind]
      return acc
    }, {})
  }

  for (i = 0; i < langue.length; i++) {
    valuesTab = [langue[i], levels[i]]
    langObj.push(langObjBuilt(keysTab, valuesTab))

  }
  return langObj
}

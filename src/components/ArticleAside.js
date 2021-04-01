// Fonction pour convertir les strings Langues et Niveaux en tableau d'objet
const listToObjArray = (key1, key2, value1, value2) => {
  if (!value1) {
    return
  }
  if (!value2) {
    return
  }
  value1 = value1.split(', ')
  value2 = value2.split(', ')

  let keysTab = [key1, key2]
  let valuesTab = []
  let langObj = []

  const langObjBuilt = (first, second) => {
    return first.reduce((acc, val, ind) => {
      acc[val] = second[ind]
      return acc
    }, {})
  }

  for (let i = 0; i < value1.length; i++) {
    valuesTab = [value1[i], value2[i]]
    langObj.push(langObjBuilt(keysTab, valuesTab))

  }
  return langObj
}

const ArticleAside = (props) => {
  const { children, skills, details, tags, languages, levels } = props

  const langTable = listToObjArray('langue', 'level', languages, levels)
  const skillsTable = listToObjArray('skill', 'detail', skills, details)



  return <article className="my-4">
    <h3 className="fs-1 p-3 bg-secondary">{children}</h3>
    <div className="px-3 pt-3">
      {!!languages && langTable.map((elem) => {
        return <p className="fs-5"><b>{elem.langue} : </b>{elem.level}</p>
      })}
      {!!skills && skillsTable.map((elem) => {
        return <><p className="fs-4">{elem.skill}</p>
          <p className="fs-5"><i>{elem.detail}</i></p>
          <hr></hr>
        </>
      })}
      {!!tags && <div className="d-flex flex-wrap blockTags">{tags.split(', ').map((elem) => {
        return <span className="fs-5 badge p-2 m-1 tags">{elem}</span>
      })}</div>}
    </div>

  </article>
}

export default ArticleAside
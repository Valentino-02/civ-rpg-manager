export const findCurrentCivId = (civList) => {
    if (civList.length === 0) return ''
    let currentCiv = civList.find((element) => element.isCurrent === true)
    return currentCiv.civId
}

export const getNewNestedObject = (obj, path, newValue) => {
    let deepClone = JSON.parse(JSON.stringify(obj))
    let shallowClone = {...deepClone}
    path.forEach((element) => {
        shallowClone = shallowClone[element]
    });
    shallowClone.push(newValue)
    return deepClone
}

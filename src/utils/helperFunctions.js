export const findCurrentCivId = (civList) => {
    if (civList.length === 0) return ''
    let currentCiv = civList.find((element) => element.isCurrent === true)
    return currentCiv.civId
}

export const getUpdatedObject = (obj, path, newValue) => {
    let pathArray = path.split('.')
    let deepClone = JSON.parse(JSON.stringify(obj))
    if (pathArray.length === 1) {
        deepClone[path] = newValue
        return deepClone
    }
    let shallowClone = {...deepClone}
    pathArray.forEach((element, index) => {
        if (index === (pathArray.length -1)) {
            shallowClone[element] = newValue
            return
        }
        shallowClone = shallowClone[element]
    });
    return deepClone
}

export const getObjectProperty = (obj, path) => {
    let pathArray = path.split('.')
    let deepClone = JSON.parse(JSON.stringify(obj))
    let shallowClone = {...deepClone}
    pathArray.forEach((element) => {
        shallowClone = shallowClone[element]
    });
    return shallowClone 
}
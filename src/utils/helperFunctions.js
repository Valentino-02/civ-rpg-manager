export const findCurrentCivId = (civList) => {
    if (civList.length === 0) return ''
    let currentCiv = civList.find((element) => element.isCurrent === true)
    return currentCiv.civId
}

export const findCurrentCivId = (civList) => {
    let currentCiv = civList.find((element) => element.isCurrent === true)
    return currentCiv.civId
}
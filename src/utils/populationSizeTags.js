const getPopulationSizeTag = (populationSize) => {
    if (populationSize < 0) return tags[0]
    if (populationSize >= tags.length) return tags[tags.length -1]
    return tags[populationSize]
}

const tags = [
    'Dwelling',
    'Hamlet',
    'Village',
    'Shire',
    'Town',
    'District',
    'County',
    'City',
    'Metropolis'
]

export default getPopulationSizeTag
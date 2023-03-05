const emptyPlayerData = {
    "playerName": "",
    "civName": "",
    // { "dsc": "", "name":"" }
    "beliefs": [],
    "civics": [],
    "technologies": [],
    "labourDistributions": [
        {
            "name": "food",
            "value": 50,
        },
        {
            "name": "influence",
            "value": 10,
        },
        {
            "name": "military",
            "value": 10,
        },
        {
            "name": "religion",
            "value": 10,
        },
        {
            "name": "science",
            "value": 20,
        },
    ],
    "extraLabourDistributions": [],
    // { "name": "", "progress":0 }
    "missions": [],
    "progressBars": {
        "influence": 0,
        "religion": 0,
        "science": 0
    },
    "resources": [],
    "extraFood": 0,
    "treasure": 0,
    "populationSize": "",
    "extraNotes": [],
}

export default emptyPlayerData
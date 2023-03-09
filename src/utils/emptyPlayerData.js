const emptyPlayerData = {
    "playerInfo" : {
        "playerName": "",
        "civName": "",
    },
    "knowledge" : {
        "science" : {
            "advancements": [],
            "progress" : 0
        },
        "religion" : {
            "advancements": [],
            "progress" : 0
        },
        "civics" : {
            "advancements": [],
            "progress" : 0
        },
    },
    "labourDistribution": [
        {
            "name": "food",
            "value": 50,
            "isExtra": false,
        },
        {
            "name": "civics",
            "value": 10,
            "isExtra": false,
        },
        {
            "name": "military",
            "value": 10,
            "isExtra": false,
        },
        {
            "name": "religion",
            "value": 10,
            "isExtra": false,
        },
        {
            "name": "science",
            "value": 20,
            "isExtra": false,
        },
    ],
    "populationGrowth" : {
        "progress": 0,
        "populationSize": 0,
    },
    "missions": [
/*         {
            "name": "",
            "progress": 0,
            "maxProgress": 0,
        } */
    ],
    "resources": [
/*         {
            "name": "",
            "dsc": "",
        } */
    ],
}

export default emptyPlayerData
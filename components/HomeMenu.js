import React from 'react'
import useFetchPlayerData from '../hooks/useFetchPlayerData'
import Advancements from './Advancements'
import ExtraFood from './extraFood'
import Missions from './Missions'
import PopulationDistribution from './PopulationDistribution'
import Resources from './Resources'


const HomeMenu = () => {
    const { playerData } = useFetchPlayerData()

    return (<>
        <div className='my-10 text-xs sm:text-sm flex flex-col justify-center items-center gap-2 sm:gap-4'>
            <h1 className='font-extrabold select-none text-2xl sm:text-4xl'>{'Welcome ' + playerData.playerName}</h1>
            <h1 className='font-extrabold select-none text-1xl sm:text-3xl'>{'Great leader of ' + playerData.civName}</h1>
        </div>

        <div className='mx-5 md:mx-20 mt-10 lg:mx-30 xl:mx-40' >
            <Advancements  />
        </div>

        <div className='mx-5 md:mx-20 lg:mx-30 xl:mx-40 sm:gap-4 mt-20 flex flex-col gap-2' >
            <Missions />
        </div>

        <div className='mx-5 md:mx-20 lg:mx-30 xl:mx-40 sm:gap-4 mt-20 flex flex-col gap-2' >
            <Resources  />
        </div>

        <div className='mx-5 md:mx-20 lg:mx-30 xl:mx-40 sm:gap-4 mt-20 flex flex-col gap-2' >
            <ExtraFood  />
        </div>

        <div className='mx-5 md:mx-20 lg:mx-30 xl:mx-40 sm:gap-4 mt-20 flex flex-col gap-2' >
            <PopulationDistribution  />
        </div>

   





    </>)
    }

export default HomeMenu
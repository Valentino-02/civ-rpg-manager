import React from 'react';
import useFetchPlayerData from '../hooks/useFetchPlayerData';
import DivGeneral from '../tailwindComponents/DivGeneral';
import DivTitle from '../tailwindComponents/DivTitle';
import Advancements from './Advancements';
import ComponentHeader from './ComponentHeader';
import ExtraFood from './ExtraFood';
import ExtraText from './ExtraText';
import Missions from './Missions';
import PopulationDistribution from './PopulationDistribution';
import Resources from './Resources';

function HomeMenu() {
  const { playerData } = useFetchPlayerData();

  return (
    <>
      <DivTitle>
        <h1 className="font-extrabold select-none text-2xl sm:text-4xl">{`Welcome ${playerData.playerName}`}</h1>
        <h1 className="font-extrabold select-none text-1xl sm:text-3xl">{`Great leader of ${playerData.civName}`}</h1>
      </DivTitle>

      <DivGeneral>
        <ComponentHeader name={'Advancements'} component={<Advancements/>}  />
        <Missions />
        <Resources />
        <ExtraFood />
        <ExtraText />
        <PopulationDistribution />
      </DivGeneral>
    </>
  );
}

export default HomeMenu;

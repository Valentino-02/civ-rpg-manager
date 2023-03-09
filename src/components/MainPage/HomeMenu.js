import React from 'react';
import useFetchPlayerData from '../../hooks/useFetchPlayerData';
import Advancements from './Advancements';
import SectionHeader from '../GeneralUse/SectionHeader';
import ExtraFood from './ExtraFood';
import Missions from './Missions';
import PopulationDistribution from './PopulationDistribution';
import Resources from './Resources';
import CenterChildrenDiv from '../StyleGivers/CenterChildrenDiv';

function HomeMenu() {
  const { playerData } = useFetchPlayerData();

  return (
    <>
      <div className="flex flex-col items-center justify-center gap-2 my-10 text-xs sm:text-sm sm:gap-4">
        <h1 className="text-2xl font-extrabold select-none sm:text-4xl">{`Welcome ${playerData.playerName}`}</h1>
        <h1 className="font-extrabold select-none text-1xl sm:text-3xl">{`Great leader of ${playerData.civName}`}</h1>
      </div>

      <CenterChildrenDiv>
        <SectionHeader name={'Advancements'} component={<Advancements />}  />
{/*         <SectionHeader name={'Missions'} component={<Missions/>}  /> */}
        <SectionHeader name={'Reources'} component={<Resources />}  />
        <SectionHeader name={'Extra Food'} component={<ExtraFood />}  />
        <SectionHeader name={'Population Distribution'} component={<PopulationDistribution />}  />
      </CenterChildrenDiv>
    </>
  );
}

export default HomeMenu;

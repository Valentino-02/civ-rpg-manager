import React, { useEffect } from 'react';
import useFetchPlayerData from '../../hooks/useFetchPlayerData';
import Advancements from './Advancements';
import SectionHeader from '../GeneralUse/SectionHeader';
import Missions from './Missions';
import PopulationDistribution from './LabourDistribution';
import Resources from './Resources';
import CenterChildrenDiv from '../StyleGivers/CenterChildrenDiv';
import PopulationGrowth from './PopulationGrowth';
import { usePlayerDataContext } from '../../context/playerDataContext';


function HomeMenu() {
  const {
    civData, addAdvancement, deleteAdvancement, setProgressValue,
  } = usePlayerDataContext();

  useEffect(() => {
    console.log(civData)
  }, [])

  return (
    <>
    <div>{civData.civInfo.rulerName} </div>
{/*       <CenterChildrenDiv>
        <SectionHeader name={'Population Distribution'} component={<PopulationDistribution />}  />
        <SectionHeader name={'Advancements'} component={<Advancements />}  />
        <SectionHeader name={'Missions'} component={<Missions/>}  />
        <SectionHeader name={'Reources'} component={<Resources />}  />
        <SectionHeader name={'population Growth'} component={<PopulationGrowth />}  />
      </CenterChildrenDiv> */}
    </>
  );
}

export default HomeMenu;

import React from 'react';
import Advancements from './Advancements';
import SectionHeader from '../GeneralUse/SectionHeader';
import Missions from './Missions';
import LabourDistribution from './LabourDistribution';
import Resources from './Resources';
import CenterChildrenDiv from '../StyleGivers/CenterChildrenDiv';
import PopulationGrowth from './PopulationGrowth';
import { usePlayerDataContext } from '../../context/playerDataContext';


function HomeMenu() {
  return (
    <>
      <CenterChildrenDiv>
        <SectionHeader name={'Labour Distribution'} component={<LabourDistribution />}  />
        <SectionHeader name={'Advancements'} component={<Advancements />}  />
        <SectionHeader name={'Missions'} component={<Missions/>}  />
        <SectionHeader name={'Available Resources'} component={<Resources />}  />
        <SectionHeader name={'Population Growth'} component={<PopulationGrowth />}  />
      </CenterChildrenDiv>
    </>
  );
}

export default HomeMenu;

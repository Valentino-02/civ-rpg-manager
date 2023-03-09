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
      <CenterChildrenDiv>
        <SectionHeader name={'Population Distribution'} component={<PopulationDistribution />}  />
        <SectionHeader name={'Advancements'} component={<Advancements />}  />
        <SectionHeader name={'Missions'} component={<Missions/>}  />
        <SectionHeader name={'Reources'} component={<Resources />}  />
        <SectionHeader name={'Extra Food'} component={<ExtraFood />}  />
      </CenterChildrenDiv>
    </>
  );
}

export default HomeMenu;

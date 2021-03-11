import { Route, Switch } from "react-router-dom"
import ShoeRepair from "./ShoeRepair/ShoeRepair";
import NavBlock from './NavBlock/NavBlock';
import ProductionOfKeys from "./ProductionOfKeys/ProductionOfKeys";
import ChipMaking from "./ChipMaking/ChipMaking";
import KnifeSharpening from "./KnifeSharpening/KnifeSharpening";
import RepairOfBags from "./RepairOfBags/RepairOfBags";
import FittingsInstallation from "./FittingsInstallation/FittingsInstallation";
import StretchingShoes from "./StretchingShoes/StretchingShoes";
import styled from 'styled-components';

const Worck = ()=>{

  return (
    <S.Wrapper>
      <NavBlock/>
      <Switch>
        <Route exact path='/' component={ShoeRepair}/>
        <Route path='/shoeRepair' render={()=> <ShoeRepair/>}/>
        <Route path='/productionOfKeys' render={()=><ProductionOfKeys/>}/>
        <Route path='/chipMaking' render={()=><ChipMaking/>}/>
        <Route path='/knifeSharpening' render={()=><KnifeSharpening/>}/>
        <Route path='/repairOfBags' render={()=><RepairOfBags/>}/>
        <Route path='/fittingsInstallation' render={()=><FittingsInstallation/>}/>
        <Route path='/stretchingShoes' render={()=><StretchingShoes/>}/>
        <Route component={ShoeRepair}/>
      </Switch>
    </S.Wrapper>
  )
};

export default Worck;


const S = {
  Wrapper: styled.div`
  border: 1px solid black;
  display: flex;
  justify-content: space-between;
  width: 100%;
  @media(max-width: 950px) {
    flex-direction: column;
  }
  `
}
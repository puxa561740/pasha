import styled from 'styled-components';
import ServicePresentation from './Services/ServicePresentation';
import Slider from './Slider/Slider';
import Worck from './Worck/Worck';

const Content = ()=>{
  return (
    <S.Content>
      <div>
        <ServicePresentation/>
        <Slider/>
      </div>
      <Worck/>
    </S.Content>
  )
};

export default Content;


const S = {
  Content: styled.div`
  margin: 15px;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  > div {
    position: relative;
  }
  .carousel-control-next, .carousel-control-prev{
    z-index: 112;
  }
  .d-block {
    @media(max-width: 850px) {
      height: 100%;
    }
  }
  `
}
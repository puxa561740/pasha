import { YMaps, Map, Placemark} from 'react-yandex-maps';
import styled from 'styled-components';

const MapsAdres =()=>{


  return(
    <>
    <YMaps>
      <S.Wrapper  id='mapAdres'>
        <Map defaultState={{ center: [52.457453, 31.002033], zoom: 17 }} style={{width: '100%', height: '400px'}} modules={["templateLayoutFactory", "layout.ImageWithContent"]}>
          <Placemark 
          geometry={[52.457453, 31.002033]} 
          />
          </Map>
      </S.Wrapper>
  </YMaps>
    </>
  )
};

export default MapsAdres;

const S = {
  Wrapper: styled.div`
  
  `
}

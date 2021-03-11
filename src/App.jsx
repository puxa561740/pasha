import styled from 'styled-components';
import ButtonUp from './components/Button/ButtonUp';
import Content from './components/Content/Content';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import MapsAdres from './components/MapsAdres/MapsAdres';
import backgroundImgages from './assets/4.jpg'

const App = ()=>{
  return (
  <S.Body>
    <div className='relock'>
      <Header/>
      <Content/>
      <ButtonUp/>
      <MapsAdres/>
      <Footer/>
    </div>
  </S.Body>
  )
};

export const S = {
  Body: styled.div`
  background: url(${backgroundImgages}) center center/ auto 100% no-repeat fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */
  .relock {
    padding: 10px;
    margin: 15px;
    width: 90%;
    background-color: rgba(255, 255, 255, .7);
    border-radius: 10px;
  }
  
  `
}

export default App;
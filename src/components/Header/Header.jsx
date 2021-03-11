import styled from 'styled-components';
import Button from '../Button/Button';
import imgKabluck from '../../assets/kabluk.png';

const Header =()=>{

  const go = ()=>{
    window.open('https://vk.com/club39897450');
    return null
  }

 
  return (
    <S.Head id='top'>
      <S.HeadBodyLeft>
        <S.HeadLeftBlock>
          <img src={imgKabluck}/>
        </S.HeadLeftBlock>
      </S.HeadBodyLeft>
      <S.HeadBodyCenter>
        <S.HeadCenterBlock>
          <div className='burger'> </div>
          <Button name={'Связаться'} link={go}/>
          <Button name={'Услуги'} idGo={'#navBlock'}/>
          <Button name={'Местоположение'} idGo={'#mapAdres'}/>
        </S.HeadCenterBlock>
      </S.HeadBodyCenter>
      <S.HeadBodyRight>
        <h4>+375 29 101 66 42</h4>
        <h4>г. Гомель, ул. Юбилейная </h4>
        <h4>Киоск на ост. "Торговый центр" (старый аэродром)</h4>
        <h4>Время работы:</h4>
        <h4>ПН.-ПТ.: 9.00 до 18.00</h4>
        <h4>Cб-ВС.: выходной</h4>
      </S.HeadBodyRight>
    </S.Head>
  )
};

export default Header;


const S = {
    Head: styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    `,
    HeadBodyCenter: styled.div`
    
    `,
    HeadBodyLeft: styled.div`
    img {
      height: 150px;
    }
    `,

    HeadLeftBlock: styled.div`
    
    `,
    HeadCenterBlock: styled.div`
    display: flex;
    justify-content: center;
    .burger {
      background-color: black;
        height: 100px;
        width: 100px;
      display: none;
    }
    @media (max-width: 1370px){
      flex-direction: column;
    }
    @media (max-width: 850px){
      flex-direction: column;
      button {
        display: none;
      }
      .burger {
        display: block;
      }
    }

    `,
    HeadBodyRight: styled.div`
    max-width: 30%;
    margin: 10px 0 ;
    @media (max-width: 1200px){
      h4 {
        font-size: 1rem; 
      }
    }
    `,
  }
